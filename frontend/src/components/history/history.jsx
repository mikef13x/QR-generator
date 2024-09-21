import React, { useState } from 'react';
import { Modal, Box, Typography, Button, List, ListItem, ListItemText } from '@mui/material';
import { useQuery } from '@apollo/client'
import { QUERY_HISTORY } from '../../utils/queries'
import Auth from '../../utils/auth';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';







export default function HistoryModal({ open, handleClose }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userId, setUserId] = useState(null);


  useEffect(() => {
    if (Auth.loggedIn()) {
      const profile = Auth.getProfile();
      setUserId(profile.data.id);
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  const { loading, error, data } = useQuery(QUERY_HISTORY, {
    variables: { userId },
    skip: !isAuthenticated, // Skip the query if not authenticated
  });

  const [pastSearches, setPastSearches] = useState([]);

  useEffect(() => {
    if (data) {
      setPastSearches(data.getHistory.map((item) => item.url));
    }
  }, [data]);




  const handleCopySearch = (searchValue) => {
    navigator.clipboard.writeText(searchValue).then(() => {
    }).catch(err => {
      console.error('Failed to copy:', err);
    });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
        >
          <Box sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,

          }}>
            {Auth.loggedIn() ? (
              <>
                <Typography sx={{ textAlign: 'center' }} id="modal-title" variant="h6" component="h2">
                  Past Generated Searches
                </Typography>
                <Box sx={{
                  overflowY: 'auto',
                  maxHeight: '50vh',
                  margin: '25px'
                }}>
                  <List>
                    {pastSearches.map((search, index) => (
                      <div key={index}>
                        <ListItem>
                          <ListItemText primary={search} />
                        </ListItem>
                        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
                          <Button variant="contained" color="primary" onClick={() => handleCopySearch(search)}>
                            Copy Link
                          </Button>
                        </Box>
                      </div>
                    ))}
                  </List>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
                <Button variant="contained" color="error" onClick={handleClose}>
                  Close
                </Button>
                </Box>
              </>
            ) : (<>
              <Typography sx={{ textAlign: 'center' }}>Please log in to view history </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
                <Link to={'/signin'}>
                <Button  sx={{marginRight: '24px'}} variant="contained" color="secondary" onClick={handleClose}>
                  Login
                </Button>
                </Link>
                <Button variant="contained" color="primary" onClick={handleClose}>
                  Close
                </Button>
              </Box>
            </>
            )}
            
          </Box>
        </Modal>
      </div>
    </>
  );
}