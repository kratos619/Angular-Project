import { FromeventService } from 'src/app/appservice/fromevent.service';
import { take, map, mergeAll, concatMap, concatAll } from 'rxjs/operators';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { interval, concat, from, of } from 'rxjs';

@Component({
  selector: 'app-concat',
  templateUrl: './concat.component.html',
  styleUrls: ['./concat.component.css']
})
export class ConcatComponent implements OnInit {

  @ViewChild('concateOp') concateOp: ElementRef;
  constructor(private designUtil: FromeventService) { }

  getData(data){
    return of(`data stream ${data}`)
  }
  ngOnInit(): void {
    let sourceOne = interval(1000).pipe(take(5), map((e) => { return `channel A ${e + 1}` }))
    let sourceTwo = interval(1000).pipe(take(3), map((e) => { return `channel B ${e + 1}` }))
    let sourceThree = interval(1000).pipe(take(3), map((e) => { return `channel C ${e + 1}` }))

    // comcate three
    let concateFinal = concat(sourceOne, sourceTwo, sourceThree)
    concateFinal.subscribe(
      (res) => {
        console.log(res);
        this.designUtil.printData(res, this.concateOp)
      }
    )

    let dataOne = from(concateFinal);
    dataOne
        .pipe(
          map((res) => {return this.getData(res)}),
          concatAll()
        )
        .subscribe(
          (e) => {
            console.log(e);

          }
        )
    dataOne
      .pipe(
        concatMap((res) => { return this.getData(res) })
      )
      .subscribe(
        (e) => {
          console.log(e);

        }
      )


  }

}
