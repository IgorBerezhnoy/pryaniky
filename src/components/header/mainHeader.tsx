import { memo } from 'react'
import { Link } from 'react-router-dom'

import { Logo } from '@/assets/image/logo'
import { Button } from '@/components/button'
import { Header } from '@/components/header/header'
import { Liner } from '@/components/liner'
import { urlPaths } from '@/router/urlPaths'
import { clsx } from 'clsx'

import s from './header.module.scss'

type Props = {
  isAuth?: boolean
  isLoading?: boolean
  logOutHandler?: () => void
}

export const MainHeader = memo(({ isAuth, isLoading, logOutHandler }: Props) => {
  return (
    <Header className={clsx(s.header)}>
      <div className={s.wrapper}>
        <div className={s.logo}>
          <Link to={urlPaths.root}>
            <Logo />
          </Link>
        </div>
        {isAuth && <Button onClick={logOutHandler}>LogOut</Button>}
      </div>
      {isLoading && <Liner className={s.liner} />}
    </Header>
  )
})
