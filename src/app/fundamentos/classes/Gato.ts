import { Animal } from './Animal';

export class Gato extends Animal {
  override barulho(): string {
    return 'Miaaau!';
  }
}
