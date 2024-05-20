import { EditIcon, TrashIcon } from '@/assets/icons'
import { TableCell, TableRow } from '@/components/table'
import { formatDate } from '@/utils'

import s from '@/components/tableCompany/tableCompany.module.scss'

export const TableCompanyRow = ({
  companySigDate,
  companySignatureName,
  deleteItem,
  documentName,
  documentStatus,
  documentType,
  employeeNumber,
  employeeSigDate,
  employeeSignatureName,
  id,
}: Props) => {
  return (
    <TableRow>
      <TableCell className={s.inputCell}>{formatDate(companySigDate)}</TableCell>
      <TableCell className={s.inputCell}>{companySignatureName}</TableCell>
      <TableCell className={s.inputCell}>{documentName}</TableCell>
      <TableCell className={s.inputCell}>{documentStatus}</TableCell>
      <TableCell className={s.inputCell}>{documentType}</TableCell>
      <TableCell className={s.inputCell}>{employeeNumber}</TableCell>
      <TableCell className={s.inputCell}>{formatDate(employeeSigDate)}</TableCell>
      <TableCell className={s.inputCell}>{employeeSignatureName}</TableCell>
      <TableCell className={s.inputCell}>
        <div className={s.iconsWrapper}>
          <EditIcon className={s.icon} />
          <TrashIcon className={s.icon} onClick={() => deleteItem({ id })} />
        </div>
      </TableCell>
    </TableRow>
  )
}
type Props = {
  companySigDate: string
  companySignatureName: string
  deleteItem: (data: { id: string }) => void
  documentName: string
  documentStatus: string
  documentType: string
  employeeNumber: string
  employeeSigDate: string
  employeeSignatureName: string
  id: string
}
