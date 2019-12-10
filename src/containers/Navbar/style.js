import styled from 'styled-components';

export const NavbarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  @media (max-width: 375px) {
    display: none;
  }
`;

export const NavbarItem = styled.nav`
  display: flex;
`;

export const NavbarLink = styled.a`
  display: flex;
  text-decoration: none;
`;

export const NavbarDivider = styled.div`
  background: linear-gradient(to right, #9198e5, #b6e9f5);
  height: 1px;
  width: 85%;
  margin-bottom: 10px;
`;

export const ItemText = styled.p`
  margin-left: 10px;
  color: white;
`;
