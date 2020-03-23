import { useEffect } from "react"
import { connect } from "react-redux"

import { login } from "../../../redux/reduser/auth-reduser"

const Loader = ({ children, setUserData }) => {
  useEffect(() => {
    const mockSession = () => {
      setUserData("test4@test.com", "qwerty")
    }

    // mockSession()
  }, [setUserData])

  return children
}

let mapStateToProps = () => ({})

let mapDispatchToProps = dispatch => ({
  setUserData: (email, password) => {
    dispatch(login(email, password))
  }
})

export const AccountLoader = connect(
  mapStateToProps,
  mapDispatchToProps
)(Loader)
