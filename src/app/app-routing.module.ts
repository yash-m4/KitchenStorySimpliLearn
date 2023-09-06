import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminAddProductComponent } from './admin-add-product/admin-add-product.component';
import { AdminProductListComponent } from './admin-product-list/admin-product-list.component';
import { AdminPasswordResetComponent } from './admin-password-reset/admin-password-reset.component';
import { AdminDeleteProductComponent } from './admin-delete-product/admin-delete-product.component';
import { KartComponent } from './kart/kart.component';

const routes: Routes = [
  {
    path: 'home',
    component:HomeComponent
  },
  {
    path: 'kart',
    component:KartComponent
  },
  {
    path: "admin-delete-product",
    component:AdminDeleteProductComponent
  },
  {
    path: 'admin-add-product',
    component:AdminAddProductComponent
  },
  {
    path: 'admin-product-list',
    component:AdminProductListComponent
  },
  {
    path: 'admin-password-reset',
    component:AdminPasswordResetComponent
  },
  {
    path: 'adminhome',
    component:AdminHomeComponent
  },
  {
    path: '',
    component:HomeComponent
  },
  {
    path: 'userhome',
    component:UserHomeComponent
  },
  {
    path: 'login',
    component:LoginComponent
  },
  {
    path: 'register',
    component:RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
