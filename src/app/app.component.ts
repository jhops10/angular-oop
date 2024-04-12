import { Component, OnInit } from '@angular/core';
import { MinhaPrimeiraClasse } from './fundamentos/classes/MinhaPrimeiraClasse';
import { MinhaSegundaClasse } from './fundamentos/classes/MinhaSegundaClasse';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'angular-oop';

  ngOnInit() {
    let meuPrimeiroObjeto = new MinhaPrimeiraClasse('João', 34, 'Violeiro');
    let meuSegundoObjeto = new MinhaPrimeiraClasse('Maria', 60, 'Costureira');
    let meuTerceiroObjeto = new MinhaSegundaClasse('Rafa', 30, 'Analista');
    console.log(meuPrimeiroObjeto);
    console.log(meuSegundoObjeto);
    console.log(meuTerceiroObjeto);
  }
}
