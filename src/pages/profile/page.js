import React from "react"
import { connect } from "react-redux"
import { useTranslation } from "react-i18next"

import { sendProfileData } from "../../redux/reduser/profile-reduser"

import { getUserName } from "../../redux/selectors/selectors"

import { CommonContentTemplate, ProfileReduxForm } from "../../features"
import { Title, MainContent } from "../../ui"

const Profile = ({ sendProfileData, userName }) => {
  const [t] = useTranslation(["common"])

  const submit = values => {
    sendProfileData({
      username: values.firstName,
      userLastName: values.lastName,
      gender: values.gender
    }) // TODO rename filed to userName
  }

  return (
    <CommonContentTemplate>
      <MainContent>
        <Title large center>
          {t("common:profile.title")}
        </Title>
        <ProfileReduxForm
          onSubmit={submit}
          initialValues={{ firstName: userName }}
        />
      </MainContent>
    </CommonContentTemplate>
  )
}

let mapStateToProps = state => {
  return {
    userName: getUserName(state)
  }
}

let mapDispatchToProps = dispatch => ({
  sendProfileData: userData => {
    dispatch(sendProfileData(userData))
  }
})

export const ProfilePage = connect(mapStateToProps, mapDispatchToProps)(Profile)
