import React, {useContext} from 'react'
import { NavLink, useHistory } from 'react-router-dom'

import { auth } from '../firebaseConfig'
import { AuthContext } from '../Context/AuthContext'

export default function Navbar() {
  const history = useHistory()

  const { state, dispatch} = useContext(AuthContext)

  const logout = () => {
    auth.signOut()
    .then(result =>{
      dispatch({
        type: 'FETCH_AUTH_USER',
        payload: false
      })
      history.push('/login')
    })
    .catch(error => {
      console.log(error)
    })
  }

  return (
    <div className="navbar">
      <ul className="navbar nav-list">
        <li className="navbar nav-item logo"><NavLink activeClassName="active" exact to="/" className="nav-link">
          ChimSecure
        </NavLink></li>
        <div className="nav-group">
          <li className="navbar nav-item">
            <NavLink to="/" exact className="nav-link">
              Home
            </NavLink>
          </li>
          <li className="navbar nav-item">
            <NavLink to="/about" exact className="nav-link">
              About
            </NavLink>
          </li>
          {/* <li className="navbar nav-item">
            <NavLink to="/contact" exact className="nav-link">
              Contact
            </NavLink>
          </li> */}

          {
            auth.currentUser && state.isAuthUser ?
              (
                <>
                  <li className="navbar nav-item">
                    <NavLink to="/experience-bank" exact className="nav-link bordered">
                      Experience bank
                    </NavLink>
                  </li>
                  <li className="navbar nav-item">
                    <a href="/#" onClick={logout} className="nav-link">
                      Logout
                    </a>
                  </li>
                </>
              ) : (
                <>
                  <li className="navbar nav-item">
                    <NavLink to="/login" exact className="nav-link">
                      Login
                    </NavLink>
                  </li>
                  <li className="navbar nav-item">
                    <NavLink to="/signup" exact className="nav-link">
                      Signup
                    </NavLink>
                  </li>
                </>
              )

          }
        </div>
      </ul>
    </div>
  )
}
