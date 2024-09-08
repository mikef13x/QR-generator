import React, { useState } from 'react';
import { Modal, Box, Typography, Button, List, ListItem, ListItemText } from '@mui/material';

const pastSearches = [
  'https://www.youtube.com/mrbeast',
  'https://www.youtube.com',
  'https://www.twitch.tv/',
  // Add more past searches here
];

export default function HistoryModal({ open, handleClose }) {
    
  const handleCopySearch = (searchValue) => {
    navigator.clipboard.writeText(searchValue).then(() => {
    }).catch(err => {
      console.error('Failed to copy:', err);
    });
  };

  return (
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
          <Typography id="modal-title" variant="h6" component="h2">
            Past Generated Searches
          </Typography>
          <List>
            {pastSearches.map((search, index) => (
              <div key={index}>
                <ListItem>
                  <ListItemText primary={search} />
                </ListItem>
                <Button variant="contained" color="primary" onClick={() => handleCopySearch(search)}>
                  Copy Link
                </Button>
              </div>
            ))}
          </List>
          <Button variant="contained" color="secondary" onClick={handleClose}>
            Close
          </Button>
        </Box>
      </Modal>
    </div>
  );
}