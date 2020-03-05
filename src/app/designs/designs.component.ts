import { Component, OnInit, Input } from '@angular/core';
import { Product, CartService } from '../cart.service';

@Component({
  selector: 'app-designs',
  templateUrl: './designs.component.html',
  styleUrls: ['./designs.component.css']
})
export class DesignsComponent implements OnInit {
  @Input()
  cups: Product[] = [
    { name: "The Oogie Boogie", price: 40, desc: "A glow in the dark Nightmare Before Christmas themed Tumbler", size: 20, img:"/assets/NBC.jpg" },
    { name: "The Lepriclaw", price: 40, desc: "A tumbler with a St.Patricks Day themed parody of the iconic whiteclaw design", size: 20, img:"/assets/lepriclaw.jpg" }
  ];

  constructor( public cartService: CartService) { }

  ngOnInit(): void {
  }

  addToCart(product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

  onSizeChange(product: Product) {
    var index = this.cups.indexOf(product);
    switch (this.cups[index].size) {
      case 10:
        this.cups[index].price = 35;
        break;
      case 20:
        this.cups[index].price = 40;
        break;
      case 30:
        this.cups[index].price = 45;
        break;
      case 36:
        this.cups[index].price = 50;
        break;
      case 46:
        this.cups[index].price = 55;
        break;
      case 64:
        this.cups[index].price = 60;
        break;
    }
  }

}
