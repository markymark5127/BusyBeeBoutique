import { Component, OnInit, Input } from '@angular/core';
import { Product, Pricing, CartService } from '../cart.service';

@Component({
  selector: 'app-clothing',
  templateUrl: './clothing.component.html',
  styleUrls: ['./clothing.component.css']
})
export class ClothingComponent implements OnInit {
  @Input()
  wtf: Pricing[] = [
    { size: "Small", price:  35},
    { size: "Medium", price: 35},
    { size: "Large", price: 35},
    { size: "XL", price: 35},
    { size: "XXL", price: 35},
  ]
  clothes: Product[] = [

    { name: "WTFucculent", price: 35, desc: "Plant lovers interjection on a shirt", size: "Small", img:"/assets/WTFuccShirt.jpeg", priceOpt: this.wtf  },

  ];

  constructor( public cartService: CartService) { }

  ngOnInit(): void {
  }

  addToCart(product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

  onSizeChange(product: Product) {
    var index = this.clothes.indexOf(product);
    for(let i = 0; i < this.clothes[index].priceOpt.length; i++) {
      if (this.clothes[index].size == this.clothes[index].priceOpt[i].size)
      {
        this.clothes[index].price = this.clothes[index].priceOpt[i].price
      }
    }
  }

}
