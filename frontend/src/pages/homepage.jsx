import { useState, useEffect } from 'react';
import QR from '../components/home/QR';
import { Button, TextField } from '@mui/material';
import Title from '../components/home/title'
import Footer from '../components/other/footer';
import HistoryModal from '../components/history/history';
import {useMutation, useQuery} from '@apollo/client'
import {CREATE_QR} from '../utils/mutations'
import Auth from '../utils/auth'
import { QUERY_HISTORY } from '../utils/queries';


export default function HomePage() {

  const [createQr] = useMutation(CREATE_QR)
  const userId = Auth.getProfile().data.id


  const [inputValue, setInputValue] = useState('');
  const [qrValue, setQrValue] = useState('');
  const [isGenerated, setIsGenerated] = useState(false);
  const [isGenerateDisabled, setIsGenerateDisabled] = useState(false); // State variable to track disabled state
  const [open, setOpen] = useState(false);


  const handlePaste = () => {
    navigator.clipboard.readText().then(text => {
      setInputValue(text);
    }).catch(err => {
      console.error('Failed to read clipboard contents: ', err);
    });
  };
  const handleGenerate = async () => {
    setQrValue(inputValue);
    setIsGenerated(true)
    setIsGenerateDisabled(true);
    console.log(  Auth.getProfile().data.id)
    const {data} = await createQr({
      variables: {
        userId: userId, url: inputValue, qr: inputValue
      },
      refetchQueries: [{query: QUERY_HISTORY, variables:{
          userId: userId
      }}]
    })
    
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
    setIsGenerateDisabled(false)
  };
 
  


  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (
   <>
   <Title/>
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      
    
    }}>
      <div style={{ padding: 16, display: 'flex', justifyContent: 'space-between', width: '70vw', marginBottom: '100px'}}>
        <div style={{ flex: 1, marginRight: 16}}>
          <TextField
            label="Enter URL here..."
            variant="outlined"
            fullWidth
            onKeyDown={handleKeyDown}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            style={{ marginBottom: 16 }}
            InputProps={{
              style: {
                backgroundColor: 'white'
              }
            }}
          />
          <Button variant="contained" color="primary" onClick={handleGenerate} disabled={isGenerateDisabled || inputValue === ""}style={{ marginRight: 8 }}>
            Generate
          </Button>
          <Button variant="contained" color="secondary" onClick={handlePaste} disabled={isGenerateDisabled} style={{ marginRight: 8 }}>
            Paste
          </Button>
          <Button variant="contained" color="warning" onClick={handleCopy} style={{ marginRight: 8 }} disabled={!isGenerated}>
            Copy Link
          </Button>
          <Button variant="contained" color="error" onClick={handleReset} style={{ marginRight: 8 }} disabled={!isGenerated}>
            Reset
          </Button>
          <Button variant="contained" color="inherit" onClick={handleOpen} >
            My History
          </Button>
        </div>
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <QR value={qrValue} />
        </div>
      </div>
    </div>
    <Footer/>
    <HistoryModal open = {open} handleClose={handleClose}/>
    </>
  );
}