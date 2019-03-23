import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


function TopBar() {

  return (
    <AppBar position="static">
      <Toolbar color="inherit">
        <Typography variant="h6" color="inherit">
          Image Pixelation
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;