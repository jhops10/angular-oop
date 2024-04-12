import { Component, OnInit } from '@angular/core';
import { MinhaPrimeiraClasse } from './fundamentos/classes/MinhaPrimeiraClasse';

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
    console.log(meuPrimeiroObjeto);
    console.log(meuSegundoObjeto);
  }
}
