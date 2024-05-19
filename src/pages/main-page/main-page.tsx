import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

import { Button } from '@/components/button'
import { ControlledTextField } from '@/components/controlled-textField'
import { Page } from '@/components/page'
import { Table, TableBody, TableCell, TableHeader, TableRow } from '@/components/table'
import { tableHeader, tableHeaderCreateItem } from '@/constatns/tableHeader'
import { selectAuth } from '@/features/auth/authSlice'
import { urlPaths } from '@/router/urlPaths'
import { useCreateItemInTableMutation, useGetCompanyTableQuery } from '@/service/tableCompanyApi'
import { CreateCompanyItemType, formatDate, schemaCreateCompanyItem } from '@/utils'
import { zodResolver } from '@hookform/resolvers/zod'

import s from './main-page.module.scss'

export const MainPage = () => {
  const isAuth = useSelector(selectAuth).isAuth

  const { data, isLoading } = useGetCompanyTableQuery()
  const { control, handleSubmit } = useForm<CreateCompanyItemType>({
    resolver: zodResolver(schemaCreateCompanyItem),
  })
  const [createItem, {}] = useCreateItemInTableMutation()

  if (!isAuth) {
    return <Navigate to={urlPaths.login} />
  }
  const onSubmit = handleSubmit((data: CreateCompanyItemType) => {
    createItem(data)
  })

  return (
    <Page>
      <h1>Main Page</h1>
      <form onSubmit={onSubmit}>
        <Table>
          <TableHeader columns={tableHeader} />
          <TableBody>
            <TableRow>
              {tableHeaderCreateItem.map((el, index) => {
                // @ts-ignore
                const type = el.type || 'text'

                return (
                  <TableCell className={s.inputCell} key={index}>
                    <ControlledTextField
                      control={control}
                      name={el.key}
                      placeholder={'Введите текст'}
                      type={type}
                      withBorder
                    />
                  </TableCell>
                )
              })}
              <TableCell>
                <Button variant={'secondary'}>+</Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </form>
      {isLoading && <h1>Loading...</h1>}
      {data && (
        <Table className={s.tableCompany}>
          <TableHeader columns={tableHeader} />
          <TableBody className={s.tableBody}>
            {data.data.map(el => {
              return (
                <TableRow key={el.id}>
                  <TableCell className={s.inputCellL}>{formatDate(el.companySigDate)}</TableCell>
                  <TableCell className={s.inputCellL}>{el.companySignatureName}</TableCell>
                  <TableCell className={s.inputCellL}>{el.documentName}</TableCell>
                  <TableCell className={s.inputCellL}>{el.documentStatus}</TableCell>
                  <TableCell className={s.inputCellL}>{el.documentType}</TableCell>
                  <TableCell className={s.inputCellL}>{el.employeeNumber}</TableCell>
                  <TableCell className={s.inputCellL}>{formatDate(el.employeeSigDate)}</TableCell>
                  <TableCell className={s.inputCellL}>{el.employeeSignatureName}</TableCell>
                  <TableCell className={s.inputCellL}>icons</TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      )}
    </Page>
  )
}
