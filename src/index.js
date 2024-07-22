import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import NotFound from './views/not-found'
import Home from './views/home'

const App = () => {

  return (
    <Router>
      <Switch>
        <Route component={NotFound} exact path="/not-found" />
        <Route component={Home} exact path="/" />
        {/* <Route component={NotFound} path="**" /> */}
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
