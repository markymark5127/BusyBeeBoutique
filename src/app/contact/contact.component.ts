import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  name: string;
  email: string;
  content: string;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  isntFilledOut() {
    let isntFilled = true;
    if ( this.name !== '' && this.email !== '' && this.content !== '') {
      isntFilled = false;
    }
    return isntFilled;
  }

  onSubmit() {
    let data = {
      name: this.name,
      email: this.email,
      subject: 'Contact',
      content: this.content
    };

    this.http.post('https://formspree.io/xqkbwypj', JSON.stringify(data))
      .subscribe(response => {}, err => { alert('There was an error sending your message. Please try again.'); });

    this.email = '';
    this.name = '';
    this.content = '';
  }

}
