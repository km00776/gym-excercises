import {AppBar, Typography, Container, Toolbar} from '@material-ui/core';
import React from 'react';
import styles from './Footer.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <AppBar
        position="fixed"
        style={{ bottom: "0", width: "100%", height: '12%', backgroundColor: 'rgb(14, 42, 71)'}}
      >
        <Typography>Karthikan</Typography>
      </AppBar>
    </footer>
  );
};

export default Footer;
