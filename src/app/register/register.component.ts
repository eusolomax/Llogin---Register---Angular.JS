import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user_name!: string
  user_password!: string
  formulario!: FormGroup
  clientBD: any = []

  constructor() { }

  ngOnInit(): void {
    this.formulario = new FormGroup({
      name: new FormControl("", Validators.compose([Validators.maxLength(25), Validators.minLength(4), Validators.required])),
      password: new FormControl("", Validators.compose([Validators.maxLength(25), Validators.minLength(8), Validators.required])),
      userToken: new FormControl(this.generateToken())
    })
  }

  createUser(){
    this.clientBD.push(this.formulario.value)
    console.log(this.clientBD)

    this.saveCache()
    location.href = 'login';
  }

  saveCache(){
    window.localStorage.clear()

    const data = JSON.stringify(this.clientBD)
    localStorage.setItem("register", data)
  }

  generateToken(){
    return Math.random().toString(36).substring(2, 12)
  }
}