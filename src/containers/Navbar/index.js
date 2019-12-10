import React from 'react'

import {
  NavbarContainer,
  NavbarItem,
  NavbarLink,
  NavbarDivider,
  ItemText
} from './style';

import { navbarData, navbarStuffData } from '../../utils/mock'

const Navbar = () => {
  return (
    <NavbarContainer>
      {navbarData.map((item, index)=>(
        <NavbarItem key={index}>
          <NavbarLink href="#">
            <img alt="navLink-icon" src={item[0]}></img>
            <ItemText>{item[1]}</ItemText>
          </NavbarLink>
        </NavbarItem>
      ))}
      <NavbarDivider/>
        {navbarStuffData.map((item, index)=>(
          <NavbarItem key={index}>
            <NavbarLink href="#">
              <img alt="navLink-icon" src={item[0]}></img>
              <ItemText>{item[1]}</ItemText>
            </NavbarLink>
          </NavbarItem>
       ))}
    </NavbarContainer>
  )
}

export default Navbar
