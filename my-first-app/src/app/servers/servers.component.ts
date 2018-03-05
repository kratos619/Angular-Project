import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit{

  theservername = '';
  allownewserver = false;
//servers = ['test server 1','test server 2'];
  theServerMessage = "the server was not Created";

  constructor (){
    setTimeout(()=>{ this.allownewserver = true;}, 2000);
  }

  clickServeMessage() {
    return this.theServerMessage = "server was Created" + " " + this.theservername;
  }
  server_name(event: Event) {
    this.theservername = (<HTMLInputElement>event.target).value;
  }

 ngOnInit (){

 }

}
