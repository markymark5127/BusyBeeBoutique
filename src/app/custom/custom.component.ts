import { Component, OnInit } from '@angular/core';

interface Sizes {
  value: number;
  viewValue: string;
}

interface Texts {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css']
})
export class CustomComponent implements OnInit {

  sizes: Sizes[] = [
    {value: 10, viewValue: '10 oz.'},
    {value: 20, viewValue: '20 oz.'},
    {value: 30, viewValue: '30 oz.'},
    {value: 36, viewValue: '36 oz.'},
    {value: 64, viewValue: '64 oz.'},
  ];

  colors: Texts[] = [
    {value: '#FFFFFF', viewValue: 'White'},
    {value: '#000000', viewValue: 'Black'},
    {value: '#FF0000', viewValue: 'Red'},
    {value: '#FFA500', viewValue: 'Orange'},
    {value: '#FFFF00', viewValue: 'Yellow'},
    {value: '#008000', viewValue: 'Green'},
    {value: '#87CEEB', viewValue: 'Carolina Blue'},
    {value: '#0000FF', viewValue: 'Blue'},
    {value: '#800080', viewValue: 'Purple'},
    {value: '#FFC0CB', viewValue: 'Pink'},
    {value: '#A52A2A', viewValue: 'Brown'},
    {value: '#D3D3D3', viewValue: 'Light Gray'},
    {value: '#808080', viewValue: 'Gray'},
    {value: '#696969', viewValue: 'Dark Gray'},
  ];

  positions: Texts[] = [
    {value: 'top', viewValue: 'Top'},
    {value: 'center', viewValue: 'Center'},
    {value: 'bottom', viewValue: 'Bottom'}
  ];

  fonts: Texts[] = [
    {value: 'arial', viewValue: 'Arial'},
    {value: 'courier', viewValue: 'Courier'},
    {value: 'georgia', viewValue: 'Georgia'},
    {value: 'helvetica', viewValue: 'Helvetica'},
    {value: 'timesnewroman', viewValue: 'Times New Roman'},
    {value: 'verdana', viewValue: 'Verdana'}
  ];
  
  fontSizes: Sizes[] = [
    {value: 8, viewValue: '8 pt.'},
    {value: 10, viewValue: '10 pt.'},
    {value: 11, viewValue: '11 pt.'},
    {value: 12, viewValue: '12 pt.'},
    {value: 24, viewValue: '24 pt.'},
  ];

  noneOption: Boolean;
  textOption: Boolean;
  imgOption: Boolean;
  text: String;
  img: ImageBitmap;

  constructor() { }

  ngOnInit(): void {
  }

}
