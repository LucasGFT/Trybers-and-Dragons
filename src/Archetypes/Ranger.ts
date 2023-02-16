import Archetype from './Archetype';

class Ranger extends Archetype {
  private _energyType: 'mana' | 'stamina';
  private static _intanceCount = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Ranger.addInstance();
  }

  get energyType(): 'mana' | 'stamina' {
    return this._energyType;
  }

  private static addInstance() {
    Ranger._intanceCount += 1;
  }

  static createdArchetypeInstances(): number {
    return Ranger._intanceCount;
  }
}

export default Ranger;
