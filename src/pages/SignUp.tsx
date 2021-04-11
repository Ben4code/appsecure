import React, { FormEvent, useState } from 'react'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import { SignInWithGoogle } from '../components/SignInWithGoogle'
import { auth } from '../firebaseConfig'

export default function SignUp() {
  const [registering, setRegistering] = useState<boolean>(false)
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [connfirm, setConfirm] = useState<string>('')
  const [error, setError] = useState<string>('')

  const history = useHistory()

  const signUpWithEmailAndPassword = (event: FormEvent) => {
    event.preventDefault()
    if (password !== connfirm) setError('Please make sure your passwords match')
    if (error !== '') {
      setError('')
    }
    setRegistering(true)

    auth.createUserWithEmailAndPassword(email, password).then(result => {
      console.log(result)
      history.push('/login')
    }).catch(error => {
      console.log(error)
      if (error.code.includes('auth/weak-password')) {
        setError('Please enter a stronger passwod.')
      } else if (error.code.includes('auth/email-already-in-use')) {
        setError('Email already in use.')
      } else {
        setError('Unable to register, please try again.')
      }
      setRegistering(false)
    })
  }

  return (
    <div className="signup">
      <form className="form" onSubmit={signUpWithEmailAndPassword}>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter email" name="email" onChange={event => setEmail(event.target.value)} />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter password" name="password" onChange={event => setPassword(event.target.value)} />
        </div>
        <div className="input-group">
          <label htmlFor="confirm">Confirm Password</label>
          <input type="password" id="confirm" placeholder="Enter confirm password" name="confirm" onChange={event => setConfirm(event.target.value)} />
        </div>
        <button className="btn" disabled={registering}>Register</button>
        <SignInWithGoogle />
      </form>
      <small>
        <p>Already have an account? <Link to='/login'>Login</Link></p>
      </small>
      { error && (
        <small>
          <p>{error}</p>
        </small>
      )}
    </div>

  )
}
