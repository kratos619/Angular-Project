import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent  {
 servrId = 1;
 serverstatus = 'offline';

 getserverstatus(){
   return this.serverstatus;
 }
}
