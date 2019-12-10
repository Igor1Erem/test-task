import React from 'react';

import {
  AppContainer,
  HeaderContainer,
  MainContainer,
  ContentContainer
} from './style';

import { MnemonicPhrase, Header, Navbar } from './containers/index'

function App() {
  return (
    <AppContainer>
      <ContentContainer>
        <HeaderContainer>
          <Header />
        </HeaderContainer>
        <MainContainer>
          <Navbar />
          <MnemonicPhrase />
        </MainContainer>
      </ContentContainer>
    </AppContainer>
  );
}

export default App;
