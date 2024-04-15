import { Animal } from './Animal';

export class Cachorro extends Animal {
  override barulho(): string {
    return 'RowRow!';
  }
}
