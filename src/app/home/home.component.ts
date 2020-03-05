import { Component, OnInit } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  tiles: Tile[] = [
    {text: '/assets/CMWWine.jpg', cols: 3, rows: 1, color: 'lightblue'},
    {text: '/assets/lepriclaw.jpg', cols: 1, rows: 2, color: 'lightblue'},
    {text: '/assets/NBC2.jpg', cols: 1, rows: 1, color: 'lightblue'},
    {text: '/assets/CMW.jpg', cols: 2, rows: 1, color: 'lightblue'},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
