import { CheckIcon, CrossIcon } from '@/assets/icons'
import { TableCell, TableRow } from '@/components/table'
import { TextField } from '@/components/textField'

import s from './tableCompany.module.scss'

export const TableCompanyRowEditMode = ({
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
      <TableCell className={s.inputCell}>
        <TextField defaultValue={companySigDate.slice(0, 10)} type={'date'} withBorder />
      </TableCell>
      <TableCell className={s.inputCell}>
        <TextField defaultValue={companySignatureName} withBorder />
      </TableCell>
      <TableCell className={s.inputCell}>
        <TextField defaultValue={documentName} withBorder />
      </TableCell>
      <TableCell className={s.inputCell}>
        <TextField defaultValue={documentStatus} withBorder />
      </TableCell>
      <TableCell className={s.inputCell}>
        <TextField defaultValue={documentType} withBorder />
      </TableCell>
      <TableCell className={s.inputCell}>
        <TextField defaultValue={employeeNumber} withBorder />
      </TableCell>
      <TableCell className={s.inputCell}>
        <TextField defaultValue={employeeSigDate.slice(0, 10)} type={'date'} withBorder />
      </TableCell>
      <TableCell className={s.inputCell}>
        <TextField defaultValue={employeeSignatureName} withBorder />
      </TableCell>
      <TableCell className={s.inputCell}>
        <div className={s.iconsWrapper}>
          <CheckIcon className={s.icon} />
          <CrossIcon className={s.icon} onClick={() => deleteItem({ id })} />
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
