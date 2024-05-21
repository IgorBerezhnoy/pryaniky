import { memo } from 'react'
import { useForm } from 'react-hook-form'

import { Button } from '@/components/button'
import { ControlledTextField } from '@/components/controlled-textField'
import { Table, TableBody, TableCell, TableHeader, TableRow } from '@/components/table'
import { tableHeader, tableHeaderCreateItem } from '@/constatns/tableHeader'
import { useCreateItemInTableMutation } from '@/service/tableCompanyApi'
import { CreateCompanyItemType, schemaCreateCompanyItem } from '@/utils'
import { zodResolver } from '@hookform/resolvers/zod'

import s from './addItemForm.module.scss'

export const AddItemForm = memo(() => {
  const [createItem, {}] = useCreateItemInTableMutation()

  const { control, handleSubmit } = useForm<CreateCompanyItemType>({
    resolver: zodResolver(schemaCreateCompanyItem),
  })
  const onSubmit = handleSubmit((data: CreateCompanyItemType) => {
    createItem(data)
  })

  return (
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
                    className={s.textField}
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
              <Button className={s.green} variant={'secondary'}>
                +
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </form>
  )
})
