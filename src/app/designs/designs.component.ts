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

}
