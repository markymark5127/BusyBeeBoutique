import { Component, OnInit, Inject } from '@angular/core';
import { Product, CartService } from '../cart.service';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  email: string;
  name: string;
}

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  displayedColumns: string[] = ['Name', 'Size', 'Price', 'Remove'];
  dataSource = new MatTableDataSource(this.cartService.items);
  email: string;
  name: string;

  constructor(public cartService: CartService, public dialog: MatDialog, private http: HttpClient) {
  }
  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(OrderDialogComponent, {
      data: { email: this.email, name: this.name }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.email = result.email;
      this.name = result.name;

      if (this.name !== '' && this.email !== '' && this.getTotalCost() > 0) {
        let purchases = [];
        for( let i = 0; i < this.cartService.items.length; i++) {
          purchases.push([this.cartService.items[i].name, this.cartService.items[i].size, this.cartService.items[i].price])
        }
        var send = {
                  name: this.name,
                  email: this.email,
                  subject: 'Order',
                  totalCost: this.getTotalCost(),
                  message: purchases
                };
        this.http.post('https://formspree.io/xqkbwypj', JSON.stringify(send))
        .subscribe(response => {}, err => { alert('There was an error sending your order. Please try again.'); });
        this.clearItems();
      } else {
        alert('There was an error sending your order. Make sure there are items in the cart and your information is filled out');
      }



    });
  }
  getTotalCost() {
    return this.cartService.items.map(t => t.price).reduce((acc, value) => acc + value, 0);
  }

  removeItem(item) {
    const index: number = this.cartService.items.indexOf(item);
    if (index !== -1) {
      this.cartService.items.splice(index, 1);
      this.dataSource._updateChangeSubscription();
    }
  }

  clearItems() {
    while (0 < this.cartService.getLength()) {
        this.cartService.items.splice(0, 1);
    }
    this.dataSource._updateChangeSubscription();
  }

}

// Dialog component
@Component({
  selector: 'app-order-dialog',
  templateUrl: './order-dialog.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<OrderDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onCancelClick(): void {
    this.dialogRef.close();
  }

  isntFilledOut() {
    let isntFilled = true;
    if ( this.data.name !== '' && this.data.email !== '') {
      isntFilled = false;
    }
    return isntFilled;
  }
  onSubmit() {}
}
