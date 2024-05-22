import { memo } from 'react'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'

import { LoginForm } from '@/components'
import { selectAuthError, signInAsync } from '@/features/auth/authSlice'
import { useAppDispatch } from '@/hooks/use-appDispatch'
import { LoginPageData, schemaLoginPageData } from '@/utils'
import { zodResolver } from '@hookform/resolvers/zod'

export const LoginFormContainer = memo(() => {
  const dispatch = useAppDispatch()
  const authError = useSelector(selectAuthError)
  const { control, handleSubmit, setError } = useForm<LoginPageData>({
    resolver: zodResolver(schemaLoginPageData),
  })
  const signInHandler = handleSubmit((data: LoginPageData) => {
    dispatch(signInAsync(data))
    toast('🦄 Welcome', { position: 'top-center' })
  })

  if (authError) {
    setError('username', { message: authError })
    setError('password', { message: authError })
  }

  return <LoginForm control={control} signInHandler={signInHandler} />
})
