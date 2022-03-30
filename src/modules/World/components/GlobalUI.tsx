import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { updateGameCycle } from '../worldSlice';
import styles from './GlobalUI.module.css'

const GlobalUI = () => {
  const dispatch = useDispatch();
  const currentGameCycle = useSelector((state: RootState) => state.world.gameCycle);
  const currentDay = useSelector((state: RootState) => state.world.day);
  const currentYear = useSelector((state: RootState) => state.world.year);
  const currentWeather = useSelector((state: RootState) => state.world.weather);

  const updateData = (e) => {
    if(e.target.value) {
      dispatch(updateGameCycle(e.target.value))
    }
  }

  return (
    <div className={styles.ui}>
      <div>
        <input defaultValue={currentGameCycle} onBlur={updateData}/>
      </div>
      <div>
        Date: {currentDay} / {currentYear}
      </div>
      <div>
        Weather: {currentWeather}
      </div>
    </div>
  )
}

export default GlobalUI;
