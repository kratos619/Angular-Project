import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit{

  allownewserver = false;
  constructor (){
    setTimeout(()=>{ this.allownewserver = true;}, 2000);
  }

 ngOnInit (){

 }

}
