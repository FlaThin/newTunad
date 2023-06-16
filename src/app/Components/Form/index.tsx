import { FormHTMLAttributes } from "react"


type FormProps = {
  minWidth?: string
} & FormHTMLAttributes<HTMLFormElement>

export function Form({ children, className}: FormProps) {
  return (
    <form 
      className={className}
      action=""
    >
      {children}
    </form>
  )
}