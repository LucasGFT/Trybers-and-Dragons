import Race from './Race';

class Orc extends Race {
  private _maxLife: number;
  private static _intanceCount = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLife = 74;
    Orc.addInstance();
  }

  get maxLifePoints(): number {
    return this._maxLife;
  }

  private static addInstance() {
    Orc._intanceCount += 1;
  }

  static createdRacesInstances(): number {
    return Orc._intanceCount;
  }
}

export default Orc;
