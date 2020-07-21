import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { InputComponent } from './input/input.component';
import { RadioComponent } from './radio/radio.component'
import { RatingComponent } from './rating/rating.component'

import { RestaurantsService } from '../core/restaurants.service'
import { ShoppingCartService } from '../core/shopping-cart.service'
import { OrderService } from '../core/order.service'

@NgModule({
  declarations: [
    InputComponent,
    RadioComponent,
    RatingComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    InputComponent,
    RadioComponent,
    RatingComponent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { 
  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: SharedModule,
      providers: [
        RestaurantsService, // forma reduzida: cria uma instância da class (service) RestaurantsService, Singletron
        { provide: ShoppingCartService, useClass: ShoppingCartService }, // forma mais 'verbosa'
        OrderService
      ]
    }
  }
}