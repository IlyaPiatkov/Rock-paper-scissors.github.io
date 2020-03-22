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
  SearchInfo,
  Icon,
  Text,
  ButtonDefault
} from "../../ui"
import { CommonContentTemplate } from "../../features"

const Search = () => {
  return (
    <CommonContentTemplate>
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
              <Text medium>name</Text>
              <SearchInfo>
                <ButtonDefault type="button">Ready</ButtonDefault>
              </SearchInfo>
            </SearchItem>
            <SearchItem>
              <Icon name="user" />
              <Text medium>name</Text>
              <SearchInfo>
                <Text medium>Ready</Text>
              </SearchInfo>
            </SearchItem>
          </SearchList>
        </SearchWrap>
      </MainContent>
    </CommonContentTemplate>
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

export const SearchPage = connect(mapStateToProps, mapDispatchToProps)(Search)
