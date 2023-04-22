import { PropsWithChildren } from 'react';

export type FormFieldProps = PropsWithChildren & {
  name: string;
  label?: string;
  helpText?: string;
  error?: string;
  maxWidth?: string;
}

export function FormField({ name, label, helpText, error, maxWidth, children }: FormFieldProps) {
  return (
    <div className="flex flex-column gap-2" style={{maxWidth}}>
      <label htmlFor={name}>{label}</label>
      {children}
      {
        helpText ? (
          <small id={`${name}-help`}>
            {helpText}
          </small>
        ) : null
      }
      {
        error ? (
        <small id={`${name}-error`} className="p-error">
          {error}
        </small>
        ) : null
      }
    </div>
  )
}
