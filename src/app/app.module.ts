import '@angular/common/locales/global/pt';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID, ErrorHandler } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { LocationStrategy, HashLocationStrategy } from '@angular/common'
import { SharedModule } from './shared/shared.module';

import { ApplicationErrorHandler } from './app.error-handler'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantComponent } from './restaurants/restaurant/restaurant.component';
import { RestaurantDetailComponent } from './restaurants/restaurant/restaurant-detail/restaurant-detail.component';
import { MenuComponent } from './restaurants/restaurant/restaurant-detail/menu/menu.component';
import { ShoppingCartComponent } from './restaurants/restaurant/restaurant-detail/menu/shopping-cart/shopping-cart.component';
import { MenuItemComponent } from './restaurants/restaurant/restaurant-detail/menu/menu-item/menu-item.component';
import { ReviewsComponent } from './restaurants/restaurant/restaurant-detail/reviews/reviews.component'
import { OrderSummaryComponent } from './order/order-summary/order-summary.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './security/login/login.component';
import { UserDetailComponent } from './header/user-detail/user-detail.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    RestaurantsComponent,
    RestaurantComponent,
    RestaurantDetailComponent,
    MenuComponent,
    ShoppingCartComponent,
    MenuItemComponent,
    ReviewsComponent,
    OrderSummaryComponent,
    NotFoundComponent,
    LoginComponent,
    UserDetailComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule.forRoot(), // importa os modulos compartilhados + os providers (antes no core)
    AppRoutingModule
  ],
  providers: [
    //{ provide: LocationStrategy, useClass: HashLocationStrategy},
    { provide: LOCALE_ID, useValue: 'pt' },
    { provide: ErrorHandler, useClass: ApplicationErrorHandler }
  ], 
  bootstrap: [AppComponent]
})
export class AppModule { }
