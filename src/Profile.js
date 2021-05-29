import { Box, Input, Button } from '@material-ui/core';
import { useState } from 'react';
import { useMoralis } from 'react-moralis';
import { ErrorBox } from './Error';
// import { makeStyles } from "@material-ui/core/styles";


export const Profile = () => {
    const { user, setUserData, userError, isUserUpdating } = useMoralis();

    const [username, setUsername] = useState(user.attributes.username);
    const [email, setEmail] = useState(user.attributes.email);
    const [password, setPassword] = useState('');

    const handleSave = () => {
        setUserData({
            username,
            email,
            password: password === "" ? undefined : password,
        });
    }

    return (
    <Box>
      
        {userError && <ErrorBox title="User changed failed" message={userError.message} />}
        <Box>
            Username
                <Input value={username} onChange={(event) => setUsername(event.currentTarget.value)} /> 
        </Box>
        <Box>
            Email
                <Input value={email} onChange={(event) => setEmail(event.currentTarget.value)} />    
        </Box>
        <Box>
            Password
                <Input value={password}onChange={(event) => setPassword(event.currentTarget.value)} />    
            </Box>
            <Button onClick={handleSave} isLoading={isUserUpdating}>
                Save Changes</Button>     
       
    </Box>
    );
}