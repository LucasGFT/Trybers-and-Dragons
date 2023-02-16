import Race from './Race';

class Halfling extends Race {
  private _maxLife: number;
  private static _intanceCount = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLife = 60;
    Halfling.addInstance();
  }

  get maxLifePoints(): number {
    return this._maxLife;
  }

  private static addInstance() {
    Halfling._intanceCount += 1;
  }

  static createdRacesInstances(): number {
    return Halfling._intanceCount;
  }
}

export default Halfling;
