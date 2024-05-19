import { ComponentPropsWithoutRef, ElementRef, FC, forwardRef } from 'react'

import { clsx } from 'clsx'

import s from './table.module.scss'

export const Table = forwardRef<HTMLTableElement, ComponentPropsWithoutRef<'table'>>(
  ({ className, ...rest }, ref) => {
    const classNames = {
      table: clsx(className, s.table),
    }

    return <table className={classNames.table} {...rest} ref={ref} />
  }
)
export const TableHead = forwardRef<ElementRef<'thead'>, ComponentPropsWithoutRef<'thead'>>(
  ({ ...rest }, ref) => {
    return <thead {...rest} ref={ref} />
  }
)

export const TableBody = forwardRef<ElementRef<'tbody'>, ComponentPropsWithoutRef<'tbody'>>(
  ({ ...rest }, ref) => {
    return <tbody {...rest} ref={ref} />
  }
)

export const TableRow = forwardRef<ElementRef<'tr'>, ComponentPropsWithoutRef<'tr'>>(
  ({ ...rest }, ref) => {
    return <tr {...rest} ref={ref} />
  }
)

export const TableHeadCell = forwardRef<ElementRef<'th'>, ComponentPropsWithoutRef<'th'>>(
  ({ children, className, ...rest }, ref) => {
    const classNames = {
      headCell: clsx(className, s.headCell),
    }

    return (
      <th className={classNames.headCell} {...rest} ref={ref}>
        <span>{children}</span>
      </th>
    )
  }
)
export const TableCell = forwardRef<ElementRef<'td'>, ComponentPropsWithoutRef<'td'>>(
  ({ className, ...rest }, ref) => {
    const classNames = {
      cell: clsx(className, s.tableCell),
    }

    return <td className={classNames.cell} {...rest} ref={ref} />
  }
)

export const TableHeader: FC<THProps> = ({ columns, ...restProps }) => {
  return (
    <TableHead {...restProps}>
      <TableRow>
        {columns.map(({ key, title }) => (
          <TableHeadCell key={key}>{title}</TableHeadCell>
        ))}
      </TableRow>
    </TableHead>
  )
}
export type Column = {
  key: string
  title: string
}

type THProps = Omit<
  {
    columns: Column[]
  } & ComponentPropsWithoutRef<'thead'>,
  'children'
>
