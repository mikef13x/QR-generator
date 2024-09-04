import { useState } from 'react';
import QR from '../components/home/QR';
import { Button, TextField } from '@mui/material';
import Title from '../components/home/title'
import Footer from '../components/other/footer';


export default function HomePage() {
  const [inputValue, setInputValue] = useState('');
  const [qrValue, setQrValue] = useState('');
  const [isGenerated, setIsGenerated] = useState(false);

  const handleGenerate = () => {
    setQrValue(inputValue);
    setIsGenerated(true)
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(qrValue);
  };

  const handleKeyDown = (event) => {
    if(event.key === 'Enter') {
        handleGenerate()
    } 
  }
  const handleReset = () => {
    setInputValue('');
    setQrValue('');
    setIsGenerated(false); 
  };

  return (
   <>
   <Title/>
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      
    
    }}>
      <div style={{ padding: 16, display: 'flex', justifyContent: 'space-between', width: '70vw', marginBottom: '100px'}}>
        <div style={{ flex: 1, marginRight: 16 }}>
          <TextField
            label="Enter URL here..."
            variant="outlined"
            fullWidth
            onKeyDown={handleKeyDown}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            style={{ marginBottom: 16 }}
          />
          <Button variant="contained" color="primary" onClick={handleGenerate} style={{ marginRight: 8 }}>
            Generate
          </Button>
          <Button variant="contained" color="secondary" onClick={handleCopy} style={{ marginRight: 8 }} disabled={!isGenerated}>
            Copy Link
          </Button>
          <Button variant="contained" color="black" onClick={handleReset} disabled={!isGenerated}>
            Reset
          </Button>
        </div>
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <QR value={qrValue} />
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}