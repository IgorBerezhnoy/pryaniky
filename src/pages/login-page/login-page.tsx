import { memo } from 'react'

import { Card } from '@/components/card'
import { LoginFormContainer } from '@/components/loginForm/loginFormContainer'
import { Page } from '@/components/page'

import s from './login-page.module.scss'

export const LoginPage = memo(() => {
  return (
    <Page>
      <Card className={s.wrapper}>
        <LoginFormContainer />
      </Card>
    </Page>
  )
})
