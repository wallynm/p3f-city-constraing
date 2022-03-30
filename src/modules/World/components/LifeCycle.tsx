
import { useEffect } from 'react';
import { dateIncrement } from '../worldSlice'
import { RootState } from '../../../store'

import { useSelector, useDispatch } from 'react-redux'
import useInterval from '../../../hooks/useInterval';
import { cityUpdate } from '../../Cities/citiesSlice';

const LifeCycle = () => {
  const gameCycle = useSelector((state: RootState) => state.world.gameCycle)
  const dispatch = useDispatch();
  const running = true;
  
  const BaseCycle = () => {
    dispatch(dateIncrement())
    dispatch(cityUpdate())
  }

  useInterval(() => {
    if(running) {
      BaseCycle();
    }
  }, gameCycle);

  return null;
}

export default LifeCycle;
