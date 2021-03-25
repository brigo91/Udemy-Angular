import { Component, OnInit } from '@angular/core';

@Component({
  //selector: '[app-servers]', //attribute selector
  //selector: '.app-servers', //class selector
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  //template: `
  //  <app-server></app-server>
  //  <app-server></app-server>
  //  `,
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {
  allowNewServer = true;

  constructor() {
    setTimeout(()=>{
      this.allowNewServer = false;
    },2000)
   }

  ngOnInit(): void {
  }

}
