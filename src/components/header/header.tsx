import { Logo } from '@/assets/image/logo'
import { AppBar, Button, Toolbar } from '@mui/material'

import s from './header.module.scss'

export const Header = () => {
  return (
    <AppBar className={s.appBar} color={'default'} position={'static'}>
      <Toolbar className={s.tolBar}>
        <Logo className={s.logo} />
        <Button color={'inherit'} variant={'outlined'}>
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  )
}
