import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  padding: 35px 0;
  flex-direction: row;
`;

export const MenuWrapper = styled.button`
  width: 24px;
  height: 24px;
  background-color: transparent;
  border: none;
  outline: none;
  padding: 0;
  display: none;
  @media (max-width: 375px) {
    display: block;
    cursor: pointer;
  }
`;
