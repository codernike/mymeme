import React, { Component } from 'react'
import Navbar from './compoents/navbar'
import Footer from './compoents/footer'
import Form from './compoents/form'
import Login from './compoents/login'
import Homecontainer from './compoents/homecontainer'
import Pokegames from './compoents/pokegames'
import Homeform from './compoents/Homeform'
import Moregames from './compoents/moregames'
import Pokeemerald from './compoents/pokeemerald'
import Contentpoke from './compoents/contentpoke'
import MemeGenerator from './compoents/mememaker'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <>
      <Router>
      <Navbar/>
      <Switch>
        <Route exact path='/'>
          <Homecontainer/>
        <Pokegames/>
        <Homeform/>
        </Route>
        <div class="d-flex flex-column min-vh-100">
        <main class="flex-fill">
        <Route exact path='/form'><Form/> </Route>
        <Route exact path='/login'> <Login/></Route>
        <Route exact path='/Moregames'><Moregames/>   </Route>
        <Route exact path='/mememaker'><MemeGenerator/></Route>
        <Route exact path='/emerald'> 
        <Pokeemerald/>
        <Contentpoke/>
         </Route></main></div>
      </Switch>
      <Footer/>
      </Router>
      </>
    )
  }
}
