import React from 'react'
import Home from './components/common/Home'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NavBar from './components/common/NavBar'

import WineIndex from './components/wines/WineIndex'

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/wines' component={WineIndex} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
