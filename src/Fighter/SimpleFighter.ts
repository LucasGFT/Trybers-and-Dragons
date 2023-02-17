import Fight from './Fight';

interface SimpleFighter extends Fight<SimpleFighter> {
  lifePoints: number;
  strength: number;
}

export default SimpleFighter;
