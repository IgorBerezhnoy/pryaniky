import { ComponentPropsWithoutRef, forwardRef, memo } from 'react'

import { clsx } from 'clsx'

import s from './page.module.scss'

export type PageProps = ComponentPropsWithoutRef<'div'>

export const Page = memo(
  forwardRef<HTMLDivElement, PageProps>(({ className, ...props }, ref) => {
    const classNames = {
      root: clsx(s.root, className),
    }

    return <div {...props} className={classNames.root} ref={ref} />
  })
)
