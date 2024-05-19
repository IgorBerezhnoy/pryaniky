export const API_BASE_URL = 'https://test.v5.pryaniky.com/'
export const API_AUTH = `${API_BASE_URL}ru/data/v3/testmethods/docs/login`
export const API_GET_TABLE = `${API_BASE_URL}ru/data/v3/testmethods/docs/userdocs/get`
export const API_CREATE_ITEM_IN_TABLE = `${API_BASE_URL}ru/data/v3/testmethods/docs/userdocs/create`
export const API_DELETE_ITEM_IN_TABLE = `${API_BASE_URL}ru/data/v3/testmethods/docs/userdocs/delete/`
export const API_UPDATE_ITEM_IN_TABLE = `${API_BASE_URL}ru/data/v3/testmethods/docs/userdocs/set/`
export type ResponseTypeT<T> = {
  data: T
  error_code: number
  error_message: string
  profiling: string
  timings?: any
}
type ResponseTypeLoginData = {
  token: string
}
export type ResponseTypeLogin = ResponseTypeT<ResponseTypeLoginData>
export type RootObResponseTypeTable = ResponseTypeT<TableItem[]>
export type TableItem = {
  companySigDate: string
  companySignatureName: string
  documentName: string
  documentStatus: string
  documentType: string
  employeeNumber: string
  employeeSigDate: string
  employeeSignatureName: string
  id: string
}
