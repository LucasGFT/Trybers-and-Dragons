import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  private _lutador: Fighter;
  constructor(
    lutador: Fighter,
    private _arrayMonstros: (SimpleFighter | Fighter)[],
  ) {
    super(lutador);
    this._lutador = lutador;
  }

  attackNoMonstros(enemy: (SimpleFighter | Fighter)[]) {
    enemy.forEach((monstros) => {
      this._lutador.attack(monstros);
    });
  }

  attackNoLutador(enemy: (SimpleFighter | Fighter)[]) {
    enemy.forEach((monstros) => {
      if (this._lutador.lifePoints !== -1) {
        this._lutador.receiveDamage(monstros.strength);
      }
    });
  }

  fight() {
    let oss = 0;
    for (let index = 0; oss === 0; index += 1) {
      this.attackNoMonstros(this._arrayMonstros);
      this.attackNoLutador(this._arrayMonstros);
      const vida = this._lutador.lifePoints;
      const vida2 = this._arrayMonstros.every(
        (monstros) => monstros.lifePoints <= 0,
      );
      if (vida <= 0 || vida2) oss = 5;
    }
    return super.fight();
  }
}
