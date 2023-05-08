import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../interfaces'

// Define a type for the slice state
export interface CounterState {
    value: number
  }
  
  // Define the initial state using that type
  const initialState: CounterState = {
    value: 10,
  }
  
  export const counterSlice = createSlice({
    name: 'counter',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
      increment: (state) => {
        state.value += 1
      },
      decrement: (state) => {
        state.value -= 1
      },
      incrementBy: (state, action: PayloadAction<number>) => {
        state.value += action.payload
      }
    },
  })
  
export const { increment, decrement, incrementBy } = counterSlice.actions
  
export const selectCount = (state: RootState) => state.counter.value;