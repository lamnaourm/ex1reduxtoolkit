import { createSlice } from "@reduxjs/toolkit";


const CounterSlice = createSlice({
        name:'counter',
        initialState : {compteur:100},
        reducers : {
            increment : (state,action) => {
                state.compteur += action.payload
            },
            decrement : (state,action) => {
                state.compteur -= action.payload
            },
            init : (state,action) => {
                state.compteur = action.payload
            },
        }
    }
)

export const {increment, decrement, init} = CounterSlice.actions
export default CounterSlice.reducer;
