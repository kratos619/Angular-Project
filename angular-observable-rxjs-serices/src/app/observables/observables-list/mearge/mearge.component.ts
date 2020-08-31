import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FromeventService } from 'src/app/appservice/fromevent.service';
import { interval, concat, merge, from, of } from 'rxjs';
import { take, map, mergeAll, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-mearge',
  templateUrl: './mearge.component.html',
  styleUrls: ['./mearge.component.css']
})
export class MeargeComponent implements OnInit {

  @ViewChild('concateOp') concateOp: ElementRef;
  constructor(private designUtil: FromeventService) { }

  getData(data){
    return of(data + ' video Upload' );
  }
  ngOnInit(): void {
    let sourceOne = interval(1000).pipe(take(5), map((e) => { return `channel A ${e + 1}` }))
    let sourceTwo = interval(1000).pipe(take(3), map((e) => { return `channel B ${e + 1}` }))
    let sourceThree = interval(1000).pipe(take(3), map((e) => { return `channel C ${e + 1}` }))

    // comcate three
    let concateFinal = merge(sourceOne, sourceTwo, sourceThree)
    concateFinal.subscribe(
      (res) => {
        // console.log(res);
        this.designUtil.printData(res, this.concateOp)
      }
    )

    let dataOne = from(['a','v','b','q']);
    // console.log('data' , dataOne );
    dataOne
        .pipe(
          map((res) => {return this.getData(res)}),
          mergeAll()
        )
        .subscribe(
          (e) => {
            console.log('mergeAll',e);
          }
    )

    dataOne.pipe(
              mergeMap((res) => { return this.getData(res) })
            )
            .subscribe(
              (e) => {
                console.log('mergeMap', e);
              }
            )

  }

}
