import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  data : any;

  constructor(private router:Router){
    this.data = [
                {'text':'Employee Forms','link':'employee'},
                {'text':'Charts','link':''}
              ]
  }

  onNavClick(data:any){
    debugger;
    this.router.navigate([data.data.node.link]);
  }
  onLogout(){
    
  }
}
