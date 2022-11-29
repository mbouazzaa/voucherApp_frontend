import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {AddVoucherComponent} from "./add-voucher/add-voucher.component";

const routes: Routes = [
  {path: 'home' , component: HomeComponent},
  { path: '',  redirectTo: '/home', pathMatch: 'full' },
  {path: 'add-voucher' , component: AddVoucherComponent},


];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
