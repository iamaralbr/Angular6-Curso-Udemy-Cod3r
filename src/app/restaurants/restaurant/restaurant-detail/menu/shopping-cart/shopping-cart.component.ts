import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../../../../../shared/services/shopping-cart.service'
import { CartItem } from './cart-item.model';
import { MenuItem } from '../menu-item/menu-item.model';

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent implements OnInit {

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit(): void {
  }

  items(): CartItem[] {
    return this.shoppingCartService.items;
  }

  clear(): void {
    this.shoppingCartService.clear()
  }

  removeItem(item: CartItem): void {
    this.shoppingCartService.removeItem(item)
  }

  addItem(item: MenuItem): void {
    this.shoppingCartService.addItem(item)
  }

  total(): number {
    return this.shoppingCartService.total()
  }
}
