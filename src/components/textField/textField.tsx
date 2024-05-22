import { DetailedHTMLProps, ElementRef, InputHTMLAttributes, JSX, forwardRef, memo } from 'react'

import { clsx } from 'clsx'

import s from './textField.module.scss'

export interface TextFieldProps
  extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  classNameWrapper?: string
  errorMessage?: string
  label?: string
  withBorder?: boolean
}

export const TextField = memo(
  forwardRef<ElementRef<'input'>, TextFieldProps>(
    (
      { className, classNameWrapper, disabled, errorMessage, label, withBorder, ...rest },
      ref
    ): JSX.Element => {
      return (
        <div
          className={clsx(
            s.wrapper,
            withBorder && s.withBorder,
            disabled && s.disabled,
            errorMessage && s.error,
            classNameWrapper
          )}
        >
          {label && <label className={clsx(s.label, disabled && s.disabled)}>{label}</label>}
          <input className={clsx(s.input, className)} disabled={disabled} {...rest} ref={ref} />
          {errorMessage && <span className={s.errorMessage}>{errorMessage}</span>}
        </div>
      )
    }
  )
)
