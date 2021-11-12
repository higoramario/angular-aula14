import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { nomeCompletoValidator } from '../nome-completo.directive';

@Component({
  selector: 'login-reativo',
  templateUrl: './login-reativo.component.html',
  styleUrls: ['./login-reativo.component.css'],
})
export class LoginReativoComponent implements OnInit {
  loginForm = new FormGroup({
    usuario: new FormControl('', [Validators.required, nomeCompletoValidator()]),
    senha: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  constructor() {}

  ngOnInit() {}

  login() {
    const controles = this.loginForm.controls;
    console.log('Usuário: ' + controles.usuario.value);
    console.log('Senha: ' + controles.senha.value);
  }

  get usuario(): AbstractControl {
    return this.loginForm.controls.usuario;
  }

  get senha(): AbstractControl {
    return this.loginForm.controls.senha;
  }
}
