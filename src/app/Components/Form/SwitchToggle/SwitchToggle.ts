"use client"

import styled from "styled-components";

export const SwitchToggle = styled.label`
  position: relative;
  cursor: pointer;
`

export const Switch = styled.div`
  position: relative;
  width: 40px;
  height: 20px;
  border-radius: 36px;
  border-color: #E5E5E5;
  border-width: 0.5px;
  border-style: solid;
  background-color: #F2F2F2;
  transition: all 0.5s ease-out;

  &:before {
    position: absolute;
    transition: all 0.5s ease-out;
    content: "";
    width: 16px;
    height: 16px;
    left: 2px;
    top: 50%;
    transform: translate(0, -50%);
    border-radius: 100%;
    background-color: white;
    box-shadow: 1px 1px 2px -1px #3333334D;
  }
`

export const Input = styled.input`
  display: none;

  &:checked + ${Switch} {
    background-color: #2563EB;
    border-color: #2563EB;
    &:before {
      transform: translate(19px, -50%);
    }
  }

`