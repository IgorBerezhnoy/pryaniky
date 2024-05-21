import { Table, TableHeader } from '@/components/table'
import { TableCompanyBody } from '@/components/tableCompany/lib/tableCompanyBody'
import { tableHeader } from '@/constatns/tableHeader'
import { TableItemType } from '@/service/types'

import s from './tableCompany.module.scss'

export const TableCompany = ({ items }: { items: TableItemType[] }) => {
  return (
    <Table className={s.tableCompany}>
      <TableHeader columns={tableHeader} />
      <TableCompanyBody items={items} />
    </Table>
  )
}
