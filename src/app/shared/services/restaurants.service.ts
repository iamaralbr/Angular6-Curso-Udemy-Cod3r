import { Injectable } from '@angular/core'
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs/internal/Observable'
import { catchError } from 'rxjs/operators';
import { Restaurant } from '../../restaurants/restaurant/restaurant.model'
import { MEAT_API } from '../../app.api'
import { ErrorHandler } from '../../app.error-handler'
import { Review } from '../../restaurants/restaurant/restaurant-detail/reviews/reviews.model';
import { MenuItem } from '../../restaurants/restaurant/restaurant-detail/menu/menu-item/menu-item.model';

@Injectable()
export class RestaurantsService {

  constructor(private http: HttpClient) { }

  //restaurants(search?: string): Observable<Restaurant[]> {
  // let params: HttpParams = undefined
  // if (search) {
  //   params = new HttpParams().append('q', search)
  // }
  restaurants(search: string = ''): Observable<Restaurant[]> {
    const params = new HttpParams().set('q', search)
    return this.http.get<Restaurant[]>(`${MEAT_API}/restaurants`, { params }) // 'q'parametro generico do json-server para buscar em todos os dados em restaurants
      .pipe(catchError(ErrorHandler.handleError))
  }

  restaurantById(id: string): Observable<Restaurant> {
    return this.http.get<Restaurant>(`${MEAT_API}/restaurants/${id}`)
      .pipe(catchError(ErrorHandler.handleError))
  }

  reviewsOfRestaurant(id: string): Observable<Review> {
    return this.http.get<Review>(`${MEAT_API}/restaurants/${id}/reviews`) // get(`${MEAT_API}/restaurants/${id}/reviews/${rid}`) // review especifico
      .pipe(catchError(ErrorHandler.handleError))
  }

  menuOfRestaurant(id: string): Observable<MenuItem[]> {
    return this.http.get<MenuItem[]>(`${MEAT_API}/restaurants/${id}/menu`)
      .pipe(catchError(ErrorHandler.handleError))
  }
}
