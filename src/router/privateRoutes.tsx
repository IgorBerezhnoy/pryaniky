import { RouteObject } from 'react-router-dom'

import { MainPageContainer } from '@/pages/main-page/main-page-container'
import { urlPaths } from '@/router/urlPaths'

export const privateRoutes: RouteObject[] = [
  {
    element: <MainPageContainer />,
    path: urlPaths.root,
  },
]
