abstract class Race {
  private static count = 0;
  private _name: string;
  private _dexterity: number;
  abstract get maxLifePoints(): number;
  //   private _life: number;

  constructor(name: string, dexterity: number) {
    this._name = name;
    this._dexterity = dexterity;
  }

  get name(): string {
    return this._name;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  static createdRacesInstances(numInstancia: number): number {
    if (Race.count > numInstancia) {
      Race.count += 1;
      return this.count;
    }
    throw new Error('Not implemented');
  }
}

export default Race;
