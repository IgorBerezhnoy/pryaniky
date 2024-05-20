import React, { useState } from 'react'

import { TableBody } from '@/components/table'
import { TableCompanyRow } from '@/components/tableCompany/tableCompanyRow'
import { TableCompanyRowEditMode } from '@/components/tableCompany/tableCompanyRowEditMode'
import { useDeleteItemInTableMutation } from '@/service/tableCompanyApi'
import { TableItem } from '@/service/types'

import s from '@/components/tableCompany/tableCompany.module.scss'

export const TableCompanyBody = ({ items }: Props) => {
  const [deleteItem, {}] = useDeleteItemInTableMutation()
  const [editMode, setEditMode] = useState<string>(items[0].id)

  return (
    <TableBody className={s.tableBody}>
      {items.map(el => (
        <React.Fragment key={el.id}>
          {editMode !== el.id ? (
            <TableCompanyRow {...el} deleteItem={deleteItem} id={el.id} setEditMode={setEditMode} />
          ) : (
            <TableCompanyRowEditMode
              {...el}
              deleteItem={deleteItem}
              id={el.id}
              setEditMode={setEditMode}
            />
          )}
        </React.Fragment>
      ))}
    </TableBody>
  )
}
type Props = { items: TableItem[] }
