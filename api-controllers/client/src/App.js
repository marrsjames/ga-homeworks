import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Rappers from './components/Rappers/Rappers'
import Colours from './components/Colours/Colours'
import NavBar from './components/Common/NavBar'
import Home from './components/Common/Home'
import ColourNew from './components/Colours/ColourNew'
import ColourShow from './components/Colours/ColourShow'
import ColourEdit from './components/Colours/ColourEdit'


import './styles/style.scss'

const App = () => (
  <BrowserRouter>
    <NavBar />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/colours/:id' component={ColourShow} />
      <Route exact path='/colours/:id/edit' component={ColourEdit} />
      <Route exact path='/createcolour' component={ColourNew} />
      <Route exact path='/rappers' component={Rappers} />
      <Route exact path='/colours' component={Colours} />
    </Switch>
  </BrowserRouter>
)

export default App
