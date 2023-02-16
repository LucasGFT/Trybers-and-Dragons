import Race from './Race';

class Dwarf extends Race {
  private _maxLife: number;
  private static _intanceCount = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLife = 80;
    Dwarf.addInstance();
  }

  get maxLifePoints(): number {
    return this._maxLife;
  }

  private static addInstance() {
    Dwarf._intanceCount += 1;
  }

  static createdRacesInstances(): number {
    return Dwarf._intanceCount;
  }
}

export default Dwarf;
