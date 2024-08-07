import { configureStore } from '@reduxjs/toolkit'
import shopReducer from './reduceres/shop'
export const makeStore = () => {
    return configureStore({
        reducer: {
            shop: shopReducer,
        },
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                thunk: {
                    extraArgument: {},
                },
            }),
    })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']