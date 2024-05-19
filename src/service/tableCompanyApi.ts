import {
  API_BASE_URL,
  API_CREATE_ITEM_IN_TABLE,
  API_DELETE_ITEM_IN_TABLE,
  API_GET_TABLE,
} from '@/service/api'
import { ResponseTypeTable } from '@/service/types'
import { CreateCompanyItemType, getCookie } from '@/utils'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const tableCompanyApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
  endpoints: builder => ({
    createItemInTable: builder.mutation<void, CreateCompanyItemType>({
      invalidatesTags: ['tableCompany'] as never,
      query: data => {
        return {
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json',
            'x-auth': getCookie('token'),
          },
          method: 'POST',
          url: API_CREATE_ITEM_IN_TABLE,
        }
      },
    }),
    deleteItemInTable: builder.mutation<void, { id: string }>({
      invalidatesTags: ['tableCompany'] as never,
      query: data => {
        return {
          headers: {
            'Content-Type': 'application/json',
            'x-auth': getCookie('token'),
          },
          method: 'DELETE',
          url: API_DELETE_ITEM_IN_TABLE + data.id,
        }
      },
    }),
    getCompanyTable: builder.query<ResponseTypeTable, void>({
      providesTags: ['tableCompany'] as never,
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
  reducerPath: 'tableCompanyApi',
})

export const {
  useCreateItemInTableMutation,
  useDeleteItemInTableMutation,
  useGetCompanyTableQuery,
} = tableCompanyApi
