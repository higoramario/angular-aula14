import { Directive } from '@angular/core';
import { ValidatorFn, AbstractControl } from '@angular/forms';

@Directive({
  selector: '[nomeCompleto]',
})
export class NomeCompletoDirective {
  constructor() {}
}
export function nomeCompletoValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    let valido = control.value.trim().includes(' ');
    return valido ? null : { nomeErrado: control.value };
  };
}
