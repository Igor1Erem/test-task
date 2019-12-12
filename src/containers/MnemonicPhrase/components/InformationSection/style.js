import styled from "styled-components";

export const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: white;
  color: gray;
  border-radius: 16px;
`;

export const TableTitle = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #f3f3f3;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  color: #232d42;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 15px;
  padding-right: 10px;
  @media (max-width: 375px) {
    display: none;
  }
`;

export const TitleItem = styled.div`
  padding-left: 10px;
  flex: 1;
  flex-basis: 50%;
  @media (max-width: 375px) {
    display: none;
  }
`;

export const TableContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  color: #8f95a2;
  @media (max-width: 375px) {
    width: 80%;
  }
`;

export const TableRow = styled.div`
  min-height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0 15px 15px;
  border-bottom: ${props => (props.isLast ? "none" : "1px solid #f3f3f3")};
  @media (max-width: 375px) {
    flex-flow: column;
  }
`;

export const TitleRow = styled.div`
  display: none;
  @media (max-width: 375px) {
    display: block;
    flex: 1;
    flex-basis: 50%;
    color: black;
  }
`;

export const TableItem = styled.div`
  padding-left: 10px;
  flex: 1;
  flex-basis: 50%;
  @media (max-width: 375px) {
    flex-flow: column;
    word-wrap: break-word;
  }
`;
