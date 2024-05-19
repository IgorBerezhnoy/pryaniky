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
