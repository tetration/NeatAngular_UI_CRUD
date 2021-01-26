import { Component, OnInit } from '@angular/core';
import {SidebarModule} from 'ng-sidebar';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  opened=false;
  constructor() { }

  ngOnInit(): void {
  }
  logout() {
      console.log("user logged out");
      localStorage.removeItem('token');
      location.reload();
    }
    toggleSidebar(){
      this.opened = !this.opened;
    }
}
