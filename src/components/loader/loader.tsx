import { memo } from 'react'

import s from './loader.module.scss'

export const Loader = memo(() => {
  return <span className={s.loader}></span>
})
