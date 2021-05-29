import { Box, Button, Container, Input } from '@material-ui/core'; 
import{ useMoralis } from 'react-moralis';

export const Casino = () => {
    const { logout } = useMoralis();
    
    function PlayDice () 
    
    
    return (
        <Box>
        
        <Button onClick={() => logout()}> Logout </Button>

        <Button onClick={() => PlayDice()}> Play Dice </Button>

       </Box>
       );
};
