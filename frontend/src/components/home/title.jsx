import { Box, Typography, Paper } from "@mui/material";
import '../../app.css';

export default function Title() {
    return (
        <Box sx={{ textAlign: 'center', marginBottom: '50px', marginTop: '100px', color: 'white' }}>
            <Paper elevation={3} sx={{borderRadius:'50px', padding: '20px', backgroundColor: 'rgba(0, 0, 0, 0.1)', display: 'inline-block' }}>
                <Typography sx={{ color: 'white' }} fontSize={72}>
                    <span className="coda-regular">QR Code Generator</span>
                </Typography>
                <Typography sx={{ color: 'white' }} fontSize={24} variant="h6">
                    <span className="coda-regular">Enter a link and click &apos;Generate&apos; to create a QR Code</span>
                </Typography>
                <Typography sx={{ color: 'white' }} fontSize={24} variant="h6">
                    <span className="coda-regular">Use &apos;Copy Link&apos; to add the link to your clipboard</span>
                </Typography>
                <Typography sx={{ color: 'white' }} fontSize={24} variant="h6">
                    <span className="coda-regular">Press &apos;Reset&apos; to clear the input field and start over</span>
                </Typography>
               
            </Paper>
        </Box>
    );
}