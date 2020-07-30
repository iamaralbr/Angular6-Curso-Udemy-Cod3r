import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HTTP_INTERCEPTORS } from '@angular/common/http'

import { InputComponent } from './input/input.component';
import { RadioComponent } from './radio/radio.component'
import { RatingComponent } from './rating/rating.component'
import { SnackbarComponent } from './messages/snackbar/snackbar.component'

import { RestaurantsService } from './services/restaurants.service'
import { ShoppingCartService } from './services/shopping-cart.service'
import { OrderService } from './services/order.service';
import { NotificationService } from './services/notification.service'
import { LoginService } from './services/login.service'

import { LoggedInGuard } from '../security/loggedin.guard'
import { LeaveOrderGuard } from '../order/leave-order.guard'
import { AuthInterceptor } from '../security/auth.interceptor'

@NgModule({
  declarations: [
    InputComponent,
    RadioComponent,
    RatingComponent,
    SnackbarComponent
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
    SnackbarComponent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { 
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [
        RestaurantsService, // forma reduzida: cria uma instância da class (service) RestaurantsService, Singletron
        { provide: ShoppingCartService, useClass: ShoppingCartService }, // forma mais 'verbosa'
        OrderService,
        NotificationService,
        LoginService,
        LoggedInGuard,
        LeaveOrderGuard,
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
      ]
    }
  }
}