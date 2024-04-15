import { BoloInterface } from '../interfaces/Bolo.interface';

export class Bolo implements BoloInterface {
  constructor(public sabor: string, public peso: number) {}

  comerBolo(): string {
    return 'Você comeu um pedaço do bolo';
  }
}
