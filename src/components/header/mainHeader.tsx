import { Logo } from '@/assets/image/logo'
import { Header } from '@/components/header/header'
import { Liner } from '@/components/liner'
import { clsx } from 'clsx'

import s from './header.module.scss'

type Props = {
  isAuth?: boolean
  isLoading?: boolean
  name?: string
}

export const MainHeader = ({ isLoading }: Props) => {
  return (
    <Header className={clsx(s.header)}>
      <div className={s.wrapper}>
        <div className={s.logo}>
          {/*<Link to={urlPaths.root}>*/}
          <Logo />
          {/*</Link>*/}
        </div>
      </div>
      {isLoading && <Liner className={s.liner} />}
    </Header>
  )
}
