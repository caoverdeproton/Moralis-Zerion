import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import VisibilityIcon from "@material-ui/icons/Visibility";
import HistoryIcon from "@material-ui/icons/History";
import CasinoIcon from "@material-ui/icons/Casino";
import ContactSupportIcon from "@material-ui/icons/ContactSupport";
import { Link } from "react-router-dom";

import Login from "./Login.jsx";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
    },
    appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },
}));

export default function Menu() {
    const classes = useStyles();

    return (
        <div>
            <Drawer
                ClassName={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
                anchor="right"
            >
                <Login />
                <Divider />
                <List>
                    <ListItem button>
                        <ListItemIcon>
                            <VisibilityIcon />
                        </ListItemIcon>
                        <ListItemText primary="Overview" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <HistoryIcon />
                        </ListItemIcon>
                        <Link to="/balance">Balance</Link> 
                    </ListItem>
                       <ListItem button>
                        <ListItemIcon>
                            <CasinoIcon />
                        </ListItemIcon>
                        <ListItemText primary="Casino" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <ContactSupportIcon />
                        </ListItemIcon>
                        <Link to="/profile">Profile</Link>
                    </ListItem>

                </List>
            </Drawer>
        </div>
    );
}
 