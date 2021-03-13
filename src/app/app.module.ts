import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Material Modules Added
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

// Other Modules Added
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

// Created Components
import { DesignsComponent } from './designs/designs.component';
import { OrderComponent, OrderDialogComponent } from './order/order.component';
import { CustomComponent } from './custom/custom.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContactComponent } from './contact/contact.component';
import { ClothingComponent } from './clothing/clothing.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { AboutComponent } from './about/about.component';
import { NewsComponent } from './news/news.component';

@NgModule({
  declarations: [
    AppComponent,
    DesignsComponent,
    OrderComponent,
    OrderDialogComponent,
    CustomComponent,
    HomeComponent,
    PageNotFoundComponent,
    ContactComponent,
    ClothingComponent,
    AccessoriesComponent,
    AboutComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatBadgeModule,
    MatToolbarModule,
    MatSelectModule,
    MatRadioModule,
    MatDialogModule,
    MatInputModule,
    MatCardModule,
    FormsModule,
    MatTableModule,
    MatTabsModule,
    MatGridListModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent, []]
})
export class AppModule { }
