import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from '../../../../shared/services/restaurants.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { MenuItem } from './menu-item/menu-item.model';

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  menu: Observable<MenuItem[]>

  constructor(private restaurantsService: RestaurantsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.menu = this.restaurantsService.menuOfRestaurant(this.route.parent.snapshot.params['id'])
  }

  addMenuItem(item: MenuItem ):void {
    console.log(item)
  }

}
