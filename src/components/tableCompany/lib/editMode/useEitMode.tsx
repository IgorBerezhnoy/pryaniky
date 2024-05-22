import { useRef } from 'react'
import { toast } from 'react-toastify'

import { EditModePropsType } from '@/components/tableCompany'
import { useUpdateItemInTableMutation } from '@/service/tableCompanyApi'
import { TableItemType } from '@/service/types'

export const useEitMode = ({
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
}: EditModePropsType) => {
  const [updateItem, {}] = useUpdateItemInTableMutation()
  const refSigDate = useRef<HTMLInputElement>(null)
  const refSignatureName = useRef<HTMLInputElement>(null)
  const refDocName = useRef<HTMLInputElement>(null)
  const refDocStatus = useRef<HTMLInputElement>(null)
  const refDocType = useRef<HTMLInputElement>(null)
  const refEmpNumber = useRef<HTMLInputElement>(null)
  const refEmpSigDate = useRef<HTMLInputElement>(null)
  const refEmpSignatureName = useRef<HTMLInputElement>(null)
  const onSubmit = () => {
    const data: TableItemType = {
      companySigDate: refSigDate.current?.value || companySigDate,
      companySignatureName: refSignatureName.current?.value || companySignatureName,
      documentName: refDocName.current?.value || documentName,
      documentStatus: refDocStatus.current?.value || documentStatus,
      documentType: refDocType.current?.value || documentType,
      employeeNumber: refEmpNumber.current?.value || employeeNumber,
      employeeSigDate: refEmpSigDate.current?.value || employeeSigDate,
      employeeSignatureName: refEmpSignatureName.current?.value || employeeSignatureName,
      id,
    }

    updateItem(data).then(
      () => setEditMode(''),
      () => {
        toast('Упс произошла ошибка', { position: 'bottom-left', type: 'error' })

        setEditMode('')
      }
    )
  }

  return {
    onSubmit,
    refDocName,
    refDocStatus,
    refDocType,
    refEmpNumber,
    refEmpSigDate,
    refEmpSignatureName,
    refSigDate,
    refSignatureName,
  }
}
