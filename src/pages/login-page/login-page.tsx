import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Navigate } from 'react-router-dom'

import { Button } from '@/components/button'
import { Card } from '@/components/card'
import { ControlledTextField } from '@/components/controlled-textField'
import { Page } from '@/components/page'
import { API_AUTH } from '@/service/api'
import { ResponseTypeLogin } from '@/service/types'
import { setCookie } from '@/utils/setCookies'
import { LoginPageData, schemaLoginPageData } from '@/utils/validators'
import { zodResolver } from '@hookform/resolvers/zod'

import s from './login-page.module.scss'

export const LoginPage = () => {
  const [isLogined, setIsLogined] = useState(false)
  const { control, handleSubmit } = useForm<LoginPageData>({
    resolver: zodResolver(schemaLoginPageData),
  })

  const signInHandler = handleSubmit((data: LoginPageData) => {
    fetch(API_AUTH, {
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })
      .then(res => {
        return res.json()
      })
      .then((res: ResponseTypeLogin) => {
        setCookie('token', res.data.token, 365)

        setIsLogined(true)
      })
    // .then(() => {
    //   fetch(API_GET_TABLE, {
    //     headers: {
    //       'x-auth': getCookie('token'),
    //     },
    //   }).then(console.log)
    // })
  })

  if (isLogined) {
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
