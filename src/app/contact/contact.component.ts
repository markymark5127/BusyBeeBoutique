import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  name: string;
  email: string;
  message: string;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  onSubmit(event) {
    var data = {
      name: this.name,
      email: this.email,
      message: this.message
    };
    this.http.post('https://formspree.io/xqkbwypj', JSON.stringify(data))
      .subscribe();
  }

}
