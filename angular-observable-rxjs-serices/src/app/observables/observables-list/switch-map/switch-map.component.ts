import { Component, OnInit } from '@angular/core';
import { of, from } from 'rxjs';
import { map, delay, switchMap, concatMap, switchAll } from 'rxjs/operators';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.css']
})
export class SwitchMapComponent implements OnInit {

  constructor() { }

  getData(data) {
    return of(`data stream ${data}`).pipe(delay(1000));
  }

  ngOnInit(): void {
    const mainData = from(['one','two','three','four'])

    // simple example
    mainData
      .subscribe(
        (e) => {console.log('using Map',e);}
      );

    // concatMap example
    mainData
      .pipe(
        concatMap((data) => this.getData(data))
      )
      .subscribe(
        (e) => {
          console.log('concatMap',e);

        }
      );

      // switch map
    mainData
        .pipe(
          switchMap((data) => this.getData(data))
        )
        .subscribe(
          (e) => {
            console.log('switchMap',e);

          }
        )
        // switchAll
    mainData
      .pipe(
        map((data) => this.getData(data)),
        switchAll()
      )
      .subscribe(
        (e) => {
          console.log('switchAll',e);

        }
      )
  }


}
