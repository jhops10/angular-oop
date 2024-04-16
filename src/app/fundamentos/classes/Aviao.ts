import { Veiculo } from './Veiculo';

export class Aviao extends Veiculo {
  override mover(): void {
    console.log(`O avião ${this.marca} ${this.modelo} está levantando vôo...`);
  }
}
