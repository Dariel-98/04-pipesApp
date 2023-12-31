import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [],
})
export class NoComunesComponent {
  // i18nSelect
  nombre: string = 'Dariel';
  genero: string = 'masculino';
  invitacionMapa = {
    masculino: 'invitarlo',
    femenino: 'invitarla',
  };

  // i18Plural
  clientes: string[] = ['Maria', 'Pedro', 'Juan'];
  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'un cliente esperando',
    other: 'tenemos # clientes esperando.',
  };

  cambiarPersona() {
    this.nombre = 'Susana';
    this.genero = 'femenino';
  }

  borrarCliente() {
    this.clientes.pop();
  }

  // KeyValue Pipe
  persona = {
    nombre: 'Dariel',
    edad: 25,
    dirección: 'Ciudad de México, México',
  };

  // Json Pipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true,
    },
    {
      nombre: 'Robbin',
      vuela: false,
    },
    {
      nombre: 'Aquaman',
      vuela: false,
    },
  ];
  // Async Pipe
  miObservable = interval(5000); // 0,1,2,3,4...

  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de promesa');
    }, 3500);
  });
}
