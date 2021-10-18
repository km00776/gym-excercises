import {AppBar} from '@material-ui/core';
import React from 'react';
import styles from './Header.css'


const Header = () => {
  return(
    <header>
       <AppBar style={{ height: "7%", backgroundColor: "rgb(14, 42, 71)" }}>
          <h1 className={styles.heading}>Gym exercises</h1>
       </AppBar>
    </header>
  )
}

export default Header;