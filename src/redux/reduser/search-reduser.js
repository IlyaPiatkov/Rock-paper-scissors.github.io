import { createSlice } from "@reduxjs/toolkit"
import { stopSubmit } from "redux-form"

import { roomAPI } from "../../api/api"

const searchGame = createSlice({
  name: "searchGame",
  initialState: {
    idRoom: null,
    capacity: "3",
    isCreatedRoom: false
  },
  reducers: {
    setInfoRoom: (state, action) => ({
      ...state,
      idRoom: action.payload.idRoom,
      capacity: action.payload.capacity.toString(),
      isCreatedRoom: action.payload.isCreatedRoom
    }),
    errorServer: (state, action) => ({
      ...state,
      isErrorServer: action.payload
    })
  }
})

const { actions, reducer } = searchGame

export const { setInfoRoom, errorServer } = actions
export const searchReducer = reducer

// Thunk
export const createRoom = capacity => async (dispatch, getState) => {
  try {
    const authToken = getState().auth.access
    const response = await roomAPI.create(capacity, authToken)

    if (response.data.resultCode === 0) {
      const userId = getState().profile.userId
      const { id, capacity } = response.data.data
      dispatch(setInfoRoom({ idRoom: id, capacity, isCreatedRoom: true }))
      console.log(response)
      console.log("userId", userId)
      let socket = new WebSocket(`ws://tornadogame.club:8080/${id}/${userId}`)
      socket.onopen = () => {
        console.log("socket open")
      }
      console.log("socket", socket)
    } else {
      let messages =
        response.data.messages.length > 0
          ? response.data.messages[0]
          : "Common errors"
      dispatch(stopSubmit("createRoom", { _error: messages }))
    }
  } catch (error) {
    dispatch(errorServer(true))
    console.warn(error)
  }
}

export const searchRoom = () => async dispatch => {
  try {
    const response = await roomAPI.search()

    if (response.data.resultCode === 0) {
      // const { id, capacity } = response.data.data
      console.log("response", response)
    } else {
      dispatch(errorServer(true))
      console.log("error search")
    }
  } catch (error) {
    dispatch(errorServer(true))
    console.warn(error)
  }
}
