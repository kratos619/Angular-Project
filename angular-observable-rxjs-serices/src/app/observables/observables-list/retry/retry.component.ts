import {AfterViewInit, Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {delay, retry, retryWhen, scan} from 'rxjs/operators';

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
  message = "fetching data attempt..";
  attempt : number;
  ngOnInit(): void {}
  ngAfterViewInit(): void {

  }

  fetchData(){
    this.loadingStat = true;
    this.http.get('https://jsonplaceholder.typicode.com/users/1')
      .pipe(
        // retry(4),
        retryWhen((err) => {
          return err.pipe(
            delay(3000),
            scan((acc) => {
              // console.log("acc",acc);
              if (acc >= 5 ){
                    throw err;
              }else {
                  acc = acc + 1;
                  this.attempt = acc;
                return acc
              }
            },1)
          );
        })
      )
      .subscribe(
        value => {
          this.userData = value;
          this.loadingStat = false
        },
        error => {
          this.loadingStat = true;
        }
      )
  }

}
