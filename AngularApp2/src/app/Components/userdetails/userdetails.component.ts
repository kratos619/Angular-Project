import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
public id;
  constructor(
    private route : ActivatedRoute,
    private  router : Router
  ) {

    this.route.params.subscribe((params:Params)=> {
       this.id = params.id;
    })
  }

  ngOnInit() {
  }

}
