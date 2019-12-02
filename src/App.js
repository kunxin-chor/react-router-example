import React from 'react';
import './App.css';
import Menu from './Menu.js'

import Home from './pages/Home.js'
import About from './pages/About.js'
import ChangeSettings from './pages/ChangeSettings.js'
import ViewSettings from './pages/ViewSettings.js'

// These stuff are for the router
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export default class App extends React.Component {
  
  state = {
    fontColor: "",
    fontSize:0
  }
  
  // updateSettings is expecting an object
  // with the keys fontColor and fontSize
  updateSettings = (settings) => {
    this.setState({
      fontColor : settings.fontColor,
      fontSize: settings.fontSize,
      
    })
    
    /* shortcut works for any number of settings*/
    /*
    this.setState({
      ...this.state,
      ...settings
    })
    */
    
  }
  
  render() {
    return (
    <div>
      <Router>
        <Menu/>
        <Switch>
         

          <Route path='/about'>
            <About/>
          </Route>
          
          <Route path='/change-settings'>
            <ChangeSettings updateSettings={this.updateSettings}/>
          </Route>
          
          <Route path='/view-settings'>
            <ViewSettings settings={{
              fontColor: this.state.fontColor,
              fontSize: this.state.fontSize
            }}/>
          </Route>
          
          <Route path='/'>
            <Home/>
          </Route>
         
          
        </Switch>
      </Router>
    </div>  
    )
  
  }
  
  
}


