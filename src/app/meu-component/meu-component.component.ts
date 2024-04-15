import { Component, OnInit } from '@angular/core';
import { BoloInterface } from '../fundamentos/interfaces/Bolo.interface';
import { Bolo } from '../fundamentos/classes/Bolo';

@Component({
  selector: 'app-meu-component',
  templateUrl: './meu-component.component.html',
  styleUrl: './meu-component.component.css',
})
export class MeuComponentComponent implements OnInit {
  bolo!: BoloInterface;

  ngOnInit(): void {
    this.bolo = new Bolo('Laranja', 1);
    console.log(this.bolo);
  }
}
