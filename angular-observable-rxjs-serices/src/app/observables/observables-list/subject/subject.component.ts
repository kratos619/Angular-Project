import {Component, OnDestroy, OnInit} from '@angular/core';
import {FromeventService} from '../../../appservice/fromevent.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit, OnDestroy {

  userName ;
  selectedPost;
  constructor(private _designUitility : FromeventService) {
    this._designUitility.userNameService.subscribe(value => {
      console.log(value);
      this.userName = value;
    })

    this._designUitility.selectedPost.subscribe(
      value => {
        this.selectedPost = value;
      }
    )
  }

  getName(inputField){
    console.log(inputField.value);
    this._designUitility.userNameService.next(inputField.value)
  }

  ngOnInit(): void {
    this._designUitility.exclusiveService.next(true)
  }

  ngOnDestroy(): void {
    this._designUitility.exclusiveService.next(false)
  }
}
