import { Component, OnInit, Input } from '@angular/core';
import { Product, Pricing, CartService } from '../cart.service';

@Component({
  selector: 'app-designs',
  templateUrl: './designs.component.html',
  styleUrls: ['./designs.component.css']
})
export class DesignsComponent implements OnInit {
  @Input()
  tchd: Pricing[] = [
    { size: "15 oz. Skinny", price:  30},
    { size: "15 oz. Skinny + Glitter", price: 32},
    { size: "20 oz. Skinny", price: 37},
    { size: "20 oz. Skinny + Glitter", price: 39},
    { size: "20 oz. Modern Curve", price: 37},
    { size: "20 oz. Modern Curve + Glitter", price: 39},
    { size: "30 oz. Skinny", price: 47},
    { size: "30 oz. Skinny + Glitter", price: 49},
    { size: "30 oz. Modern Curve", price: 47},
    { size: "30 oz. Modern Curve + Glitter", price: 49}
  ]

  cc9: Pricing[] = [
      { size: "15 oz. Skinny", price: 30},
      { size: "20 oz. Skinny", price: 35},
      { size: "20 oz. Modern Curve", price: 40},
      { size: "30 oz. Modern Curve", price: 45}
  ]

  cw: Pricing[] = [
    { size: "Lit", price: 20},
    { size: "Buzzed", price: 20},
    { size: "Toasted", price: 20},
    { size: "Hammered", price: 20},
  ]

  hc: Pricing[] = [
    { size: "15 oz. Skinny", price: 27},
    { size: "20 oz. Skinny", price: 32},
    { size: "20 oz. Modern Curve", price: 32},
    { size: "30 oz. Skinny", price: 42},
    { size: "30 oz. Modern Curve", price: 42},
    { size: "20 oz. Strawbler", price: 35},
    { size: "20 oz. Skinny Strawbler", price: 35},
    { size: "30 oz. Skinny Strawbler", price: 45}
  ]

  cups: Product[] = [

    { name: "Tri-Color Hydro Dip", price: 30, desc: "Personalized cup with a exciting and unique patterned design", size: "15 oz. Skinny", img:"/assets/TricolorHydroDipMadison.jpeg", priceOpt: this.tchd  },
    { name: "Colorful Cloud 9", price: 30, desc: "A specialized design that gives a cloud effect with a hint of sparkle", size: "15 oz. Skinny", img:"/assets/GlitterCloud.jpeg", priceOpt: this.cc9},
    { name: "Chetah Wine", price: 20, desc: "A wine glass with optional fun sayings such as \"Hammered\"", size: "Lit", img:"/assets/CheetahPrintWine.jpeg", priceOpt: this.cw},
    { name: "Holy Cow!", price: 27, desc: "A flower crowned cow with the slogan \"Not Today Heifer\"", size: "15 oz. Skinny", img:"/assets/HolyCow.jpeg", priceOpt: this.hc }
    //{ name: "The Lepriclaw", price: 40, desc: "A tumbler with a St.Patricks Day themed parody of the iconic whiteclaw design", size: 20, img:"/assets/lepriclaw.jpg" }
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
    for(let i = 0; i < this.cups[index].priceOpt.length; i++) {
      if (this.cups[index].size == this.cups[index].priceOpt[i].size)
      {
        this.cups[index].price = this.cups[index].priceOpt[i].price
      }
    }
  }

}
