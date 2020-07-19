import { CartItem } from './cart-item.model';
import { MenuItem } from '../menu-item/menu-item.model';

export class ShoppingCartService {

  items: CartItem[] = []

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
  }

  total(): number {
    return this.items && this.items.length ? this.items.map(item => item.value()).reduce((total, value) => total + value, 0.0) : 0.0
  }
}