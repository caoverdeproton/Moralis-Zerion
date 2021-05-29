import React from "react";
import Button from "@material-ui/core/Button";
import { Box } from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';
import { ErrorBox } from "../Error";

import { useMoralis } from "react-moralis";
import { getEllipsisTxt } from "../utils";


export default function Login() {
    const { authenticate, isAuthenticated, isAuthenticating, authError, logout, user } = useMoralis();

if (!isAuthenticated) {
    return (
        <Box display="flex" justifyContent="center" p={1}>
             {authError && <ErrorBox title="Authentication has failed" message={authError.message} />}
            <Button color="primary" variant="contained" isLoading={isAuthenticating} onClick={() => authenticate()}>
                Connect Wallet
            </Button>
        </Box>
    );
}

return (
    <Box display="flex" justifyContent="center" p={1}>
        <Button
            color="primary" 
            variant="contained" 
            onClick={() => {
                console.log("logging out ... ");
                logout();
            }}
    >
        {getEllipsisTxt(user.attributes.ethAddress)}
        <CloseIcon fontSize="small"/>    
        </Button>
    </Box>
    );
}