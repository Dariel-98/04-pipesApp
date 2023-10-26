import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  nombre: string = 'darieL gOmEZ';
  valor: number = 1000;
  obj: object = {
    name: 'Dariel',
    age: 25,
  };
  mostrarNombre() {
    console.log(this.nombre);
  }
}
