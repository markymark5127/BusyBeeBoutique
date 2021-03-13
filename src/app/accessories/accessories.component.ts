import { Component, OnInit, Input } from '@angular/core';
import { Product, Pricing, CartService } from '../cart.service';

@Component({
  selector: 'app-accessories',
  templateUrl: './accessories.component.html',
  styleUrls: ['./accessories.component.css']
})
export class AccessoriesComponent implements OnInit {
  @Input()
  ear: Pricing[] = [
    { size: "Jokester", price:  8},
    { size: "Champagne", price:  8},
    { size: "Amazon Rain", price:  8},
    { size: "Purple People Eater", price:  8},
    { size: "Check Me Out", price:  8},
    { size: "The Amazon", price:  8},
    { size: "Amethyst", price:  8},
    { size: "Rose All Day", price:  8},
    { size: "Beach Vibes", price:  8},
    { size: "Rose Quartz", price:  8},
    { size: "The Flock", price:  8},
    { size: "Orange Peel", price:  8},
    { size: "Pumpkin Spice", price:  8},
    { size: "Opal", price:  8},
    { size: "Minty", price:  8},
    { size: "Black Sea", price:  8},
    { size: "Raspberry Sorbet", price:  8},
  ]
  mat: Pricing[] = [
    { size: "Party's In The Back", price:  25},
    { size: "Go Away", price:  25},
    { size: "Last Name", price:  25},
  ]
  song: Pricing[] = [
    { size: "11 x 14 Shadow Box", price:  45},
  ]
  accessories: Product[] = [

    { name: "Gem Earring", price: 8, desc: "Small stud earrings in a fun geometric pattern and fun colors!", size: "Jokester", img:"/assets/Earrings1.jpeg", priceOpt: this.ear  },
    { name: "House Door Mat", price: 25, desc: "Personalized Door Mats", size: "Party's In The Back", img:"/assets/PartyInTheBackMat.jpeg", priceOpt: this.mat  },
    { name: "Song Box", price: 45, desc: "Personalized Shadow Boxes that when scanned with your Spotify app play a song of your choosing", size: "11 x 14 Shadow Box", img:"/assets/SongBox.jpeg", priceOpt: this.song  }

  ];

  constructor( public cartService: CartService) { }

  ngOnInit(): void {
  }

  addToCart(product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

  onSizeChange(product: Product) {
    var index = this.accessories.indexOf(product);
    for(let i = 0; i < this.accessories[index].priceOpt.length; i++) {
      if (this.accessories[index].size == this.accessories[index].priceOpt[i].size)
      {
        this.accessories[index].price = this.accessories[index].priceOpt[i].price
      }
    }
  }

}
