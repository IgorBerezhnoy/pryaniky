import { Button, Stack, TextField } from '@mui/material'

import s from './login-page.module.scss'

import { Card } from '../../components/card'

const LoginPage = () => {
  return (
    <Card className={s.wrapper}>
      <h1>Sign In</h1>
      <Stack
        autoComplete={'off'}
        component={'form'}
        noValidate
        spacing={6}
        sx={{
          '& .MuiTextField-root': { mt: 2, width: '100%' },
        }}
      >
        <TextField
          className={s.textField}
          label={'Email'}
          margin={'normal'}
          placeholder={'Email'}
          type={'email'}
          variant={'standard'}
        />
        <TextField
          className={s.textField}
          label={'Password'}
          margin={'normal'}
          placeholder={'Password'}
          type={'password'}
          variant={'standard'}
        />
        <Button variant={'outlined'}>Login</Button>
      </Stack>
    </Card>
  )
}

export default LoginPage
