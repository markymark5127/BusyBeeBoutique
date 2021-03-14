import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  @Input()
  public width = 500;
  public height = 500;
  public screenWidth: any;
  public screenHeight: any;
  constructor() { }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
    if (this.screenWidth < 500) {
      this.width = this.screenWidth;

    }
    if (this.screenHeight < 500) {
      this.height = this.screenHeight;

    }
  }

}
