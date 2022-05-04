import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created' 
  serverName="Test Server"
  serverCreated = false
  servers = ['Testserver 1','Testserver 2', 'Testserver 3']

  constructor() {
    setTimeout(()=>{
      this.allowNewServer=true;
    },2000)
  }

  ngOnInit(): void {}

  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName)
    this.serverCreationStatus ="server was created! Name: " + this.serverName
  }

  onUpdateServerName(event: any){
    this.serverName = event.target.value
  }


}
