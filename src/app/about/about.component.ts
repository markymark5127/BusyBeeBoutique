import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public innerWidth: any;
  public innerHeight: any;
  public isMobile = false;
  
  constructor() { }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    this.innerHeight = window.innerHeight;
    if (this.innerHeight > this.innerWidth) {
      this.isMobile = true;
    }
  }

}
