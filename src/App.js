import React from 'react';
import { Route } from 'react-router-dom'

import GlobalStyle from './global-style'

import GameRPS from './pages/rock-paper-scissors';
import OptionsRPSContainer from './pages/rps-options';
import { RegistrContainer } from './pages/registration';
import { LoginContainer } from './pages/login';
import { Rules } from './pages/rps-rules';

import MainMenuContainer from './ui/main-menu/main-menu';
import HeaderContainer from './ui/header/header'
import { MainContainer } from './ui';
import { MainNavContainer, FooterContainer } from './features';

const App = (prors) => {

  return (
      <>
        <GlobalStyle />
        <MainMenuContainer />
        <HeaderContainer />
        <MainContainer>
          <Route exact path='/' render={() => <MainNavContainer />} />
          <Route path='/rock-paper-scissors' render={() => <GameRPS/>} />
          <Route path='/rps-options' render={() => <OptionsRPSContainer/>} />
          <Route path='/login' render={() => <LoginContainer/>} />
          <Route path='/registration' render={() => <RegistrContainer/>} />
          <Route path='/rps-rules' render={() => <Rules/>} />
        </MainContainer>
        <FooterContainer />
      </>
  );
}

export default App;
