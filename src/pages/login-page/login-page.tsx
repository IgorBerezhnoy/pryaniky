import { useForm } from 'react-hook-form'

import { Button } from '@/components/button'
import { Card } from '@/components/card'
import { ControlledTextField } from '@/components/controlled-textField'
import { Page } from '@/components/page'
import { LoginPageData, schemaLoginPageData } from '@/utils/validators'
import { zodResolver } from '@hookform/resolvers/zod'

import s from './login-page.module.scss'

export const LoginPage = () => {
  const { control, handleSubmit } = useForm<LoginPageData>({
    resolver: zodResolver(schemaLoginPageData),
  })
  const signInHandler = handleSubmit((data: LoginPageData) => {
    console.log(data)
  })

  return (
    <Page>
      <Card className={s.wrapper}>
        <form className={s.form} onSubmit={signInHandler}>
          <h1 className={s.title}>Sign In</h1>

          <ControlledTextField
            classNameWrapper={s.textField}
            control={control}
            label={'Login'}
            name={'login'}
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
