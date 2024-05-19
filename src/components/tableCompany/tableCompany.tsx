import { EditIcon, TrashIcon } from '@/assets/icons'
import { Table, TableBody, TableCell, TableHeader, TableRow } from '@/components/table'
import { tableHeader } from '@/constatns/tableHeader'
import { useDeleteItemInTableMutation } from '@/service/tableCompanyApi'
import { TableItem } from '@/service/types'
import { formatDate } from '@/utils'

import s from '@/pages/main-page/main-page.module.scss'

export const TableCompany = ({ items }: { items: TableItem[] }) => {
  const [deleteItem, {}] = useDeleteItemInTableMutation()

  return (
    <Table className={s.tableCompany}>
      <TableHeader columns={tableHeader} />
      <TableBody className={s.tableBody}>
        {items.map(el => {
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
              <TableCell className={s.inputCellL}>
                <EditIcon />
                <TrashIcon onClick={() => deleteItem({ id: el.id })} />
              </TableCell>
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  )
}
