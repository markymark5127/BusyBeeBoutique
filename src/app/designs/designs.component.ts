import { Component, OnInit } from '@angular/core';

interface Cup {
  name: string;
  price: string;
  desc: string;
  img: string;
}

@Component({
  selector: 'app-designs',
  templateUrl: './designs.component.html',
  styleUrls: ['./designs.component.css']
})
export class DesignsComponent implements OnInit {

  cups: Cup[] = [
    {name: "The Oogie Boogie", price: "40", desc: "A 20 oz. glow in the dark Nightmare Before Christmas themed Tumbler", img:"/assets/NBC.jpg" },
    {name: "The Lepriclaw", price: "40", desc: "A 20 oz. tumbler with a tag line", img:"/assets/lepriclaw.jpg" }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
