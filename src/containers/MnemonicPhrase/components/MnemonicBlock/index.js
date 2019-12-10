import React from 'react'

import {
  MnemonicBlockContainer,
  MnemonicTitle,
  MnemonicContent,
  MnemonicText,
  MnemonicButton,
  TitleContainer
} from './style';

const MnemonicBlock = () => {
  return (
    <MnemonicBlockContainer>
      <TitleContainer>
        <MnemonicTitle>Mnemonic Phrase</MnemonicTitle>
      </TitleContainer>
      <MnemonicContent>
        <MnemonicText>
          Better join pond company palace sing forward egg joy cabin apart future
        </MnemonicText>
        <MnemonicButton>
          COPY
        </MnemonicButton>
      </MnemonicContent>
    </MnemonicBlockContainer>
  )
}

export default MnemonicBlock
