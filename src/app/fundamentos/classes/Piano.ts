import { InstrumentoMusical } from '../interfaces/instrumentoMusical.interface';

export class Piano implements InstrumentoMusical {
  tocar(): void {
    console.log('Tocando uma melodia no piano...');
  }
}
