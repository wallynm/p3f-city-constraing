import { configureStore } from '@reduxjs/toolkit'
import worldSlice from './modules/World/worldSlice'
import citiesSlice from './modules/Cities/citiesSlice'

export const store = configureStore({
  reducer: {
    world: worldSlice,
    cities: citiesSlice
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
