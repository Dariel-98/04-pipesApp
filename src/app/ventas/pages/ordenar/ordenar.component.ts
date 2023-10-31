import { Component } from '@angular/core';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [],
})
export class OrdenarComponent {
  valor: boolean = true;

  enMayusculas() {
    this.valor = !this.valor;
    // if (this.valor) {
    //   this.valor = false;
    // } else {
    //   this.valor = true;
    // }
  }
}
