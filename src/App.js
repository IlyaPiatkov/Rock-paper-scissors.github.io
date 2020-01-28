import React from 'react';
import { Route } from 'react-router-dom'

import GlobalStyle from './global-style'
import MainMenuContainer from './ui/main-menu/main-menu';
import HeaderContainer from './ui/header/header'
import MainContent from './ui/main-content/main-content';
import GameRPS from './pages/rock-paper-scissors';

const App = (prors) => {

  return (
      <>
        <GlobalStyle />
        <MainMenuContainer />
        <HeaderContainer />
        <MainContent>
          {/* <Route path='/' render={() => <GameRPS stateRPS={prors.state.rps}dispatch={prors.dispatch}/>} /> */}
        </MainContent>
      </>
  );
}

export default App;
