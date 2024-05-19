import { useForm } from 'react-hook-form'

import { Button } from '@/components/button'
import { ControlledTextField } from '@/components/controlled-textField'
import { signInAsync } from '@/features/auth/authSlice'
import { useAppDispatch } from '@/hooks/use-appDispatch'
import { LoginPageData, schemaLoginPageData } from '@/utils'
import { zodResolver } from '@hookform/resolvers/zod'

import s from '@/pages/login-page/login-page.module.scss'

export const LoginForm = () => {
  const dispatch = useAppDispatch()

  const { control, handleSubmit } = useForm<LoginPageData>({
    resolver: zodResolver(schemaLoginPageData),
  })
  const signInHandler = handleSubmit((data: LoginPageData) => {
    dispatch(signInAsync(data))
  })

  return (
    <form className={s.form} onSubmit={signInHandler}>
      <h1 className={s.title}>Sign In</h1>

      <ControlledTextField
        classNameWrapper={s.textField}
        control={control}
        label={'Login'}
        name={'username'}
        placeholder={'Login'}
      />
      <ControlledTextField
        autoComplete={'cc-csc'}
        classNameWrapper={s.textField}
        control={control}
        label={'Password'}
        name={'password'}
        placeholder={'password'}
        type={'password'}
      />
      <Button className={s.button} fullWidth>
        Login
      </Button>
    </form>
  )
}
