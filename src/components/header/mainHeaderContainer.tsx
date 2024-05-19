import { MainHeader } from '@/components/header/mainHeader'
import { deleteCookie, getCookie } from '@/utils'

export const MainHeaderContainer = () => {
  const isAuth = !!getCookie('token')
  const logOutHandler = () => {
    deleteCookie('token')
  }

  return <MainHeader isAuth={isAuth} logOutHandler={logOutHandler} />
}
