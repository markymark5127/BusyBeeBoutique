import { Component, OnInit } from '@angular/core';
import { Product, CartService } from '../cart.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  displayedColumns: string[] = ['Name', 'Size', 'Price', 'Remove'];
  constructor(public cartService: CartService) {
    console.log(cartService.items[0].name);
  }

  ngOnInit(): void {
  }

  getTotalCost() {
    return this.cartService.items.map(t => t.price).reduce((acc, value) => acc + value, 0);
  }

  removeItem(item) {
    const index: number = this.cartService.items.indexOf(item);
    if (index !== -1) {
      this.cartService.items.splice(index, 1);
    }
  }

}
