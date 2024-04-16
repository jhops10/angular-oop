import { InstrumentoMusical } from '../interfaces/instrumentoMusical.interface';

export class TocarMusica {
  tocar(instrumento: InstrumentoMusical) {
    instrumento.tocar();
  }
}
