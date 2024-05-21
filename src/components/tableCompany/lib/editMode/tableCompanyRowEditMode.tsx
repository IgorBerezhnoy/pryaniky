import { CheckIcon, CrossIcon } from '@/assets/icons'
import { TableCell, TableRow } from '@/components/table'
import { useEitMode } from '@/components/tableCompany'
import { TextField } from '@/components/textField'
import { clsx } from 'clsx'

import s from '../../tableCompany.module.scss'

export const TableCompanyRowEditMode = ({ ...rest }: EditModePropsType) => {
  const {
    onSubmit,
    refDocName,
    refDocStatus,
    refDocType,
    refEmpNumber,
    refEmpSigDate,
    refEmpSignatureName,
    refSigDate,
    refSignatureName,
  } = useEitMode({ ...rest })

  return (
    <TableRow>
      <TableCell className={s.inputCell}>
        <TextField
          className={s.textField}
          defaultValue={rest.companySigDate.slice(0, 10)}
          ref={refSigDate}
          type={'date'}
          withBorder
        />
      </TableCell>
      <TableCell className={s.inputCell}>
        <TextField
          className={s.textField}
          defaultValue={rest.companySignatureName}
          ref={refSignatureName}
          withBorder
        />
      </TableCell>
      <TableCell className={s.inputCell}>
        <TextField
          className={s.textField}
          defaultValue={rest.documentName}
          ref={refDocName}
          withBorder
        />
      </TableCell>
      <TableCell className={s.inputCell}>
        <TextField
          className={s.textField}
          defaultValue={rest.documentStatus}
          ref={refDocStatus}
          withBorder
        />
      </TableCell>
      <TableCell className={s.inputCell}>
        <TextField
          className={s.textField}
          defaultValue={rest.documentType}
          ref={refDocType}
          withBorder
        />
      </TableCell>
      <TableCell className={s.inputCell}>
        <TextField
          className={s.textField}
          defaultValue={rest.employeeNumber}
          ref={refEmpNumber}
          withBorder
        />
      </TableCell>
      <TableCell className={s.inputCell}>
        <TextField
          className={s.textField}
          defaultValue={rest.employeeSigDate.slice(0, 10)}
          ref={refEmpSigDate}
          type={'date'}
          withBorder
        />
      </TableCell>
      <TableCell className={s.inputCell}>
        <TextField
          className={s.textField}
          defaultValue={rest.employeeSignatureName}
          ref={refEmpSignatureName}
          withBorder
        />
      </TableCell>
      <TableCell className={s.inputCell}>
        <div className={s.iconsWrapper}>
          <button className={s.iconButton} onClick={onSubmit}>
            <CheckIcon className={clsx(s.icon, s.green)} />
          </button>
          <button className={s.iconButton}>
            <CrossIcon className={clsx(s.icon, s.red)} onClick={() => rest.setEditMode('')} />
          </button>
        </div>
      </TableCell>
    </TableRow>
  )
}

export type EditModePropsType = {
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
