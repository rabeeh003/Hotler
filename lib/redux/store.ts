import { configureStore } from '@reduxjs/toolkit'
import shopReducer from './reduceres/shop'
import categoryAndProductsSlice from './reduceres/categoryAndProduct'
export const makeStore = () => {
    return configureStore({
        reducer: {
            shop: shopReducer,
            categoryAndProducts: categoryAndProductsSlice,
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