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
    {text: '/assets/twea.jpeg', cols: 1, rows: 2, color: 'lightblue'},
    {text: '/assets/farmFresh.jpeg', cols: 1, rows: 1, color: 'lightblue'},
    {text: '/assets/lucielle.jpeg', cols: 1, rows: 2, color: 'lightblue'},
    {text: '/assets/PartyInTheBackMat.jpeg', cols: 1, rows: 2, color: 'lightblue'},
    {text: '/assets/Earrings1.jpeg', cols: 1, rows: 1, color: 'lightblue'},
    {text: '/assets/SongBox.jpeg', cols: 1, rows: 1, color: 'lightblue'},
    {text: '/assets/busybee_trans.png', cols: 2, rows: 2, color: 'lightblue'},
    {text: '/assets/luckyCharmCocoa.jpeg', cols: 1, rows: 1, color: 'lightblue'},
    {text: '/assets/theChild.jpeg', cols: 1, rows: 2, color: 'lightblue'},
    {text: '/assets/mamaBearEarings.jpeg', cols: 1, rows: 2, color: 'lightblue'},
    {text: '/assets/reesesCocoaBomb.jpeg', cols: 1, rows: 1, color: 'lightblue'},
    {text: '/assets/rugratz.jpeg', cols: 1, rows: 2, color: 'lightblue'},
    {text: '/assets/sisFlowers.jpeg', cols: 1, rows: 2, color: 'lightblue'},
    {text: '/assets/sugarCookie.jpeg', cols: 1, rows: 1, color: 'lightblue'},
    {text: '/assets/weThePeople.jpeg', cols: 1, rows: 2, color: 'lightblue'},



  ];
  constructor() { }

  ngOnInit(): void {
  }

}
