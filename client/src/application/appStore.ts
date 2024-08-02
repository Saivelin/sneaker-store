import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { rootReducer } from './appReducer'
import { usersApi } from '@/entities/user'
import { productsApi } from '@/entities/products'

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({}).concat([
        usersApi.middleware,
        productsApi.middleware
    ]),
    devTools: process.env.NODE_ENV !== 'production'
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
