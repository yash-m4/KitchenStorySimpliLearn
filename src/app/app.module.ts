import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { UserHomeComponent } from './user-home/user-home.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminAddProductComponent } from './admin-add-product/admin-add-product.component';
import { AdminProductListComponent } from './admin-product-list/admin-product-list.component';
import { AdminPasswordResetComponent } from './admin-password-reset/admin-password-reset.component';
import { AdminDeleteProductComponent } from './admin-delete-product/admin-delete-product.component';
import { KartComponent } from './kart/kart.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    UserHomeComponent,
    AdminHomeComponent,
    AdminAddProductComponent,
    AdminProductListComponent,
    AdminPasswordResetComponent,
    AdminDeleteProductComponent,
    KartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
