import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from '../../../../core/restaurants.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Review } from './reviews.model'
import { _PATH_REACTION } from '../../../../shared/constant';

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html'
})
export class ReviewsComponent implements OnInit {

  reviews: Observable<Review>

  constructor(private restaurantsService: RestaurantsService, private route: ActivatedRoute) { }

  iconSelect(r: number): string {
    if (r >= 4)
      return `${_PATH_REACTION}/loved.png`
    else if (r >= 3)
      return `${_PATH_REACTION}/soso.png`
    else
      return `${_PATH_REACTION}/pissed.png`
  }

  ngOnInit(): void {
    this.reviews = this.restaurantsService.reviewsOfRestaurant(this.route.parent.snapshot.params['id'])
  }
}
