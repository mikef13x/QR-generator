import QRCode from 'react-qr-code';
import { Paper } from '@mui/material';
import PropTypes from 'prop-types';

export default function QR({ value }) {
  return (
    <Paper style={{ padding: 16 }}>
      <div style={{ 
        height: "auto", 
        margin: "0 auto",  
        width: '200px',
        padding: 16, 
        border: "2px solid black" 
      }}>
        {value ? (
          <QRCode
            size={200}
            value={value}
            viewBox={`0 0 256 256`}
          />
        ) : (
          <div style={{ 
            height: 200, 
            width: 200, 
            backgroundColor: '#f0f0f0', 
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <span style={{ color: '#ccc' }}> Generate to create QR</span> 
          </div>
        )}
      </div>
    </Paper>
  );
}

QR.propTypes = {
  value: PropTypes.string.isRequired,
};