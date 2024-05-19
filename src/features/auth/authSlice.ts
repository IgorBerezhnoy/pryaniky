import { createSlice } from '@reduxjs/toolkit'

const initialState: AuthState = {
  error: null,
  isAuth: false,
}

export const authSlice = createSlice({
  initialState,
  name: 'auth',
  reducers: {
    setAuth: (state, action: { payload: boolean }) => {
      state.isAuth = action.payload
    },
    setError: (state, action: { payload: string }) => {
      state.error = action.payload
    },
  },
})
export type AuthState = {
  error: null | string
  isAuth: boolean
}
