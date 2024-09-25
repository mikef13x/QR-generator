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
      <AppBar position="fixed" sx={{
          backgroundImage: 'linear-gradient(to right, black, grey, black)',
        }}>
        <Toolbar>
          <Typography sx={{marginRight: '70px'}} variant="h6" component="div">
          <span className='coda-regular'>QR GEN</span>
          </Typography>
          <Box sx={{ display: 'flex', flexGrow: 1 }}>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Button color='inherit'> 
                <Typography sx={{marginRight: '30px'}}>
                 <span className='coda-regular'>Home</span>
               </Typography>
                 </Button>
            </Link>
            {AuthService.loggedIn() ? (
               <Button color='inherit'onClick={handleLogout}> <span className='coda-regular'>Logout</span></Button>
            ) : (<Link to="/signin" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Button color="inherit"> <span className='coda-regular'>Login</span></Button>
            </Link>
          )}
            
           
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}