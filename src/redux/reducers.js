import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    price : 0
}

export const mealsSlice = createSlice({
    name:'meals',
    initialState,
    reducers : {
        addMealsPrice : (state, actions) => {
            state.price += actions.payload
        }
    }
})

export const { addMealsPrice } = mealsSlice.actions
export default mealsSlice.reducer

