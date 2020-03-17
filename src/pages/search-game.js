import React from "react"
import { connect } from "react-redux"

import {
  MainContent,
  Title,
  SearchWrap,
  SearchMaps,
  SearchProgress,
  SearchCircle,
  SearchList,
  SearchItem,
  Icon,
  Text
} from "../ui"

const SearchGame = () => {
  return (
    <MainContent>
      <Title large center>
        Search Game
      </Title>
      <SearchWrap>
        <SearchMaps>
          <SearchProgress />
          <SearchCircle first />
          <SearchCircle second />
          <SearchCircle third />
          <SearchCircle fourth />
        </SearchMaps>
        <SearchList>
          <SearchItem>
            <Icon name="user" />
            <Text>name</Text>
            <button>ready</button>
          </SearchItem>
          <SearchItem>
            <Icon name="user" />
            <Text>name</Text>
            <button>ready</button>
          </SearchItem>
        </SearchList>
      </SearchWrap>
    </MainContent>
  )
}

let mapStateToProps = state => {
  return {
    // userName: state.profile.name,
    // isLoading: state.game.isLoading,
    // ModeGameList: getModeGameList(state),
    // currentChoice: getCurrentChoice(state),
    // winnerText: getWinnerText(state),
    // enemyPlayers: getEnemyPlayers(state),
    // currentPlayer: getCurrentPlayer(state),
    // playersInfo: getPlayersInfo(state)
  }
}

let mapDispatchToProps = dispatch => ({
  // setResultGame: (choiceUser, ModeGameList, currentPlayer, enemyPlayers) =>
  //   dispatch(
  //     setResultGame(choiceUser, ModeGameList, currentPlayer, enemyPlayers)
  //   )
})

export const SearchGameContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchGame)
