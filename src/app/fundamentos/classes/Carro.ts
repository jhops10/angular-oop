import { Veiculo } from './Veiculo';

export class Carro extends Veiculo {
  override mover() {
    console.log(`O carro ${this.marca} ${this.modelo} esta se movendo...`);
  }
}
