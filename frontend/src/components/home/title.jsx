import { Box } from "@mui/material";



export default function Title() {
    return(

            <Box sx={{textAlign: 'center', marginBottom: '50px', marginTop: '100px', color: 'white'}}>
                <h1>QR Code Generator</h1>
                <h3>Enter a link and click &quot;Generate&quot; to create a QR Code</h3>
                <h3>Use &quot;Copy Link&quot; to add the link to your clipboard</h3>
                <h3>Press &quot;Reset&quot; to clear the input field and start over</h3>
            </Box>
    )
}