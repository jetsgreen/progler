import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import './Navbar.css'


export default function ButtonAppBar() {
  

  return (
    <div className="toolbar" >
      <AppBar   position="static">
        <Toolbar xs={3} md={12}>
          
          <Typography variant="h6" >
         <a href="#" style={{color: "white", textDecoration: "none"}}>News Articles</a>
          </Typography>
          
        </Toolbar>
      </AppBar>
    </div>
  );
}