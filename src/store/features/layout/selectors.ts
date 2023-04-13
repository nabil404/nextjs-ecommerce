import { createSelector } from '@reduxjs/toolkit'

import { RootState } from '@/store'

const selectLayout = (state: RootState) => state.layout

export const selectIsSidebarOpen = createSelector(selectLayout, ({ isSidebarOpen }) => isSidebarOpen)
export const selectIsCartOpen = createSelector(selectLayout, ({ isCartOpen }) => isCartOpen)
