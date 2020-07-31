import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, AbstractControl } from '@angular/forms'
import { Router } from '@angular/router'
import { RadioOption } from '../shared/radio/radio-option.model';
import { OrderService } from '../shared/services/order.service';
import { CartItem } from '../restaurants/restaurant/restaurant-detail/menu/shopping-cart/cart-item.model';
import { Order, OrderItem } from './order.model'
import { _EMAIL_PATTERN, _NUMBER_PATTERN } from '../shared/patterns'
import { compare } from '../shared/closure'
import { tap } from 'rxjs/operators';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  orderForm: FormGroup

  private _delivery: number = 8

  orderId: number

  paymentOptions: RadioOption[] = [
    { label: 'Dinheiro', value: 'MON' },
    { label: 'Cartão de Débito', value: 'DEB' },
    { label: 'Cartão Refeição', value: 'REF' },
  ]

  constructor(private orderService: OrderService,
    private router: Router,
    private formBuilder: FormBuilder) { }

  get delivery(): number {
    return this.orderService.cartItems().length ? this._delivery : 0
  }

  ngOnInit(): void {
    this.orderForm = new FormGroup({
      name: new FormControl('', { validators: [Validators.required, Validators.minLength(5)] }),
      email: this.formBuilder.control('', [Validators.required, Validators.pattern(_EMAIL_PATTERN)]),
      emailConfirmation: this.formBuilder.control('', [Validators.required, Validators.pattern(_EMAIL_PATTERN)]),
      address: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
      number: this.formBuilder.control('', [Validators.required, Validators.pattern(_NUMBER_PATTERN)]),
      optionalAddress: this.formBuilder.control(''),
      paymentOption: new FormControl('', { validators: [Validators.required], updateOn: 'change' })
    }, { validators: [compare('email', 'emailConfirmation')], updateOn: 'blur' })
  }

  // use: {validator: OrderComponent.equalsTo}
  static equalsTo(group: AbstractControl): { [key: string]: boolean } {
    const email = group.get('email')
    const emailConfirmation = group.get('emailConfirmation')
    if (!email || !emailConfirmation) {
      return undefined
    }
    if (email.value !== emailConfirmation.value) {
      let error = { 'emailsNotMatch': true }
      emailConfirmation.setErrors(error) //Adiciono um erro aqui
      return error
    } else {
      emailConfirmation.setErrors(null)
    }
    return undefined
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

  isOrderCompleted(): boolean {
    return this.orderId !== undefined
  }

  checkOrder(order: Order) {
    order.orderItems = this.cartItems()
      .map((item: CartItem): OrderItem => new OrderItem(item.quantity, item.menuItem.id))
    this.orderService.checkOrder(order).pipe(
      tap((order: Order) => this.orderId = order.id)
    ).subscribe(() => {
      this.router.navigate(['/order-summary'])
      this.orderService.clear()
    })
  }
}
