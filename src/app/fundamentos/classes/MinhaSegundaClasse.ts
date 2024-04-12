import { MinhaPrimeiraClasse } from './MinhaPrimeiraClasse';

export class MinhaSegundaClasse extends MinhaPrimeiraClasse {
  showName(): string {
    return this.nome;
  }
}
