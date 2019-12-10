import React from 'react'

import {
  ButtonWrapper,
  ButtonIcon,
  ButtonLabel,
} from './style';

const Button = (props) => {
const {icon, label} = props
  return (
    <ButtonWrapper>
      <ButtonIcon
        src={icon}
      >
      </ButtonIcon>
      <ButtonLabel>
        {label}
      </ButtonLabel>
    </ButtonWrapper>
  )
}

export default Button
