export enum Color {
  rojo, // valor = 0
  negro, // valor = 1
  azul, // valor = 2
  verde, // valor = 3
}

export interface Heroe {
  nombre: string;
  vuela: boolean;
  color: Color;
}
