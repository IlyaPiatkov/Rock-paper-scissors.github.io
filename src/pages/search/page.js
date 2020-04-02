import React from "react"
import { connect } from "react-redux"
import { useTranslation } from "react-i18next"

import {
  createRoom,
  searchRoom,
  errorServer
} from "../../redux/reduser/search-reduser"
import {
  getCapacityRoom,
  getUserId,
  getUserName
} from "../../redux/selectors/selectors"

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
import {
  CommonContentTemplate,
  CreateRoomReduxForm,
  Modal
} from "../../features"

const Form = ({ handleCreateRoom, handleSearchRoom, capacityRoom, t }) => {
  return (
    <>
      <CreateRoomReduxForm
        onSubmit={handleCreateRoom}
        initialValues={{ capacityRoom: capacityRoom }}
      />
      <ButtonDefault type="button" onClick={handleSearchRoom}>
        {t("common:search.searchRoom")}
      </ButtonDefault>
    </>
  )
}

const List = ({ userName, userId, t }) => (
  <SearchList>
    <SearchItem>
      <Icon name="user" />
      <Text medium>{userName ? userName : userId}</Text>
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
)

const Search = ({
  isErrorServer,
  isCreatedRoom,
  createRoom,
  searchRoom,
  capacityRoom,
  errorServer,
  userName,
  userId
}) => {
  const [t] = useTranslation(["common"])

  const handleCreateRoom = values => {
    createRoom(values.capacityRoom)
  }

  const handleSearchRoom = () => {
    searchRoom()
  }

  const closeModal = () => {
    errorServer(false)
  }

  return (
    <CommonContentTemplate>
      <MainContent>
        <Title large center>
          {t("common:search.searchGame")}
        </Title>
        <SearchWrap>
          <SearchMaps>
            <SearchProgress />
            <SearchCircle first />
            <SearchCircle second />
            <SearchCircle third />
            <SearchCircle fourth />
          </SearchMaps>

          {isCreatedRoom ? (
            <List userName={userName} userId={userId} t={t} />
          ) : (
            <Form
              handleCreateRoom={handleCreateRoom}
              handleSearchRoom={handleSearchRoom}
              capacityRoom={capacityRoom}
              t={t}
            />
          )}
        </SearchWrap>
        {isErrorServer && (
          <Modal
            title={t("common:modal.errorServerTitle")}
            text={t("common:modal.errorServerText")}
            close={closeModal}
          />
        )}
      </MainContent>
    </CommonContentTemplate>
  )
}

let mapStateToProps = state => {
  return {
    isErrorServer: state.search.isErrorServer,
    isCreatedRoom: state.search.isCreatedRoom,
    capacityRoom: getCapacityRoom(state),
    userId: getUserId(state),
    userName: getUserName(state)
  }
}

let mapDispatchToProps = dispatch => ({
  createRoom: capacity => dispatch(createRoom(capacity)),
  searchRoom: () => dispatch(searchRoom()),
  errorServer: isErrorServer => {
    dispatch(errorServer(isErrorServer))
  }
})

export const SearchPage = connect(mapStateToProps, mapDispatchToProps)(Search)
