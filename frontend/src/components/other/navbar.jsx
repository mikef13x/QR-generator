import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AuthService from '../../utils/auth'

import { Link } from 'react-router-dom';

export default function Navbar() {
  const handleLogout = () => {
    localStorage.removeItem('id_token')
    window.location.reload()
  }


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ backgroundColor: 'grey' }}>
        <Toolbar>
          <Typography variant="h6" component="div">
            QR Generator
          </Typography>
          <Box sx={{ display: 'flex', flexGrow: 1 }}>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Button color='inherit'>Home</Button>
            </Link>
            {AuthService.loggedIn() ? (
               <Button color='inherit'onClick={handleLogout}>Logout</Button>
            ) : (<Link to="/signin" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Button color="inherit">Login</Button>
            </Link>
          )}
            
           
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}