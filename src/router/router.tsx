import { Navigate, Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'

import { setAuth } from '@/features/auth/authSlice'
import { useAppDispatch } from '@/hooks/use-appDispatch'
import { Layout } from '@/router/layout'
import { privateRoutes } from '@/router/privateRoutes'
import { publicRouters } from '@/router/publicRouters'
import { urlPaths } from '@/router/urlPaths'
import { getCookie } from '@/utils'

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

function PrivateAppRoutes() {
  const isAuthenticated = !!getCookie('token')
  const dispatch = useAppDispatch()

  dispatch(setAuth(isAuthenticated))

  return isAuthenticated ? <Outlet /> : <Navigate to={urlPaths.login} />
}
