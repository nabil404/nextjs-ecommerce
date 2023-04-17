import {configureStore} from "@reduxjs/toolkit"
import {useDispatch, useSelector} from 'react-redux'
import type {TypedUseSelectorHook} from 'react-redux'
import {createWrapper} from "next-redux-wrapper";
import {layoutReducer} from "@/store/features/layout/slice";

export const store = configureStore({
  reducer: {
    layout: layoutReducer
  },
})


export type AppStore = typeof store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const wrapper = createWrapper<AppStore>(() => store);