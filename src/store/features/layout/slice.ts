import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {LayoutState} from './types'

const initialState: LayoutState = {
  isSidebarOpen: false,
  isCartOpen: false,
  isSearchOpen: false
}

export const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    setSidebarState(state, {payload}: PayloadAction<boolean>) {
      state.isSidebarOpen = payload
    },
    setCartState(state, {payload}: PayloadAction<boolean>) {
      state.isCartOpen = payload
    },
    setSearchState(state, {payload}: PayloadAction<boolean>) {
      state.isSearchOpen = payload
    },
  },
})

export const {
  setSidebarState: setSidebarStateAction,
  setCartState: setCartStateAction,
  setSearchState: setSearchStateAction
} = layoutSlice.actions
export const {reducer: layoutReducer} = layoutSlice
