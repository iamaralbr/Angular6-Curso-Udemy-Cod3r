import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { RadioOption } from '../shared/radio/radio-option.model';
import { OrderService } from './order.service';
import { CartItem } from '../restaurants/restaurant/restaurant-detail/menu/shopping-cart/cart-item.model';
import { Order, OrderItem } from './order.model'

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  private _delivery: number = 8

  paymentOptions: RadioOption[] = [
    { label: 'Dinheiro', value: 'MON' },
    { label: 'Cartão de Débito', value: 'DEB' },
    { label: 'Cartão Refeição', value: 'REF' },
  ]

  constructor(private orderService: OrderService, private router: Router) { }

  get delivery(): number {
    return this.orderService.cartItems().length ? this._delivery : 0
  }

  ngOnInit(): void {
  }

  itemsValue(): number {
    return this.orderService.itemsValue()
  }

  cartItems(): CartItem[] {
    return this.orderService.cartItems()
  }

  increaseQty(item: CartItem) {
    this.orderService.increaseQty(item)
  }

  decreaseQty(item: CartItem) {
    this.orderService.decreaseQty(item)
  }

  remove(item: CartItem) {
    this.orderService.remove(item)
  }

  checkOrder(order: Order) {
    order.orderItems = this.cartItems()
      .map((item: CartItem): OrderItem => new OrderItem(item.quantity, item.menuItem.id))
    this.orderService.checkOrder(order).subscribe((order: Order) => {
      this.router.navigate(['/order-summary'])
      this.orderService.clear()
    })
  }
}
