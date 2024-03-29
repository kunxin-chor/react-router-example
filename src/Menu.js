import React from 'react';
import {Link} from "react-router-dom"
/*
export default function Menu(props)
{
  
  return (  
      <ul id='menu'>
          <li><a href="#" onClick={
            function() {
              props.switchPageFunction("home")
            }
          }>Home</a></li>
          <li><a href="#" onClick={function(){
              props.switchPageFunction("about")
            }
          }>About</a></li>
          <li><a>Catalog</a></li>
          <li><a>About Us</a></li>
      </ul>
  ) 
}
*/

export default function Menu()
{
  return (
  <ul id='menu'>
     <li><Link to='/'>Home</Link></li>
     <li><Link to='/about'>About</Link></li>
     <li><Link to='/change-settings'>Change Settings</Link></li>
     <li><Link to='/view-settings'>View Settings</Link></li>
     <li><Link to='/catalog'>Catalog</Link></li>
     <li><Link to='/contact-us'>Contact Us</Link></li>
  </ul>
  );
}