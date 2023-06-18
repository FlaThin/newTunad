"use client"

import styled from "styled-components"

export const Button = styled.button`
  display: flex;
  justify-content: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 600;
  width: 100%;
  border-radius: 6px;
  padding: 10px;
  &:focus-within {
    outline: #60A5FA 2px solid;
  }
`;