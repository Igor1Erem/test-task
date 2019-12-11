import styled from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  align-items: center;
  background-color: #6898ac;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(#b6e9f5, #9198e5);
  width: 75%;
  align-items: center;
  min-height: 100vh;
  overflow: hidden;
`;

export const HeaderContainer = styled.div`
  display: flex;
  width: 85%;
`;

export const MainContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 0 50px 0 40px;
  box-sizing: border-box;

  @media (max-width: 375px) {
    padding: 0 20px;
  }
`;
