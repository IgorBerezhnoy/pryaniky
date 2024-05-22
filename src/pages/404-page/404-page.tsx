import { memo } from 'react'
import { Link } from 'react-router-dom'

import { Card } from '@/components/card'
import { Page } from '@/components/page'

import s from './404-page.module.scss'

export const NotFound = memo(() => {
  return (
    <Page>
      <Card className={s.wrapper}>
        <div>
          <h1>Page not found</h1>
          <p>
            You can{' '}
            <Link className={s.link} to={'/'}>
              go back
            </Link>
          </p>
        </div>
      </Card>
    </Page>
  )
})
