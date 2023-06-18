import { ButtonHTMLAttributes } from "react";

import * as S from "./Button"

type ButtonProps = {

} & ButtonHTMLAttributes<HTMLButtonElement>

export function Button({children, onClick, ...rest}: ButtonProps) {
  return (
    <S.Button onClick={onClick} {...rest}>
      {children}
    </S.Button>
  )
}