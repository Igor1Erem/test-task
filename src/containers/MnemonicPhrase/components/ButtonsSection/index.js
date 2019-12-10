import React from 'react'

import {
  ButtonsContainer,
} from './style';

import {Button} from '../../../../components/index'
import { buttonsData } from '../../../../utils/mock'

const ButtonsSection = () => {
  return (
    <ButtonsContainer>
      {buttonsData.map((item, index)=>(
        <Button key={index} icon={item[0]} label={item[1]}/>
      ))}
    </ButtonsContainer>
  )
}

export default ButtonsSection
