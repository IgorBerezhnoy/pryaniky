import { RouteObject } from 'react-router-dom'

import { LoginPageContainer } from '@/pages/login-page/login-page-container'
import { urlPaths } from '@/router/urlPaths'

export const publicRouters: RouteObject[] = [
  {
    element: <LoginPageContainer />,
    path: urlPaths.login,
  },
  {
    element: <h1>error</h1>,
    path: urlPaths.error,
  },
]
