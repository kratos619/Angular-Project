import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {from} from 'rxjs';
import {filter, toArray} from 'rxjs/operators';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit,AfterViewInit {

 // private name : string;
  // private details : Array<string> = ['a','b','c'] ;

  @ViewChild('filterByName') filterByName : ElementRef;

 public arrDataOne : Array<any> = [
    {id: 1, name : "gaurav",gender : 'm'},
    {id: 2, name : "saurav",gender : 'm'},
    {id: 3, name : "aryan",gender : 'm'},
    {id: 4, name : "gungun",gender : 'f'},
    {id: 5, name : "chakuli",gender : 'f'},
    {id: 6, name : "rohini",gender : 'f'},
    {id: 7, name : "tappu",gender : 'm'},
  ]

  constructor() {}
  filteredByGenderF;
  ngOnInit(): void {
    let dataFilterOne = from(this.arrDataOne);
    dataFilterOne
      .pipe(
        filter(data => data.gender === 'm'),
        toArray()
      )
      .subscribe((res) => {
        console.log(res);
        this.filteredByGender = res;
      });
    dataFilterOne
      .pipe(
        filter(data => data.gender === 'f'),
        toArray()
      )
      .subscribe((res) => {
        console.log(res);
        this.filteredByGenderF = res;
      })
  }

  filteredByGender ;
  codeOne = `
  filteredByGenderF;
 arrDataOne = [
    {id: 1, name : "gaurav",gender : 'm'},
    {id: 2, name : "saurav",gender : 'm'},
    {id: 3, name : "aryan",gender : 'm'},
    {id: 4, name : "gungun",gender : 'f'},
    {id: 5, name : "chakuli",gender : 'f'},
    {id: 6, name : "rohini",gender : 'f'},
    {id: 7, name : "tappu",gender : 'm'},
  ]

  ngOnInit(): void {
    let dataFilterOne = from(this.arrDataOne);
    dataFilterOne
      .pipe(
        filter(data => data.gender === 'm'),
        toArray()
      )
      .subscribe((res) => {
        console.log(res);
        this.filteredByGender = res;
      });
    dataFilterOne
      .pipe(
        filter(data => data.gender === 'f'),
        toArray()
      )
      .subscribe((res) => {
        console.log(res);
        this.filteredByGenderF = res;
      })
  }
  `;

  ngAfterViewInit(): void {

  }
}
