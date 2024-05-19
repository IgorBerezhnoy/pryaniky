import { appSlice } from '@/features/app/appSlice'
import { authSlice } from '@/features/auth/authSlice'
import { tableCompanyApi } from '@/service/tableCompanyApi'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(tableCompanyApi.middleware),
  reducer: {
    app: appSlice.reducer,
    auth: authSlice.reducer,
    [tableCompanyApi.reducerPath]: tableCompanyApi.reducer,
  },
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
