import {
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'

import LoginPage from '@/pages/login-page/login-page'

const publicRouters: RouteObject[] = [
  {
    element: <LoginPage />,
    path: '/login',
  },
  {
    element: <h1>sing-up</h1>,
    path: '/sing-up',
  },
  {
    element: <h1>error</h1>,
    path: '*',
  },
]
const privateRoutes: RouteObject[] = [
  {
    element: <h1>Main page</h1>,
    path: '/',
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
      <h4>Header</h4>
      <Outlet />
    </>
  )
}

function PrivateAppRoutes() {
  const isAuthenticated = true
  //TODO написать логику

  return isAuthenticated ? <Outlet /> : <Navigate to={'/login'} />
}
