/* REACT */
import React from 'react'

import {
  HeaderContainer,
  MenuWrapper
} from './style';

import {menu} from '../../assets'

const Header = () => {
  return (
   <HeaderContainer>
     <MenuWrapper>
       <img alt="burger-icon" src={menu}></img>
     </MenuWrapper>
   </HeaderContainer>
  )
}

export default Header
