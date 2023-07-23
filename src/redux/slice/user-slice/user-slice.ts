import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { UserInitialStateDTO, UserStateDTO } from './types'
import { fetchUser } from './user-async-actions'
export const userInitialState: UserInitialStateDTO = {
  id: 0,
  name: "",
  surname: "",
  birthday: "",
  email: "",
  phone: "",
  website: "",
  avatar: "",
  company: {
    name: "",
    position: "",
  },
  loading: true,
  error: false,
}

export const userSlice = createSlice({
  name: 'counter',
  initialState: userInitialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserStateDTO>) => ({
      ...state,
      ...action.payload
    }),
    cleanUserState: () => userInitialState,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUser.fulfilled, (state, action: PayloadAction<UserInitialStateDTO>) => ({
      ...state,
      ...action.payload,
      loading: false,
    }));
    builder.addCase(fetchUser.rejected, () => ({
      ...userInitialState,
      error: true,
    }));;
  },
})

export const { setUser, cleanUserState } = userSlice.actions

export default userSlice.reducer