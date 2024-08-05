import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { rootReducer } from './appReducer'
import { usersApi } from '@/entities/user'
import { productsApi } from '@/entities/products'
import { categoriesApi } from '@/entities/categories'

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({}).concat([
        usersApi.middleware,
        productsApi.middleware,
        categoriesApi.middleware,
    ]),
    devTools: process.env.NODE_ENV !== 'production'
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
