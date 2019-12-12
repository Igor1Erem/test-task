import styled from "styled-components";

export const ButtonWrapper = styled.button`
  display: flex;
  background-color: white;
  margin-right: 15px;
  border: none;
  border-radius: 20px;
  align-items: center;
  text-align: center;
  background-color: #6898ac;
  padding: 8px 35px;
  @media (max-width: 375px) {
    /* padding: 0 15px; */
    margin-right: 10px;
  }
`;

export const ButtonIcon = styled.img`
  opacity: 0.6;
`;

export const ButtonLabel = styled.p`
  color: white;
  margin: 0 0 0 5px;
`;
