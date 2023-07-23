import { configureStore } from '@reduxjs/toolkit';
import userSlice from './slice/user-slice/user-slice';

export const store = configureStore({
  reducer: {
    user: userSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const getUserState = (state:RootState) => state.user;