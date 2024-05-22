import { memo } from 'react'
import { Control } from 'react-hook-form'

import { AddItemFormTableRow } from '@/components/addItemForm/lib/addItemFormTableRow'
import { Button } from '@/components/button'
import { Table, TableBody, TableCell, TableHeader, TableRow } from '@/components/table'
import { tableHeader } from '@/constatns/tableHeader'
import { CreateCompanyItemType } from '@/utils'

import s from './addItemForm.module.scss'

export const AddItemForm = memo(({ control, onSubmit }: Props) => {
  return (
    <form onSubmit={onSubmit}>
      <Table>
        <TableHeader columns={tableHeader} />
        <TableBody>
          <TableRow>
            <AddItemFormTableRow control={control} />
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
type Props = {
  control: Control<CreateCompanyItemType, any>
  onSubmit: () => void
}
