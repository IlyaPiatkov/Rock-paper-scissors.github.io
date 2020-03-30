import React from "react"
import { connect } from "react-redux"
import { useTranslation } from "react-i18next"

import { setUserName } from "../../redux/reduser/profile-reduser"
import { setModeGame, setEnemies } from "../../redux/reduser/option-reduser"

import {
  getModeList,
  getModeGame,
  getEnemies,
  getUserName
} from "../../redux/selectors/selectors"

import { RPSOptionsReduxForm, CommonContentTemplate } from "../../features"
import { Title } from "../../ui"

const OptionsRPS = ({
  setUserName,
  userName,
  setModeGame,
  setEnemies,
  modeList,
  modeGame,
  enemies
}) => {
  const [t] = useTranslation(["common"])

  const submit = values => {
    setUserName(values.firstName)
    setModeGame(values.modeGame)
    setEnemies(values.enemies)
  }

  return (
    <CommonContentTemplate>
      <Title large center>
        {t("common:options.title")}
      </Title>
      <RPSOptionsReduxForm
        onSubmit={submit}
        modeList={modeList}
        initialValues={{ firstName: userName, enemies, modeGame }}
      />
    </CommonContentTemplate>
  )
}

let mapStateToProps = state => {
  return {
    userName: getUserName(state),
    modeList: getModeList(state),
    modeGame: getModeGame(state),
    enemies: getEnemies(state)
  }
}

let mapDispatchToProps = dispatch => ({
  setUserName: userName => {
    dispatch(setUserName(userName))
  },
  setModeGame: modeGame => dispatch(setModeGame(modeGame)),
  setEnemies: enemies => dispatch(setEnemies(enemies))
})

export const OptionsPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(OptionsRPS)
