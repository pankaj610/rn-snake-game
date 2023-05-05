import {useEffect, useState} from 'react';
import {Constants} from './Constants';
import {Head} from './Head';
import {randomBetween} from '../App';
import {Food} from './Food';
import {Tail} from './Tail';

export const getEntities = () => ({
  head: {
    position: [0, 0],
    xspeed: 1,
    yspeed: 0,
    updateFrequency: 10,
    nextMove: 10,
    size: Constants.CELL_SIZE,
    renderer: Head,
  },
  food: {
    position: [
      randomBetween(0, Constants.GRID_SIZE - 1),
      randomBetween(0, Constants.GRID_SIZE - 1),
    ],
    size: Constants.CELL_SIZE,
    renderer: Food,
  },
  tail: {
    size: Constants.CELL_SIZE,
    elements: [],
    renderer: Tail,
  },
});

const useGameEngine = ({gameEngineRef}: any) => {
  const [entities, setEntities] = useState<any>();

  useEffect(() => {
    setEntities(getEntities());
    return () => {};
  }, []);

  return {entities};
};

export default useGameEngine;
