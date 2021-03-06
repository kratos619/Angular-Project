import { FromeventService } from './../../../../appservice/fromevent.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { take, toArray, map } from 'rxjs/operators';
import { from } from 'rxjs';

@Component({
  selector: 'app-subject-demo-com-four',
  templateUrl: './subject-demo-com-four.component.html',
  styleUrls: ['./subject-demo-com-four.component.css']
})
export class SubjectDemoComFourComponent implements OnInit, AfterViewInit {

  posts;
  constructor(private http: HttpClient, private  _designUitility : FromeventService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.http.get('https://jsonplaceholder.typicode.com/posts')
      .pipe(
        take(1),
      )
      .subscribe(
        (res) => {
          console.log(res);
          this.posts = res;
        }
      )
    // let data = from([[1,2,3,4,5]]);
    // data
    // .pipe(take(3))
    // .subscribe(
    //   (res) => {
    //     console.log(res);
    //   }
    // )
  }

  getData(event,item){
    console.log(item);
    this._designUitility.selectedPost.next(item)
  }


}
