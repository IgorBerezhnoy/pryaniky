import { API_BASE_URL, API_GET_TABLE } from '@/service/api'
import { ResponseTypeTable } from '@/service/types'
import { getCookie } from '@/utils'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const tableCompanyApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
  endpoints: builder => ({
    getCompanyTable: builder.query<ResponseTypeTable, void>({
      query: () => {
        return {
          headers: {
            'Content-Type': 'application/json',
            'x-auth': getCookie('token'),
          },
          method: 'GET',
          url: API_GET_TABLE,
        }
      },
    }),
  }),
  reducerPath: 'rickAndMortyApi',
})

export const { useGetCompanyTableQuery } = tableCompanyApi
