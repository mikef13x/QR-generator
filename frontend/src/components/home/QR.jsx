import  { useRef } from 'react';
import QRCode from 'react-qr-code';
import { Paper, Button } from '@mui/material';
import PropTypes from 'prop-types';
import { toPng, toSvg } from 'html-to-image';

export default function QR({ value }) {
  const qrRef = useRef();

  const downloadPng = () => {
    if (qrRef.current) {
      toPng(qrRef.current)
        .then((dataUrl) => {
          const link = document.createElement('a');
          link.href = dataUrl;
          link.download = 'qr-code.png';
          link.click();
        })
        .catch((err) => {
          console.error('Failed to download PNG:', err);
        });
    }
  };

  const downloadSvg = () => {
    if (qrRef.current) {
      toSvg(qrRef.current)
        .then((dataUrl) => {
          const link = document.createElement('a');
          link.href = dataUrl;
          link.download = 'qr-code.svg';
          link.click();
        })
        .catch((err) => {
          console.error('Failed to download SVG:', err);
        });
    }
  };

  return (
    <Paper style={{ padding: 16, marginBottom: '250px' }}>
      <div
        
        style={{
          height: 'auto',
          margin: '0 auto',
          width: '200px',
          padding: 16,
          border: '2px solid black',
        }}
      >
        {value ? (
          <QRCode size={200} ref={qrRef} value={value} viewBox={`0 0 256 256`} />
        ) : (
          <div
            style={{
              height: 200,
              width: 200,
              backgroundColor: '#f0f0f0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span style={{ color: '#ccc' }}>Generate to create QR</span>
          </div>
        )}
      </div>
     
        <div style={{ marginTop: 16 }}>
          <Button variant="contained" color="primary" onClick={downloadPng} disabled={!value}>
            Download PNG
          </Button>
          <Button variant="contained" color="secondary" onClick={downloadSvg} disabled={!value} style={{ marginLeft: 8 }}>
            Download SVG
          </Button>
        </div>
     
    </Paper>
  );
}

QR.propTypes = {
  value: PropTypes.string,
};