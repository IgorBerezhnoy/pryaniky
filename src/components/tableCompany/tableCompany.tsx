import { Table, TableHeader } from '@/components/table'
import { TableCompanyBody } from '@/components/tableCompany/tableCompanyBody'
import { tableHeader } from '@/constatns/tableHeader'
import { TableItem } from '@/service/types'

import s from './tableCompany.module.scss'

export const TableCompany = ({ items }: { items: TableItem[] }) => {
  return (
    <Table className={s.tableCompany}>
      <TableHeader columns={tableHeader} />
      <TableCompanyBody items={items} />
    </Table>
  )
}
