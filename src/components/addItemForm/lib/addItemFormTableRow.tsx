import { memo } from 'react'
import { Control } from 'react-hook-form'

import { ControlledTextField } from '@/components/controlled-textField'
import { TableCell } from '@/components/table'
import { tableHeaderCreateItem } from '@/constatns/tableHeader'
import { CreateCompanyItemType } from '@/utils'

import s from '@/components/addItemForm/addItemForm.module.scss'

export const AddItemFormTableRow = memo(({ control }: Props) => {
  return (
    <>
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
    </>
  )
})
type Props = {
  control: Control<CreateCompanyItemType, any>
}
