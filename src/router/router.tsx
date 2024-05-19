import {
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'

import { MainHeaderContainer } from '@/components/header/mainHeaderContainer'
import { setAuth } from '@/features/auth/authSlice'
import { useAppDispatch } from '@/hooks/use-appDispatch'
import { LoginPageContainer } from '@/pages/login-page/login-page-container'
import { MainPageContainer } from '@/pages/main-page/main-page-container'
import { urlPaths } from '@/router/urlPaths'
import { getCookie } from '@/utils'

const publicRouters: RouteObject[] = [
  {
    element: <LoginPageContainer />,
    path: urlPaths.login,
  },
  {
    element: <h1>error</h1>,
    path: urlPaths.error,
  },
]
const privateRoutes: RouteObject[] = [
  {
    element: <MainPageContainer />,
    path: urlPaths.root,
  },
]

const router = createBrowserRouter([
  {
    children: [
      ...publicRouters,
      {
        children: privateRoutes,
        element: <PrivateAppRoutes />,
      },
    ],
    element: <Layout />,
  },
])

export const AppRouter = () => {
  return <RouterProvider router={router} />
}

function Layout() {
  return (
    <>
      <MainHeaderContainer />
      <Outlet />
    </>
  )
}

function PrivateAppRoutes() {
  const isAuthenticated = !!getCookie('token')
  const dispatch = useAppDispatch()

  dispatch(setAuth(isAuthenticated))

  return isAuthenticated ? <Outlet /> : <Navigate to={urlPaths.login} />
}
