import React from 'react';
import './App.css';
import Menu from './Menu.js'

import Home from './pages/Home.js'
import About from './pages/About.js'

// These stuff are for the router
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export default function App(){
  
  return (
    <div>
      <Router>
        <Menu/>
        <Switch>
         
     
          
          <Route path='/about'>
            <About/>
          </Route>
          
          <Route path='/'>
            <Home/>
          </Route>
         
          
        </Switch>
      </Router>
    </div>  
    )
  
}


