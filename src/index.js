import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Home from './views/home'
import About from './views/about'

const App = () => {
  return (
    <Router>
      <div>
        <Route exact component={Home} path="/" />
        <Route exact component={About} path="/about" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
