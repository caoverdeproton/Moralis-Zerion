import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { Box, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Assets from "./Assets.jsx";
import Menu from "./Menu.jsx";

import Image from "../images/zerion.jpeg";

const useStyles = makeStyles((theme) => ({
    paper: {
        backgroundImage: `url(${Image})`,
        backgroundPosition: 'center',
        height: '100vh'      
    },
}));

export default function MainLayout() {
    const styles = useStyles();
    return (
        <Paper className={styles.paper}>
            <CssBaseline />
            <Box display="flex">
                <Menu />
                <Container>
                    <Assets />
                </Container>
            </Box>    
        </Paper>
    );
}