import { useForm } from 'react-hook-form'

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
    debugger
    console.log(data)
  })

  return (
    <Page>
      <Card className={s.wrapper}>
        <form className={s.form} onSubmit={signInHandler}>
          <h1>Sign In</h1>

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
          <button>Login</button>
        </form>
      </Card>
    </Page>
  )
}
