import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/internal/Observable'
import { MEAT_API } from '../../app.api'
import { ShoppingCartService } from '../../shared/services/shopping-cart.service';
import { CartItem } from '../../restaurants/restaurant/restaurant-detail/menu/shopping-cart/cart-item.model';
import { Order } from '../../order/order.model';

@Injectable()
export class OrderService {

  constructor(private cartService: ShoppingCartService, private http: HttpClient) { }

  itemsValue(): number {
    return this.cartService.total()
  }

  cartItems(): CartItem[] {
    return this.cartService.items
  }

  increaseQty(item: CartItem) {
    this.cartService.increaseQty(item)
  }

  decreaseQty(item: CartItem) {
    this.cartService.decreaseQty(item)
  }

  remove(item: CartItem) {
    this.cartService.removeItem(item)
  }

  clear() {
    this.cartService.clear()
  }

  checkOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(`${MEAT_API}/orders`, order )
  }
}
