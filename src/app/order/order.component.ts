import { Component, OnInit } from '@angular/core';
import { Product, CartService } from '../cart.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  displayedColumns: string[] = ['Name', 'Size', 'Price', 'Remove'];
  dataSource = new MatTableDataSource(this.cartService.items);
  constructor(public cartService: CartService) {
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
      //console.log("datasource after cartservice: ", this.dataSource);
      //this.datasource.splice(index, 1);
      this.dataSource._updateChangeSubscription();
    }
  }

}
