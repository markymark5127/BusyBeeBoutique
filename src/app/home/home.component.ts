import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ListKeyManager } from '@angular/cdk/a11y';
import { Orientation } from '@ngmodule/material-carousel';

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

  public Imagedata = [
    '/assets/twea.jpeg',
    '/assets/farmFresh.jpeg',
    '/assets/lucielle.jpeg',
    '/assets/PartyInTheBackMat.jpeg',
    '/assets/Earrings1.jpeg',
    '/assets/SongBox.jpeg',
    '/assets/busybee_trans.png',
    '/assets/luckyCharmCocoa.jpeg',
    '/assets/theChild.jpeg',
    '/assets/mamaBearEarings.jpeg',
    '/assets/reesesCocoaBomb.jpeg',
    '/assets/rugratz.jpeg',
    '/assets/sisFlowers.jpeg',
    '/assets/sugarCookie.jpeg',
    '/assets/weThePeople.jpeg'
  ];
  startIndex = 0;
  constructor() { }

  ngOnInit() {
    this.Repeat();
  }

  Repeat() {
    setTimeout(() => {
      this.__FunctionSlide();
      this.Repeat();
    }, 2000);
  }

  __FunctionSlide() {
    const slides = Array.from(document.getElementsByClassName('mall-show-slide'));
    if (slides === []) {
      this.Repeat();
    }
    for (const x of slides) {
      const y = x as HTMLElement;
      y.style.display = 'none';
    }
    if (this.startIndex > slides.length - 1) {
      this.startIndex = 0;
      const slide = slides[this.startIndex] as HTMLElement;
      slide.style.display = 'block';
      this.startIndex++;
    } else {

      const slide = slides[this.startIndex] as HTMLElement;
      slide.style.display = 'block';
      this.startIndex++;
    }
  }




}
