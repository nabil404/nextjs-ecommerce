import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {LayoutState} from './types'

const initialState: LayoutState = {
  isSidebarOpen: false,
  isCartOpen: false
}

export const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    setSidebarState(state, {payload}: PayloadAction<boolean>) {
      state.isSidebarOpen = payload
      state.isCartOpen = !payload
    },
    setCartState(state, {payload}: PayloadAction<boolean>) {
      state.isCartOpen = payload
      state.isSidebarOpen = !payload
    },
  },
})

export const {setSidebarState: setSidebarStateAction, setCartState: setCartStateAction} = layoutSlice.actions
export const {reducer: layoutReducer} = layoutSlice
