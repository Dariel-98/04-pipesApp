import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [],
})
export class BasicosComponent {
  nombreLower: string = 'dariel';
  nombreUpper: string = 'DARIEL';
  nombreCompleto: string = 'dARIel gOMeZ';

  fecha: Date = new Date(); //el dia de hoy
}
