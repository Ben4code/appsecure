import React from 'react'
import { Link } from 'react-router-dom'



export default function Header() {

  return (
    <div className='header'>
      <div className="container">
        <div className="header-content">
          <div className="header-text">
            <h2>Get the latest security safety tips and news on the web.</h2>
            <p>Share your personal cyber threat experiences...</p>
            <Link to='/experience-bank' className="btn-danger">Experience bank</Link>
          </div>
          <div className="header-img">
            <img src={`/security.svg`} alt="header art" />
          </div>
        </div>
      </div>
    </div>
  )
}
