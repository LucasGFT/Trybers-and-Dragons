import Energy from '../Energy';
import Fight from './Fight';

interface Fighter extends Fight<Fighter> {
  lifePoints: number;
  strength: number;
  defense: number;
  energy?: Energy;

  special?(enemy: Fighter): void;
  levelUp(): void;
}

export default Fighter;
