import React from 'react'

import {
  InformationContainer,
  TableContent,
  TitleRow,
  TableTitle,
  TableItem,
  TableRow,
  TitleItem,
} from './style';

const InformationSection = (props) => {
  const {addressData} = props
  return (
    <InformationContainer>
      <TableTitle>
        <TitleItem>Address</TitleItem>
        <TitleItem>Private Key</TitleItem>
      </TableTitle>
      <TableContent>
        {addressData.map((item, index) => {
          const isLast = addressData.length === index + 1 ? true : false;
          return(
            <TableRow key={index} isLast={isLast}>
              <TableItem>
                <TitleRow>
                  Address
                </TitleRow>
                {item[0]}
              </TableItem>
              <TableItem>
                <TitleRow>
                  Private Key
                </TitleRow>
                {item[1]}
              </TableItem>
            </TableRow>
          )
        }
        )}
      </TableContent>
    </InformationContainer>
  )
}

export default InformationSection
