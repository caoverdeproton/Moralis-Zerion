import { Container, Avatar, Box, Button } from '@material-ui/core';
import { useMoralis, ByMoralis } from 'react-moralis';
//import { Auth } from './Auth';
import { Route, Switch, Redirect, Link } from "react-router-dom";
import { Home } from './Home';
import { Profile } from "./Profile";
import MainLayout from "./components/MainLayout.jsx";
import { Balance } from './Balance';

function App() {
  const { isAuthenticated, logout, user, isAuthUndefined} = useMoralis(); 

  return ( 
    <Container>      
        <Link to="/">
          Login</Link>
          {isAuthenticated && (<Link to="/home">
            <Avatar name={user.attributes.username} />
          </Link>
          )}
          
      {isAuthenticated ? ( 
      <Switch> 
        <Route path="/" exact>
          <MainLayout />
        </Route>
        <Route path="/profile" exact>
          <Profile />
        </Route>
        <Route path="/home" exact>
          <Home />
          <Button onClick={() => logout()}> Logout </Button>
        </Route>
        <Route path="/balance" exact>
          <Balance />
        </Route>
      </Switch> 
      ) : (
        <>
         
          {!isAuthUndefined && <Redirect to="/" />}
          <MainLayout />
        </>
      )}
      <Box mt={12}>
        <ByMoralis />
      </Box>
</Container>
  );

  /*
  if (isAuthenticated){
    return (
      <Container>
        <Heading>Welcome to the Twitter Clone, {user ? user.attributes.username : ''}</Heading>

      </Container>
    );*/
  }

export default App;
