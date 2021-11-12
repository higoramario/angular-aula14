import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  usuario: string;
  senha: string;

  constructor() {}

  ngOnInit() {}

  login() {
    console.log('Usuário: ' + this.usuario);
    console.log('Senha: ' + this.senha);
  }
}
