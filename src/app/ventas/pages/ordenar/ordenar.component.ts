import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [],
})
export class OrdenarComponent {
  valor: boolean = true;
  ordenarPor: string = '';

  heroes: Heroe[] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul,
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro,
    },
    {
      nombre: 'Robbin',
      vuela: false,
      color: Color.verde,
    },
    {
      nombre: 'Daredevil',
      vuela: true,
      color: Color.rojo,
    },
    {
      nombre: 'Linterna Verde',
      vuela: true,
      color: Color.verde,
    },
  ];

  enMayusculas() {
    this.valor = !this.valor;
    // if (this.valor) {
    //   this.valor = false;
    // } else {
    //   this.valor = true;
    // }
  }

  cambiarOrden(valor: string) {
    this.ordenarPor = valor;
  }
}
