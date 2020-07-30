import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations'
import { FormBuilder, FormControl, FormGroup } from '@angular/forms'
import { from } from 'rxjs'
import { switchMap, debounceTime, distinctUntilChanged, catchError } from 'rxjs/operators'

import { Restaurant } from './restaurant/restaurant.model';
import { RestaurantsService } from '../shared/services/restaurants.service';

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html',
  animations: [
    trigger('toogleSearch', [
      state('hidden', style({
        opacity: 0,
        "max-height": "0px"
      })),
      state('visible', style({
        opacity: 1,
        "max-height": "70px",
        "margin-top": "20px"
      })),
      transition('* => *', animate('250ms 0s ease-in-out'))
    ])
  ]
})
export class RestaurantsComponent implements OnInit {

  searchBarState = 'hidden'
  restaurants: Restaurant[]

  searchForm: FormGroup
  searchControl: FormControl

  constructor(private restaurantsService: RestaurantsService, // restaurantsService recebe uma instância da classe RestaurantsService por conta do Provider
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.searchControl = this.fb.control('')
    this.searchForm = this.fb.group({
      searchControl: this.searchControl
    })

    type T = (r: Restaurant[]) => void
    const listener: T = restaurants => this.restaurants = restaurants

    this.searchControl.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(searchTerm => this.restaurantsService.restaurants(searchTerm).pipe(catchError(()=>from<Restaurant[]>([]))))
    ).subscribe(listener)

    this.restaurantsService.restaurants().subscribe(listener)
  }

  toggleSearch(iptSearch: HTMLInputElement) {
    this.searchBarState = this.searchBarState === 'hidden' ? 'visible' : 'hidden'
    if (this.searchBarState === 'visible') {
      iptSearch.focus()
    }
  }

}
