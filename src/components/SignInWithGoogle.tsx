import React from 'react'
import { useHistory } from 'react-router'

import { auth, googleAuthProvider } from '../firebaseConfig'


export function SignInWithGoogle() {
  const history = useHistory()

  const signInWithGoogle = async () => {
    try {
      await auth.signInWithPopup( googleAuthProvider )
      history.push('/experience-bank')
    } catch (error) {
      console.log(error)
    }
  }
  
  return (
    <button className="btn btn-google" onClick={signInWithGoogle}>
      <div style={{display: 'flex', alignItems: 'center'}}>
        <span style={{marginRight: '1rem'}}>
          Sign In with Google 
        </span>  
        <img width="30" height="30" src={`/google.png`} alt="Google logo"/>
      </div>
    </button>
  )
}

