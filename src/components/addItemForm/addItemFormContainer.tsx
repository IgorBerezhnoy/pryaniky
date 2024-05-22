import { memo } from 'react'
import { useForm } from 'react-hook-form'

import { AddItemForm } from '@/components/addItemForm/addItemForm'
import { useCreateItemInTableMutation } from '@/service/tableCompanyApi'
import { CreateCompanyItemType, schemaCreateCompanyItem } from '@/utils'
import { zodResolver } from '@hookform/resolvers/zod'

export const AddItemFormContainer = memo(() => {
  const [createItem, {}] = useCreateItemInTableMutation()

  const { control, handleSubmit } = useForm<CreateCompanyItemType>({
    resolver: zodResolver(schemaCreateCompanyItem),
  })
  const onSubmit = handleSubmit((data: CreateCompanyItemType) => {
    createItem(data)
  })

  return <AddItemForm control={control} onSubmit={onSubmit} />
})
