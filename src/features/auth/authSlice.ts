import { RootState } from '@/app/store/store'
import { API_AUTH } from '@/service/api'
import { LoginPageData, setCookie } from '@/utils'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

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

export const { setAuth, setError } = authSlice.actions

export const signInAsync = createAsyncThunk(
  'user/signIn',
  async (data: LoginPageData, { dispatch }) => {
    dispatch(setError(''))

    try {
      const response = await fetch(API_AUTH, {
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      })
      const res = await response.json()

      setCookie('token', res.data.token, 365)
      dispatch(setAuth(true))

      if (res.error_code === 2004) {
        dispatch(setError('Incorrect login or password'))
      }

      return res.data.token
    } catch (e) {
      dispatch(setError('Incorrect login or password'))
    }
  }
)

export const selectAuth = (state: RootState) => state.auth
export const selectAuthIsAuth = (state: RootState) => state.auth.isAuth
export const selectAuthError = (state: RootState) => state.auth.error
export default authSlice.reducer

export type AuthState = {
  error: null | string
  isAuth: boolean
}
