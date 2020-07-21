import { Component, OnInit } from '@angular/core';
import { Restaurant } from './restaurant/restaurant.model';
import { RestaurantsService } from '../core/restaurants.service';

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html'
})
export class RestaurantsComponent implements OnInit {

  restaurants: Restaurant[]

  constructor(private restaurantsService: RestaurantsService) { } // restaurantsService recebe uma instância da classe RestaurantsService por conta do Provider

  ngOnInit(): void {
    type T = (r: Restaurant[]) => void
    const listener: T = restaurants => this.restaurants = restaurants
    this.restaurantsService.restaurants()
      .subscribe(listener)
  }

}
