import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from '../../../core/restaurants.service'
import { Restaurant } from '../../restaurant/restaurant.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html'
})
export class RestaurantDetailComponent implements OnInit {

  restaurant: Restaurant

  constructor(private restaurantsService: RestaurantsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    type T = (r: Restaurant) => void
    const listener: T = restaurant => this.restaurant = restaurant
    this.restaurantsService.restaurantById(this.route.snapshot.params['id'])
      .subscribe(listener)
  }

}
