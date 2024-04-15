import { Pessoa } from './Pessoa';

export class Funcionario extends Pessoa {
  constructor(name: string, public profissao: string) {
    super(name);
  }

  override message(): void {
    super.message();
    console.log('Eu sou um Empregado.');
  }
}
