import React, { useState } from 'react'
import { toast } from 'react-toastify'

import { TableBody } from '@/components/table'
import { TableCompanyRowEditMode } from '@/components/tableCompany/lib/editMode/tableCompanyRowEditMode'
import { TableCompanyRow } from '@/components/tableCompany/lib/tableCompanyRow'
import { useDeleteItemInTableMutation } from '@/service/tableCompanyApi'
import { TableItemType } from '@/service/types'

import s from '@/components/tableCompany/tableCompany.module.scss'

export const TableCompanyBody = ({ items }: Props) => {
  const [deleteItem, { error }] = useDeleteItemInTableMutation()
  const [editMode, setEditMode] = useState<string>('')

  if (error) {
    toast('Упс произошла ошибка', { position: 'bottom-left', type: 'error' })
  }

  return (
    <TableBody className={s.tableBody}>
      {items.map(el => (
        <React.Fragment key={el.id}>
          {editMode !== el.id ? (
            <TableCompanyRow {...el} deleteItem={deleteItem} id={el.id} setEditMode={setEditMode} />
          ) : (
            <TableCompanyRowEditMode {...el} id={el.id} setEditMode={setEditMode} />
          )}
        </React.Fragment>
      ))}
    </TableBody>
  )
}
type Props = { items: TableItemType[] }
