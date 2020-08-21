import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpserviceService} from '../../services/httpservice.service';
import {logger} from 'codelyzer/util/logger';

@Component({
  selector: 'pm-productsdetails',
  templateUrl: './productsdetails.component.html',
  styleUrls: ['./productsdetails.component.css']
})
export class ProductsdetailsComponent implements OnInit {

  selectedId ;
  selectedData ;
  constructor(private route : ActivatedRoute,private productService : HttpserviceService) {
    this.selectedId = this.route.snapshot.paramMap.get('id');
    console.log(this.route.snapshot);
  }

  ngOnInit(): void {
    this.productService.getDataById(`https://jsonplaceholder.typicode.com/todos/${this.selectedId}`)
      .subscribe({
        next : value => {
          console.log(value);
          this.selectedData = value;
        },
        error : err => {
          console.log(err)
        }
      })
  }

}
