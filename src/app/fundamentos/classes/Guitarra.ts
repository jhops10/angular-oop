import { InstrumentoMusical } from '../interfaces/instrumentoMusical.interface';

export class Guitarra implements InstrumentoMusical {
  tocar(): void {
    console.log('Tocando acordes na guitarra...');
  }
}
