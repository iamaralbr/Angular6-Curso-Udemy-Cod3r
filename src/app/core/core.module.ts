import { NgModule } from '@angular/core'

import { RestaurantsService } from './restaurants.service'
import { ShoppingCartService } from './shopping-cart.service'
import { OrderService } from './order.service'

@NgModule({
  providers: [
    RestaurantsService, // forma reduzida: cria uma instância da class (service) RestaurantsService, Singletron
    { provide: ShoppingCartService, useClass: ShoppingCartService }, // forma mais 'verbosa'
    OrderService
  ]
})
export class CoreModule { } 