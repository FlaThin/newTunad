import { InputHTMLAttributes, useId } from "react"

import * as S from "./SwitchToggle"

type SwitchToggleProps = {
  
} & InputHTMLAttributes<HTMLInputElement>

export function SwitchToggle({checked, onChange, ...rest}: SwitchToggleProps) {

  const id = useId()
  return (
    <S.SwitchToggle>
      <S.Input type="checkbox" checked={checked} onChange={onChange} {...rest}/>
      <S.Switch/>
    </S.SwitchToggle>
  )
}