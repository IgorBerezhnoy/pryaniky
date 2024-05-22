import { RouteObject } from 'react-router-dom'

import { NotFound } from '@/pages/404-page'
import { LoginPageContainer } from '@/pages/login-page/login-page-container'
import { urlPaths } from '@/router/urlPaths'

export const publicRouters: RouteObject[] = [
  {
    element: <LoginPageContainer />,
    path: urlPaths.login,
  },
  {
    element: <NotFound />,
    path: urlPaths.error,
  },
]
