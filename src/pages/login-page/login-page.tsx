import { memo } from 'react'

import { Card } from '@/components/card'
import { LoginForm } from '@/components/loginForm/loginForm'
import { Page } from '@/components/page'

import s from './login-page.module.scss'

export const LoginPage = memo(() => {
  return (
    <Page>
      <Card className={s.wrapper}>
        <LoginForm />
      </Card>
    </Page>
  )
})
