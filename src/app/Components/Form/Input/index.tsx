

import { ChangeEventHandler, InputHTMLAttributes, useId } from "react";

import * as S from "./Input"

type InputProps = {
  useSerch?: ChangeEventHandler,
  label?: String,
  hasIconLeft?: () => React.ReactNode,
  hasIconRight?: () => React.ReactNode,
} & InputHTMLAttributes<HTMLInputElement>

export function Input({
  label, 
  placeholder, 
  hasIconLeft,
  useSerch, 
  hasIconRight,
  ...rest 
}: InputProps) {

  const id = useId();

  return (
    <div>
      {label && <S.Label htmlFor={id} >{label}</S.Label>}
      <S.InputContainer>
        {hasIconLeft && hasIconLeft()}
        <S.Input id={id} onChange={useSerch} {...rest} placeholder={placeholder} />
        {hasIconRight && hasIconRight()}
      </S.InputContainer>
    </div>
  )
} 