import {AppBar} from '@material-ui/core';
import React from 'react';
import './Header.css'
import MenuIcon from '@material-ui/icons/Menu';
import AccountBoxIcon from '@material-ui/icons/AccountBox';


const Header = () => {
  // create a useState


  return(
    <header>
       <AppBar elevation={0} style={{ height: "7%", backgroundImage: `linear-gradient( rgba(0, 79, 240, 3), rgba(0, 79, 240, 3))`}}>
          <div className="full-heading">
             <MenuIcon className="menu-icon" />
              <div className="title-icon">
                <img className="menu-logo" alt="squat" src="https://i.imgur.com/ilmD2vQ.png"></img>
                <h2 className="menu-header">K-Workz</h2>
              </div>
              <AccountBoxIcon className="menu-account-box-icon" />
          </div>
       </AppBar>
    </header>
  )
}

export default Header;