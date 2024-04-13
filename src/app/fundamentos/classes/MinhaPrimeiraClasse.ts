export class MinhaPrimeiraClasse {
  protected nome: string;
  protected idade: number;
  protected cargo: string;

  constructor(nome: string, idade: number, cargo: string) {
    this.nome = nome;
    this.idade = idade;
    this.cargo = cargo;
  }

  get getNome(): string {
    return this.nome;
  }
  set setNome(nome: string) {
    if (nome != '') {
      this.nome = nome;
    } else {
      alert('Insira um nome no setter');
    }
  }
}
