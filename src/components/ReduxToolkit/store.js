import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counters/counterSlice.jsx'

export const store = configureStore({
  reducer: {
    counter: counterReducer
  },
})