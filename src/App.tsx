import React, { useState, useEffect, useContext } from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import './scss/main.scss'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Pretexting from './pages/Pretexting'
import ExperienceBank from './pages/ExperienceBank'
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import { auth } from './firebaseConfig';
import { AuthContext } from './Context/AuthContext'

function App() {

  const [loading, setLoading] = useState(true)
  const { dispatch } = useContext(AuthContext)

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        dispatch({
          type: 'FETCH_AUTH_USER',
          payload: true
        })
      }
      else {
        dispatch({
          type: 'FETCH_AUTH_USER',
          payload: false
        })
      }
      setLoading(false)
    })
    // eslint-disable-next-line
  }, [])

  if (loading) {
    return <h1>Loading...</h1>
  }

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <div className="container">
            <Route exact path='/about' component={About} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/pretexting' component={Pretexting} />
            <Route exact path='/experience-bank' component={ExperienceBank} />
            <Route exact path='/signup' component={SignUp} />
            <Route exact path='/login' component={Login} />
          </div>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
