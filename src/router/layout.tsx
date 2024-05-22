import { Outlet } from 'react-router-dom'

import { MainHeaderContainer } from '@/components/header/mainHeaderContainer'

export function Layout() {
  return (
    <>
      <MainHeaderContainer />
      <Outlet />
    </>
  )
}
