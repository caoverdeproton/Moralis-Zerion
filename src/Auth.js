import { Input, Button, Box } from '@material-ui/core';
import { useMoralis } from 'react-moralis';
import { useState } from 'react';
import { ErrorBox } from './Error';

const SignUp = () => {
    const { signup } = useMoralis();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    
    return (
      <Box spacing={3}>
        <Input placeholder="Email" value={email} onChange={(event) => setEmail(event.currentTarget.value)} />
        <Input 
          placeholder="Password" 
          type="password" 
          value={password} 
          onChange={(event) => setPassword(event.currentTarget.value)}
        />
        <Button onClick={() => signup(email, password, email)}> Sign Up</Button>
      </Box>
      );
  };
  
  const Login = () => {
    const { login } = useMoralis();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    
    return (
      <Box>
        <Input placeholder="Email" value={email} onChange={(event) => setEmail(event.currentTarget.value)} />
        <Input 
          placeholder="Password" 
          type="password" 
          value={password} 
          onChange={(event) => setPassword(event.currentTarget.value)}
        />
        <Button onClick={() => login(email, password)}> Login</Button>
      </Box>
      );
  };
  
export const Auth = () => {
    const { authenticate, isAuthenticating, authError } = useMoralis(); 

    return ( 
      <Box spacing={6}>
        {authError && <ErrorBox title="Authentication has failed" message={authError.message} />}
        <Button isLoading={isAuthenticating}
          onClick={() => authenticate()}> Authenticate via Metamask 
        </Button> 
        <SignUp />
    <Login />
  </Box>
  );
};