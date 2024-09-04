import { Box } from '@mui/material';


export default function Footer() {


    return (
        <footer style={{width:'100%', position: 'fixed', bottom: 0}}>
            <Box sx={{
                textAlign: 'center',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'grey',
                color: 'white',
                display: 'flex',
                height: '7vh',
                
            }}>
                © 2024. Created by Michael Freeman.
            </Box>
        </footer>
    );
}