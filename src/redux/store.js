import { configureStore } from '@reduxjs/toolkit'
import  mealsSlice  from './reducers'

export const store = configureStore({
  reducer : {
    mealsPrice : mealsSlice
  }
})