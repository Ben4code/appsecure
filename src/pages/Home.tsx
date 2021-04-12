import React from 'react'
import {Link} from 'react-router-dom'

import Quotes from '../components/Quotes'
import Sidebar from '../components/Sidebar'

export default function Home(): JSX.Element {
  return (
    <div className="layout">
      <div className="home">
        <div>
          <Quotes/>
          <div className="content">
            <div className="content__buttons">
              <a href='https://phishingquiz.withgoogle.com/' target="blank" rel="noreferrer" className="btn">Understanding Pretexting</a>
              <Link to='/experience-bank' className="btn">Experience bank</Link>  
            </div>
            <Link to='#' className="btn">Take Phishing Assessment</Link>
          </div>
        </div>
      </div>
      <Sidebar/>
    </div>
  )
}
