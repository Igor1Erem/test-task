import styled from "styled-components";

export const MnemonicBlockContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: white;
  border-radius: 15px;
  margin-bottom: 30px;
`;

export const MnemonicTitle = styled.h3`
  color: #8f95a2;
  padding: 20px 0;
  margin: 0;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  @media (max-width: 375px) {
    /* padding: 8px 0; */
    font-size: 14px;
  }
`;

export const MnemonicContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 95%;
  margin: 0 20px;
  @media (max-width: 375px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const MnemonicText = styled.p`
  color: black;
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  @media (max-width: 375px) {
    font-size: 12px;
  }
`;

export const MnemonicButton = styled.button`
  width: 85px;
  height: 35px;
  border-radius: 25px;
  text-align: center;
  background-color: #d0f5f7;
  border-radius: 16px;
  color: #16cdd6;
  border: 0;
  text-transform: uppercase;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  @media (max-width: 375px) {
    width: 45px;
    height: 15px;
  }
`;

export const TitleContainer = styled.div`
  border-bottom: 0.5px solid gray;
  width: 95%;
  margin: 0 auto;
`;
