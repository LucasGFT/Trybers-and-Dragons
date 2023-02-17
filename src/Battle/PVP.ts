// import Character from '../Character';
import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  private _player1: Fighter;
  private _player2: Fighter;
  constructor(player1: Fighter, player2: Fighter) {
    super(player1);
    this._player1 = player1;
    this._player2 = player2;
  }

  attack(enemy: Fighter): void {
    if (enemy === this._player2) {
      enemy.receiveDamage(this._player1.strength);
    } else if (enemy === this._player1) {
      enemy.receiveDamage(this._player2.strength);
    }
  }

  ataque1(vida: number, vida2: number) {
    if (vida > 0) {
      this.attack(this._player2);
      if (vida2 >= 0) {
        return false;
      }
      return true;
    }
  }

  ataque2(vida: number, vida2: number) {
    if (vida2 > 0) {
      this.attack(this._player1);
      if (vida >= 0) {
        return false;
      }
      return true;
    }
  }

  fight() {
    let oss = 0;
    for (let index = 0; oss === 0; index += 1) {
      const vida = this._player1.lifePoints;
      const vida2 = this._player2.lifePoints;
      const p = this.ataque1(vida, vida2);
      const t = this.ataque2(vida, vida2);
      if (p === true || t === true) oss = 5;
    }
    return super.fight();
  }
}

// const teste = new Character('lucas');
// const teste2 = new Character('lusscas');

// const a = new PVP(teste, teste2);
// console.log(a.fight());
