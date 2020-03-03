import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { CartService, Product } from './cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Busy Bee Boutique';

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, public cartService: CartService) {
    iconRegistry.addSvgIcon(
        'cart',
        sanitizer.bypassSecurityTrustResourceUrl('/assets/shopping-cart.svg'));
  }

  badgeHidden(count: number): boolean {
    if ( count < 1) {
      return true;
    } else {
      return false;
    }
  }
}


