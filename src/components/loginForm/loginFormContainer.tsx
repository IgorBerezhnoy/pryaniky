import { memo } from 'react'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'

import { LoginForm } from '@/components/loginForm/loginForm'
import { selectAuthError, signInAsync } from '@/features/auth/authSlice'
import { useAppDispatch } from '@/hooks/use-appDispatch'
import { LoginPageData, schemaLoginPageData } from '@/utils'
import { zodResolver } from '@hookform/resolvers/zod'

export const LoginFormContainer = memo(() => {
  const dispatch = useAppDispatch()
  const erorr = useSelector(selectAuthError)
  const { control, handleSubmit, setError } = useForm<LoginPageData>({
    resolver: zodResolver(schemaLoginPageData),
  })
  const signInHandler = handleSubmit((data: LoginPageData) => {
    dispatch(signInAsync(data))
    toast('🦄 Welcome', { position: 'top-center' })
  })

  if (erorr) {
    setError('username', { message: erorr })
    setError('password', { message: erorr })
  }

  return <LoginForm control={control} signInHandler={signInHandler} />
})
