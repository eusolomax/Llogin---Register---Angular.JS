import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor() {}
  loginAuth = localStorage.getItem("loginAuth")

  ngOnInit(): void {
    if (this.loginAuth != null) {
      console.warn("LOGADO!")
    } else {
      console.error("NAO LOGADO")
      location.href = 'login'
    }
  }

}