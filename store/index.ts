import { configureStore } from '@reduxjs/toolkit';
import cakeSlice from '../features/cake/cakeSlice';

const store = configureStore({
  reducer: {
    cake: cakeSlice,
  },
})
// RootState要記得下export來提供slices使用
export type RootState = ReturnType<typeof store.getState>

export default store;