import { Component, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { CartService, Product } from './cart.service';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav;
  title = 'Busy Bee Boutique';
  public innerWidth: any;
  public innerHeight: any;
  public isMobile = false;

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, public cartService: CartService) {
    iconRegistry.addSvgIcon('cart', sanitizer.bypassSecurityTrustResourceUrl('/assets/shopping-cart.svg'));
    iconRegistry.addSvgIcon('menu', sanitizer.bypassSecurityTrustResourceUrl('/assets/menu.svg'));
    iconRegistry.addSvgIcon('close', sanitizer.bypassSecurityTrustResourceUrl('/assets/close.svg'));
  }
  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    this.innerHeight = window.innerHeight;
    if (this.innerHeight > this.innerWidth) {
      this.isMobile = true;
    }
  }
  close() {
    this.sidenav.close();
  }
  badgeHidden(count: number): boolean {
    if ( count < 1) {
      return true;
    } else {
      return false;
    }
  }
}
