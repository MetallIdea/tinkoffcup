import { PropsWithChildren } from 'react';

export type FormFieldProps = PropsWithChildren & {
  name: string;
  label?: string;
  helpText?: string;
}

export function FormField({ name, label, helpText, children }: FormFieldProps) {
  return (
    <div className="flex flex-column gap-2">
      <label htmlFor={name}>{label}</label>
      {children}
      {
        helpText ? (
          <small id={`${name}-help`}>
            {helpText}
          </small>
        ) : null
      }
    </div>
  )
}
