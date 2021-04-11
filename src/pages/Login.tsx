import React, {FormEvent, useState, useContext} from 'react'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import { SignInWithGoogle } from '../components/SignInWithGoogle'
import { AuthContext } from '../Context/AuthContext'
import { auth } from '../firebaseConfig'

export default function Login() {
  const [authenticating, setAuthenticating] = useState<boolean>(false)
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  
  const [error, setError] = useState<string>('')

  const history = useHistory()

  const {dispatch} = useContext(AuthContext)

  const signInWithEmailAndPassword = (event: FormEvent) => {
    event.preventDefault()
    if(error !== ''){
      setError('')
    }
    setAuthenticating(true)
    auth.signInWithEmailAndPassword(email, password)
    .then(result => {
      console.log(result)
      dispatch({
        type: 'FETCH_AUTH_USER',
        payload: true
      })

      history.push('/')
    }).catch(error => {
      console.log(error)
      setError('Unable to sign in, please try again.')
      setAuthenticating(false)
    })

  }
  
  return (
    <div className="signup">
      <form className="form" onSubmit={signInWithEmailAndPassword}>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter email" name="email" onChange={event => setEmail(event.target.value)}/>
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter password" name="password" onChange={event => setPassword(event.target.value)}/>
        </div>
        <button className="btn" disabled={authenticating}>Login</button>
        <SignInWithGoogle />
      </form>
      <small>
        <p>Don't have an account? <Link to='/signup'>Register here</Link></p>
      </small>
      { error && (
        <small>
          <p>{error}</p>
        </small>
      )}
    </div>
  )
}
