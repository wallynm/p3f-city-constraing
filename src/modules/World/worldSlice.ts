import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const GAME_CYCLE = 1000 * 5;
const DAYS_OVER_YEAR = 90;

export interface CounterState {
  gameCycle: number,
  day: number
  year: number,
  season: string,
  weather: string,
  totalPopulation: number
}

const initialState: CounterState = {
  gameCycle: GAME_CYCLE,
  day: 1,
  year: 1,
  season: 'Spring',
  weather: 'Sunny',
  totalPopulation: 1000
}

export const worldSlicer = createSlice({
  name: 'world',
  initialState,
  reducers: {
    dateIncrement: (state) => {
      state.day += 1
      if (state.day === DAYS_OVER_YEAR + 1) {
        state.day = 1
        state.year += 1
      }
    },

    updateGameCycle: (state, action) => {
      state.gameCycle = action.payload
    }
  },
})

export const { dateIncrement, updateGameCycle } = worldSlicer.actions

export default worldSlicer.reducer