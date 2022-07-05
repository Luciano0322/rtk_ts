import { configureStore } from '@reduxjs/toolkit';
import cakeSlice from '../features/cake/cakeSlice';
import icecreamSlice from '../features/icecream/icecreamSlice';
import userSlice from '../features/user/userSlice';
// import reduxLogger from 'redux-logger';

const store = configureStore({
  reducer: {
    cake: cakeSlice,
    icecream: icecreamSlice,
    user: userSlice,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(reduxLogger),
})
// RootState要記得下export來提供slices使用
export type RootState = ReturnType<typeof store.getState>

export default store;