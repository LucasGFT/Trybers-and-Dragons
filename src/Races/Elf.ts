import Race from './Race';

class Elf extends Race {
  private _maxLife: number;
  private static _intanceCount = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLife = 99;
    Elf.addInstance();
  }

  get maxLifePoints(): number {
    return this._maxLife;
  }

  private static addInstance() {
    Elf._intanceCount += 1;
  }

  static createdRacesInstances(): number {
    return Elf._intanceCount;
  }
}

export default Elf;
