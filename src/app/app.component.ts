import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
  }

  // nombre: string = 'darieL gOmEZ';
  // valor: number = 1000;
  // obj: object = {
  //   name: 'Dariel',
  //   age: 25,
  // };
  // mostrarNombre() {
  //   console.log(this.nombre);
  //   console.log(this.valor);
  //   console.log(this.obj);
  // }
}
