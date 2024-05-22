import { Control } from 'react-hook-form'

import { Button } from '@/components/button'
import { ControlledTextField } from '@/components/controlled-textField'
import { password, username } from '@/components/loginForm/lib/constans'

import s from './loginForm.module.scss'

export const LoginForm = ({ control, signInHandler }: Props) => {
  return (
    <form className={s.form} onSubmit={signInHandler}>
      <h1 className={s.title}>Sign In</h1>

      <ControlledTextField classNameWrapper={s.textField} control={control} {...username} />
      <ControlledTextField classNameWrapper={s.textField} control={control} {...password} />
      <Button className={s.button} fullWidth>
        Login
      </Button>
    </form>
  )
}
type Props = {
  control: Control<{ password: string; username: string }>
  signInHandler: () => void
}
