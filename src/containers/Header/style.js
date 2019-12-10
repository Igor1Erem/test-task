import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const MenuWrapper = styled.button`
  display: none;
  @media (max-width: 375px) {
    display: block;
    cursor: pointer;
  }
`;

