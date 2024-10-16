import { configureStore } from '@reduxjs/toolkit'
import productReducer from './slides/ProductSlice'; 
import detailReducer from './slides/DetailSlice'
import { useDispatch, useSelector } from 'react-redux';
import cartReducer from './slides/CartSlice';

export const store = configureStore({
  reducer: {
    products: productReducer,
    detail: detailReducer, 
    cart: cartReducer,
  },
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()