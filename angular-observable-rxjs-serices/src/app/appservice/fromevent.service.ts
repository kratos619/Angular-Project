import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FromeventService {

  constructor() { }

  appendData(counter,el) {
    let li = document.createElement('li');
    li.innerText = `list item ${counter}`;
    el.nativeElement.appendChild(li);
  }
}