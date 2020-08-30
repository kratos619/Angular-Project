import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FromeventService {

  public exclusiveService = new Subject<boolean>();
  public userNameService = new Subject<any>();

  constructor() { }

  appendData(counter,el) {
    let li = document.createElement('li');
    li.innerText = `list item ${counter}`;
    el.nativeElement.appendChild(li);
  }


  printData(res, el) {
    let li = document.createElement('li');
    li.innerText = `${res}`;
    el.nativeElement.appendChild(li);
  }

}
