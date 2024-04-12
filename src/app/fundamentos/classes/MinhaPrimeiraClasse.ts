export class MinhaPrimeiraClasse {
  protected nome: string;
  protected idade: number;
  protected cargo: string;

  constructor(nome: string, idade: number, cargo: string) {
    this.nome = nome;
    this.idade = idade;
    this.cargo = cargo;
  }

  getNome(): string {
    return this.nome;
  }
  setNome(nome: string): void {
    this.nome = nome;
  }
}
