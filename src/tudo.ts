console.log('sasa');
// Character
// import Archetype, { Mage } from './Archetypes';
// import Energy from './Energy';
// import Elf from './Races/Elf';
// import Race from './Races';
// import Fighter, { SimpleFighter } from './Fighter';
// import getRandomInt from './utils';

// class Character implements Fighter {
//   private _race: Race;
//   private _archetype: Archetype;
//   private _maxLifePoints: number;
//   private _lifePoints: number;
//   private _strength: number;
//   private _defense: number;
//   private _dexterity: number;
//   private _energy: Energy;
//   private _name: string;

//   constructor(name: string) {
//     this._name = name;
//     this._dexterity = getRandomInt(1, 10);
//     this._race = new Elf(name, this._dexterity);
//     this._archetype = new Mage(name);
//     this._maxLifePoints = this._race.maxLifePoints / 2;
//     this._lifePoints = this._maxLifePoints;
//     this._strength = getRandomInt(1, 10);
//     this._defense = getRandomInt(1, 10);
//     this._energy = {
//       type_: this._archetype.energyType,
//       amount: getRandomInt(1, 10),
//     };
//   }

//   get race(): Race {
//     return this._race;
//   }

//   get archetype(): Archetype {
//     return this._archetype;
//   }

//   get lifePoints(): number {
//     return this._lifePoints;
//   }

//   get strength(): number {
//     return this._strength;
//   }

//   get defense(): number {
//     return this._defense;
//   }

//   get dexterity(): number {
//     return this._dexterity;
//   }

//   get energy(): Energy {
//     const obj = this._energy;
//     return { type_: obj.type_, amount: obj.amount };
//   }

//   get maxLifePoints(): number {
//     return this._maxLifePoints;
//   }

//   public set vidaBaixa(v: number) {
//     this._lifePoints = v;
//   }

//   receiveDamage(attackPoints: number): number {
//     const damage = attackPoints - this.defense;
//     if (damage > 0) {
//       this._lifePoints -= damage;
//     } else {
//       this._lifePoints -= 1;
//     }
//     if (this.lifePoints <= 0) {
//       this._lifePoints = -1;
//     }
//     return this.lifePoints;
//   }

//   attack(enemy: Fighter | SimpleFighter): void {
//     enemy.receiveDamage(this._strength);
//   }

//   levelUp(): void {
//     this._maxLifePoints += getRandomInt(1, 10);
//     this._strength += getRandomInt(1, 10);
//     this._dexterity += getRandomInt(1, 10);
//     this._defense += getRandomInt(1, 10);
//     this._energy.amount = 10;
//     if (this.race.maxLifePoints < this._maxLifePoints) {
//       this._maxLifePoints = this.race.maxLifePoints;
//     }
//     this._lifePoints = this._maxLifePoints;
//   }

//   special(enemy: Fighter): void {
//     enemy.receiveDamage(this.race.maxLifePoints);
//   }
// }

// // const teste = new Character('Teste');

// export default Character;

// ==============
// Monster
// import SimpleFighter from './Fighter/SimpleFighter';

// class Monster implements SimpleFighter {
//   protected _lifePoints: number;
//   private _strength: number;

//   constructor() {
//     this._lifePoints = 85;
//     this._strength = 63;
//   }

//   receiveDamage(attackPoints: number): number {
//     this._lifePoints -= attackPoints;
//     if (this._lifePoints <= 0) {
//       this._lifePoints = -1;
//     }
//     return this._lifePoints;
//   }

//   attack(enemy: SimpleFighter): void {
//     enemy.receiveDamage(this._strength);
//   }

//   public get lifePoints(): number {
//     return this._lifePoints;
//   }

//   public get strength(): number {
//     return this._strength;
//   }
// }

// export default Monster;

// =======

// interface SimpleFighter {
//     lifePoints: number;
//     strength: number;
//     attack(enemy: SimpleFighter): void;
//     receiveDamage(attackPoints: number): number;
//   }

//   export default SimpleFighter;

// =========
