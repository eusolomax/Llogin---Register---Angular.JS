import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  formulario!: FormGroup
  registerRedirect: string = "http://localhost:4200/register"
  userToken!: string
  collectUserCache: any = localStorage.getItem("register")
  getUser = JSON.parse(this.collectUserCache)
  successfulLogin: boolean = false

  constructor() {}

  ngOnInit(): void {
    this.formulario = new FormGroup({
      name: new FormControl("", Validators.compose([Validators.maxLength(25), Validators.minLength(4), Validators.required])),
      password: new FormControl("", Validators.compose([Validators.maxLength(25), Validators.minLength(8), Validators.required]))
    })
  }

  login(){
    const name = this.formulario.controls['name'].value
    const password = this.formulario.controls['password'].value

     if (this.getUser[0].name == name && this.getUser[0].password == password && this.getUser[0].userToken !== null) {
      console.info("LOGADO COM SUCESSO!")
      this.successfulLogin = true
      this.saveLoginCache()

      setTimeout(() => {location.href = ""}, 1000);
     } 
     else {
      console.error("LOGIN FALHOU")
    }
  }

  saveLoginCache(){
    localStorage.removeItem("loginAuth")
    localStorage.setItem("loginAuth", "")
  }
}