import { configureStore } from '@reduxjs/toolkit'
import minifigsReducer from '../features/minifigs/minifigsSlice'

export const store = configureStore({
    reducer: {
        minifigs: minifigsReducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
