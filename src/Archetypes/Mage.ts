import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  private _energyType: EnergyType;
  private static _intanceCount = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Mage.addInstance();
  }

  get energyType(): EnergyType {
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
