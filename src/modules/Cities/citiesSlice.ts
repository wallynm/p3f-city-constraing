import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit'
import { citiesInitial } from './citiesInitialState'
import { CityInterface, CitySize } from '../../Interfaces'

const citiesAdapter = createEntityAdapter<CityInterface>({
  // Assume IDs are stored in a field other than `book.id`
  selectId: (city) => city.id,
  // Keep the "all IDs" array sorted based on book titles
  sortComparer: (a, b) => a.name.localeCompare(b.name),
})

export const citiesSelector = citiesAdapter.getSelectors((state:RootState) => state.cities)


import { createAction, nanoid } from '@reduxjs/toolkit'
import { RootState } from '../../store'

export const cityUpdate = createAsyncThunk('cities/update', async (params, {dispatch}) => {
  // citiesSelector

  console.info(citySlicer.actions.cityUpdate());
  return dispatch(citySlicer.actions.cityUpdate({
    id: 'vessel', 
    changes: {
      name: 'Vesselino'
    }
  }))
})

export const citySlicer = createSlice({
  name: 'cities',
  // initialState: citiesInitial,
  initialState: citiesAdapter.getInitialState({
    ids: ['vessel', 'tenesse', 'assel', 'shersh'],
    entities: citiesInitial 
  }),
  reducers: {
    cityUpdate: citiesAdapter.updateOne,
  },
})


export default citySlicer.reducer