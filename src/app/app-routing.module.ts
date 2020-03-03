import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DesignsComponent } from './designs/designs.component';
import { OrderComponent } from './order/order.component';
import { CustomComponent } from './custom/custom.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'cart', component: OrderComponent},
  {path: 'designs', component: DesignsComponent},
  {path: 'custom', component: CustomComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
