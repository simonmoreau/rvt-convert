import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'core-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  loggedIn = false;
  
  constructor() { }

  ngOnInit(): void {
  }

  login() {

  }

  logout() {
  }

}
