import Archetype from './Archetype';

class Warrior extends Archetype {
  private _energyType: 'mana' | 'stamina';
  private static _intanceCount = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Warrior.addInstance();
  }

  get energyType(): 'mana' | 'stamina' {
    return this._energyType;
  }

  private static addInstance() {
    Warrior._intanceCount += 1;
  }

  static createdArchetypeInstances(): number {
    return Warrior._intanceCount;
  }
}

export default Warrior;
