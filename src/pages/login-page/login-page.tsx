import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

import { Button } from '@/components/button'
import { Card } from '@/components/card'
import { ControlledTextField } from '@/components/controlled-textField'
import { Page } from '@/components/page'
import { selectAuthIsAuth, signInAsync } from '@/features/auth/authSlice'
import { useAppDispatch } from '@/hooks/use-appDispatch'
import { LoginPageData, schemaLoginPageData } from '@/utils/validators'
import { zodResolver } from '@hookform/resolvers/zod'

import s from './login-page.module.scss'

export const LoginPage = () => {
  const { control, handleSubmit } = useForm<LoginPageData>({
    resolver: zodResolver(schemaLoginPageData),
  })
  const isAuth = useSelector(selectAuthIsAuth)
  const dispatch = useAppDispatch()
  const signInHandler = handleSubmit((data: LoginPageData) => {
    dispatch(signInAsync(data))
  })

  if (isAuth) {
    return <Navigate to={'/'} />
  }

  return (
    <Page>
      <Card className={s.wrapper}>
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
      </Card>
    </Page>
  )
}
