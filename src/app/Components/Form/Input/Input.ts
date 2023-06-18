"use client"

import styled from "styled-components"

export const Input = styled.input`
  font-size: 14px;  
  background-color: transparent;
  outline: none;  
`;

export const InputContainer = styled.label`
  display: flex;
  gap: 0.5rem;
  align-items: center ;
  background-color: #F2F2F2;
  padding: 12px 16px ;
  font-size: 14px;
  border-radius: 6px;
  border-width: 2px;
  border-style: solid;
  border-color: transparent;
  &:focus-within {
    border-color: #60A5FA;
  }

  svg { 
    color: #ccc;
    width: 16px;
    height: 16px;
  }
`;

export const Label = styled.label`
  padding: 0 16px;
  font-size: 12px;
  margin-bottom: 4px;
  font-weight: 500;
`;


