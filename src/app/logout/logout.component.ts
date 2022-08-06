import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  redirectDisplay: boolean = false

  constructor() {
    setTimeout(() => {this.redirectDisplay = true}, 800);
  }

  ngOnInit(): void {
    localStorage.removeItem("loginAuth")
    setTimeout(() => {location.href = 'login'}, 2000);
  }

}
