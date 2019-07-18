import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import HomeContainer from './components/home/HomeContainer'
import CharactersAll from './components/characters/CharactersAll'

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomeContainer} />
      <Route exact path="/characters" component={CharactersAll} />
    </Switch>
  </BrowserRouter>
)

export default Router
