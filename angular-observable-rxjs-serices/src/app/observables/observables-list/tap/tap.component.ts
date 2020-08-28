import { Component, OnInit } from '@angular/core';
import {from, interval, pipe, Subscription} from 'rxjs';
import {map, tap, toArray} from 'rxjs/operators';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.css']
})
export class TapComponent implements OnInit {


  constructor() { }

  colorIntervalOneStop : Subscription;
  dataColor = "AliceBlue" ;
  ngOnInit(): void {
    this.showColorOne();
  }

  showColorOne(){
    const colorIntervalOne = interval(200);
    this.colorIntervalOneStop = colorIntervalOne
      .pipe(
        tap(
          (res) => {
            if(res === this.CSS_COLOR_NAMES.length){
              this.colorIntervalOneStop.unsubscribe();
              this.showColorOne();
            }
          }
        )
      )
      .subscribe(
        value => {
          this.dataColor = this.CSS_COLOR_NAMES[value]
          console.log(this.CSS_COLOR_NAMES[value]);

        },
        error => {
          console.log(error);},
        () => {
          console.log("this is colplete");
        }
      )
  }

   CSS_COLOR_NAMES = [
    "AliceBlue",
    "AntiqueWhite",
    "Aqua",
    "Aquamarine",
    "Azure",
    "Beige",
    "Bisque",
    "Black",
    "BlanchedAlmond",
    "Blue",
    "BlueViolet",
    "Brown",
    "BurlyWood",
    "CadetBlue",
    "Chartreuse",
    "Chocolate",
    "Coral",
    "CornflowerBlue",
    "Cornsilk",
    "Crimson",
    "Cyan",
    "DarkBlue",
    "DarkCyan",
    "DarkGoldenRod",
    "DarkGray",
    "DarkGrey",
    "DarkGreen",
    "DarkKhaki",
    "DarkMagenta",
    "DarkOliveGreen",
    "DarkOrange",
    ];
}
