import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DesignsComponent } from './designs/designs.component';
import { OrderComponent } from './order/order.component';
import { CustomComponent } from './custom/custom.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ClothingComponent } from './clothing/clothing.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { AboutComponent } from './about/about.component';
import { NewsComponent } from './news/news.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'cart', component: OrderComponent},
  {path: 'cups', component: DesignsComponent},
  {path: 'custom', component: CustomComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'clothing', component: ClothingComponent},
  {path: 'accessories', component: AccessoriesComponent},
  {path: 'about', component: AboutComponent},
  {path: 'news', component: NewsComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
