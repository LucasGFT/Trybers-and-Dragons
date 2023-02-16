import Archetype from './Archetype';

class Mage extends Archetype {
  private _energyType: 'mana' | 'stamina';
  private static _intanceCount = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Mage.addInstance();
  }

  get energyType(): 'mana' | 'stamina' {
    return this._energyType;
  }

  private static addInstance() {
    Mage._intanceCount += 1;
  }

  static createdArchetypeInstances(): number {
    return Mage._intanceCount;
  }
}

export default Mage;
