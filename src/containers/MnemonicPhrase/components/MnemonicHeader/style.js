import styled from 'styled-components';

export const MnemonicHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  color: white;
  margin-bottom: 40px;
`;
  
export const MnemonicTitle = styled.h1`
  margin: 0 0 10px 0;
  text-decoration: none;
  @media (max-width: 375px) {
    font-size: 18px;
  }
`;

export const MnemonicText = styled.p`
text-decoration: none;
margin: 0;
@media (max-width: 375px) {
  font-size: 14px;
}
`;
