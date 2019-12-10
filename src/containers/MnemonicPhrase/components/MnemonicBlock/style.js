import styled from 'styled-components';

export const MnemonicBlockContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: white;
  border-radius: 15px;
  height: 130px;
  margin-bottom: 30px;
`;

export const MnemonicTitle = styled.h3`
  color: gray;
  padding: 20px 0;
  margin: 0;
  @media (max-width: 375px) {
    padding: 8px 0;
    font-size: 14px;
  }
`;

export const MnemonicContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 95%;
  margin: 0 auto;
  @media (max-width: 375px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;


export const MnemonicText = styled.p`
  color: black;
  @media (max-width: 375px) {
    font-size: 12px;
  }
`;

export const MnemonicButton = styled.button`
  width: 85px;
  height: 35px;
  border-radius: 25px;
  text-align: center;
  background-color: #b8dcfb;
  color: 1159cc;
  border: 0;
  @media (max-width: 375px) {
    width: 45px;
    height: 15px;
  }
`

export const TitleContainer = styled.div`
  border-bottom: 0.5px solid gray;
  width: 95%;
  margin: 0 auto;
`
