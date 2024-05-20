import { CheckIcon, CrossIcon } from '@/assets/icons'
import { TableCell, TableRow } from '@/components/table'
import { TextField } from '@/components/textField'
import { clsx } from 'clsx'

import s from './tableCompany.module.scss'

export const TableCompanyRowEditMode = ({
  companySigDate,
  companySignatureName,
  documentName,
  documentStatus,
  documentType,
  employeeNumber,
  employeeSigDate,
  employeeSignatureName,
  id,
  setEditMode,
}: Props) => {
  return (
    <TableRow>
      <TableCell className={s.inputCell}>
        <TextField
          className={s.textField}
          defaultValue={companySigDate.slice(0, 10)}
          type={'date'}
          withBorder
        />
      </TableCell>
      <TableCell className={s.inputCell}>
        <TextField className={s.textField} defaultValue={companySignatureName} withBorder />
      </TableCell>
      <TableCell className={s.inputCell}>
        <TextField className={s.textField} defaultValue={documentName} withBorder />
      </TableCell>
      <TableCell className={s.inputCell}>
        <TextField className={s.textField} defaultValue={documentStatus} withBorder />
      </TableCell>
      <TableCell className={s.inputCell}>
        <TextField className={s.textField} defaultValue={documentType} withBorder />
      </TableCell>
      <TableCell className={s.inputCell}>
        <TextField className={s.textField} defaultValue={employeeNumber} withBorder />
      </TableCell>
      <TableCell className={s.inputCell}>
        <TextField
          className={s.textField}
          defaultValue={employeeSigDate.slice(0, 10)}
          type={'date'}
          withBorder
        />
      </TableCell>
      <TableCell className={s.inputCell}>
        <TextField className={s.textField} defaultValue={employeeSignatureName} withBorder />
      </TableCell>
      <TableCell className={s.inputCell}>
        <div className={s.iconsWrapper}>
          <button className={s.iconButton} onClick={() => console.log(id)}>
            <CheckIcon className={clsx(s.icon, s.green)} />
          </button>
          <button className={s.iconButton}>
            <CrossIcon className={clsx(s.icon, s.red)} onClick={() => setEditMode('')} />
          </button>
        </div>
      </TableCell>
    </TableRow>
  )
}
type Props = {
  companySigDate: string
  companySignatureName: string
  documentName: string
  documentStatus: string
  documentType: string
  employeeNumber: string
  employeeSigDate: string
  employeeSignatureName: string
  id: string

  setEditMode: (id: string) => void
}
