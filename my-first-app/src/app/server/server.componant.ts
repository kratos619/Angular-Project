import { Component } from '@angular/core';

@Component({
  selector:'app-server',
  templateUrl:'./server.component.html',
  styles:['.online{ color: blueviolet; }']
})
export class ServerComponent{
serverid : number = 10;
server_status: string = 'offline';
  constructor() {
  this.server_status = Math.random() > 0.5 ? 'online' : 'offline';
}

get_status(){
    return this.server_status;
}

getcolor(){
    return this.server_status === 'online' ? 'green' : 'red';
}

}
