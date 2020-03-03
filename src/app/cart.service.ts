import { Injectable } from '@angular/core';

interface Sizes {
  value: number;
  viewValue: string;
}

export interface Product {
  name: string;
  price: number;
  size: number;
  desc: string;
  img: string;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {

  sizes: Sizes[] = [
    {value: 10, viewValue: '10 oz.'},
    {value: 20, viewValue: '20 oz.'},
    {value: 30, viewValue: '30 oz.'},
    {value: 36, viewValue: '36 oz.'},
    {value: 64, viewValue: '64 oz.'},
  ];
  items: Product[] = [];

  constructor() { }


    addToCart(product: Product) {
      this.items.push(product);
    }

    getItems() {
      return this.items;
    }

    getLength() {
      return this.items.length;
    }

    clearCart() {
      this.items = [];
      return this.items;
    }
}
