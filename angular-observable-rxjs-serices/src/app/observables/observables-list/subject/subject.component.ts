import {Component, OnDestroy, OnInit} from '@angular/core';
import {FromeventService} from '../../../appservice/fromevent.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit, OnDestroy {

  constructor(private _designUitility : FromeventService) { }

  ngOnInit(): void {
    this._designUitility.exclusiveService.next(true)
  }

  ngOnDestroy(): void {
    this._designUitility.exclusiveService.next(false)
  }
}
