import { Box, Typography, Paper } from "@mui/material";
import { useQuery } from '@apollo/client'
import { QUERY_USER } from "../../utils/queries";
import Auth from '../../utils/auth';
import '../../app.css';
import { useEffect, useState } from "react";

export default function Title() {
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

    const {  data } = useQuery(QUERY_USER, {
        variables: { userId },
        skip: !isAuthenticated,
    });

    const user = data?.getUser;
    return (
        <Box sx={{ textAlign: 'center', marginBottom: '50px', marginTop: '100px', color: 'white' }}>
            <Paper elevation={3} sx={{ padding: '20px', backgroundColor: 'rgba(128, 128, 128, 0.0)', display: 'inline-block' }}>
                {Auth.loggedIn() ? (
                    <>
                        <Typography sx={{ color: 'white' }} fontSize={50}>

                        <span className="coda-regular">Welcome {user?.username},</span>
                    </Typography>
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
                 </>
                ) : (<>
                   
                   <Typography sx={{ color: 'white' }} fontSize={50}>

<span className="coda-regular">Welcome to</span>
</Typography>
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
                </>
                )}
            </Paper>
        </Box>
    );
}