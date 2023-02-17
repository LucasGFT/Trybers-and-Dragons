interface Fight<Type> {
  attack(enemy: Type): void;
  receiveDamage(attackPoints: number): number;
}

export default Fight;
