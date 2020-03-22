import React from "react"
import { connect } from "react-redux"

import { setUserName } from "../../redux/reduser/profile-reduser"
import { setPlayers } from "../../redux/reduser/rps-reduser"
import { setModeGame } from "../../redux/reduser/option-reduser"

import { RPSOptionsReduxForm, CommonContentTemplate } from "../../features"
import { Title } from "../../ui"
import { getModeGame } from "../../redux/selectors/selectors"
import { getCurrentPlayer } from "../../redux/selectors/rps-selector"

const OptionsRPS = ({
  setUserName,
  name,
  setPlayers,
  setModeGame,
  modeGame,
  currentPlayer
}) => {
  const submit = values => {
    setPlayers(values.numberParticipants, currentPlayer)
    setUserName(values.firstName)
    setModeGame(values.modeGame)
  }

  return (
    <CommonContentTemplate>
      <Title large center>
        Options RPS
      </Title>
      <RPSOptionsReduxForm
        onSubmit={submit}
        userName={name}
        modeGame={modeGame}
      />
    </CommonContentTemplate>
  )
}

let mapStateToProps = state => {
  return {
    name: state.profile.name,
    modeGame: getModeGame(state),
    currentPlayer: getCurrentPlayer(state)
  }
}

let mapDispatchToProps = dispatch => ({
  setUserName: name => {
    dispatch(setUserName(name))
  },
  setPlayers: (players, currentPlayer) =>
    dispatch(setPlayers(players, currentPlayer)),
  setModeGame: modeGame => dispatch(setModeGame(modeGame))
})

export const OptionsPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(OptionsRPS)
