import React, { useEffect, Suspense } from "react"
import { connect } from "react-redux"

import { login } from "../../../redux/reduser/auth-reduser"
import { getIsLoad } from "../../../redux/selectors/selectors"

import { Preloader } from "../../../ui"

const Loader = ({ children, setUserData, isLoad }) => {
  useEffect(() => {
    // eslint-disable-next-line
    const mockSession = () => {
      setUserData("test4@test.com", "qwerty")
    }

    // mockSession()
  }, [setUserData])

  if (isLoad) {
    return <Preloader />
  }

  return <Suspense fallback={<Preloader />}>{children}</Suspense>
}

let mapStateToProps = state => ({ isLoad: getIsLoad(state) })

let mapDispatchToProps = dispatch => ({
  setUserData: (email, password) => {
    dispatch(login(email, password))
  }
})

export const AccountLoader = connect(
  mapStateToProps,
  mapDispatchToProps
)(Loader)
