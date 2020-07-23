import { Injectable } from '@angular/core';
import { NotificationService } from './notification.service';
import { CartItem } from '../../restaurants/restaurant/restaurant-detail/menu/shopping-cart/cart-item.model';
import { MenuItem } from '../../restaurants/restaurant/restaurant-detail/menu/menu-item/menu-item.model';

@Injectable()
export class ShoppingCartService {

  items: CartItem[] = []

  constructor(private notificationService: NotificationService) {}

  clear(): void {
    this.items = []
  }

  addItem(item: MenuItem): void {
    let foundItem = this.items.find(mItem => mItem.menuItem.id === item.id)
    if (foundItem) {
      this.increaseQty(foundItem)
    } else {
      this.items.push(new CartItem(item))
    }
    this.notificationService.notify(`Você adicionou o item ${item.name}`)
  }

  increaseQty(item: CartItem) {
    item.quantity++
  }

  decreaseQty(item: CartItem) {
    item.quantity--
    if (item.quantity === 0) {
      this.removeItem(item)
    }
  }

  removeItem(item: CartItem): void {
    this.items.splice(this.items.indexOf(item), 1)
    this.notificationService.notify(`Você removeu o item ${item.menuItem.name}`)
  }

  total(): number {
    return this.items && this.items.length ? this.items.map(item => item.value()).reduce((total, value) => total + value, 0.0) : 0.0
  }
}