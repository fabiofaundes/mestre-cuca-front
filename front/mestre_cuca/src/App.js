import React from 'react'
import './App.css'
import { NavBar } from './_components'
import {  Route, Switch } from 'react-router-dom'
import Ingredientes from './pages/Ingredientes/Ingredientes'
import Armazens from './pages/Armazens/Armazens'

const App = () => {

    return (<>
        <NavBar />
        <Switch>
            <Route path='/' exact component={Ingredientes}/>
            <Route path='/armazens' component={Armazens} />
        </Switch>
    </>)
}

export default App