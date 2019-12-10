import React from 'react'

import {
  MnemonicPhraseContainer,
} from './style';

import { ButtonsSection, InformationSection, MnemonicBlock, MnemonicHeader } from './components'
import { addressData } from '../../utils/mock'

const MnemonicPhrase = () => {
  return (
   <MnemonicPhraseContainer>
     <MnemonicHeader />
     <MnemonicBlock />
     <ButtonsSection />
     <InformationSection addressData = {addressData}/>
   </MnemonicPhraseContainer>
  )
}

export default MnemonicPhrase
