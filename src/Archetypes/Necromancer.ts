import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  private _energyType: EnergyType;
  private static _intanceCount = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Necromancer.addInstance();
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  private static addInstance() {
    Necromancer._intanceCount += 1;
  }

  static createdArchetypeInstances(): number {
    return Necromancer._intanceCount;
  }
}

export default Necromancer;
