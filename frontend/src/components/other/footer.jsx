import { Box } from '@mui/material'

export default function Footer() {
    return (
        <footer>

            <Box sx={{
                textAlign: 'center',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'grey',
                color: 'white',
                display: 'flex',
                height: '7vh',
                bottom: '0px'
            }}>
                 © 2024. Created by Michael Freeman.

            </Box>

        </footer>
    )
}