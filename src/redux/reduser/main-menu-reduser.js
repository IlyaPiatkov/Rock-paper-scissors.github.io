const OPEN_MENU = 'OPEN-MENU'

let initialState = {
  isOpenMenu: false,
}

const mainMenuReduser = (state = initialState, action) => {
  switch(action.type) {
    case OPEN_MENU:
      let stateCopy = { ...state }
      if (stateCopy.isOpenMenu) {
        stateCopy.isOpenMenu = false
      } else {
        stateCopy.isOpenMenu = true
      }
      return stateCopy

    default:
      return state
  }
}

export const openMenu = () => ({type: OPEN_MENU})

export default mainMenuReduser