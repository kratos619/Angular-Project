import { Component, OnInit } from '@angular/core';
import { FromeventService } from 'src/app/appservice/fromevent.service';

@Component({
  selector: 'app-subject-demo-com-three',
  templateUrl: './subject-demo-com-three.component.html',
  styleUrls: ['./subject-demo-com-three.component.css']
})
export class SubjectDemoComThreeComponent implements OnInit {

  selectedPost;
  constructor(private _designUitility: FromeventService) {
    this._designUitility.selectedPost.subscribe(
      value => {
        this.selectedPost = value;
      }
    )
   }

  ngOnInit(): void {
  }

}
