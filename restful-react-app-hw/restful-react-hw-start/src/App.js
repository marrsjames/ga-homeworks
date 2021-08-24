import React from 'react'
import Home from './components/common/Home'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NavBar from './components/common/NavBar'

import WineIndex from './components/wines/WineIndex'
import WineShow from './components/wines/WineShow'
import NewWine from './components/wines/NewWine'
import Register from './components/auth/Register'
import Login from './components/auth/Login'

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/wines/:id' component={WineShow} />
        <Route path='/newwine' component={NewWine} />
        <Route path='/wines' component={WineIndex} />
        <Route path='/register' component={Register} />
        <Route path='/login' component={Login} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
