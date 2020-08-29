import {AfterViewInit, Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {retry} from 'rxjs/operators';

@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.css']
})
export class RetryComponent implements OnInit,AfterViewInit {

  constructor(private http:HttpClient) { }

  userData;
  retryingStat;
  loadingStat = false;
  message = "fetching data..."
  ngOnInit(): void {
    // this.fetchData();
  }
  ngAfterViewInit(): void {

  }

  fetchData(){
    this.loadingStat = true;
    this.http.get('https://jsonplaceholder.typicode.com/users/1')
      .pipe(
        retry(4),
        
      )
      .subscribe(
        value => {
          this.userData = value;
          this.loadingStat = false
          console.log(value);
        },
        error => {
          this.loadingStat = true;
          console.log(error);
        }
      )
  }

}
