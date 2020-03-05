import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  emailForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    message: new FormControl(''),
    subject: new FormControl(''),
  });

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  onSubmit() {
    this.http.post('https://formspree.io/xqkbwypj', JSON.stringify(this.emailForm)).subscribe(response => {}, err => { alert('There was an error sending your message. Please try again.'); });
    this.emailForm.reset();
  }

}
