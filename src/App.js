import React from 'react';
import { Route } from 'react-router-dom'

import GlobalStyle from './global-style'
import MainMenuContainer from './ui/main-menu/main-menu';
import HeaderContainer from './ui/header/header'
import MainContent from './ui/main-content/main-content';
import GameRPS from './pages/rock-paper-scissors';
import { MainNav } from './ui';

const App = (prors) => {

  return (
      <>
        <GlobalStyle />
        <MainMenuContainer />
        <HeaderContainer />
        <MainContent>
          <Route exact path='/' render={() => <MainNav />} />
          <Route path='/rock-paper-scissors' render={() => <GameRPS/>} />
        </MainContent>
      </>
  );
}

export default App;
