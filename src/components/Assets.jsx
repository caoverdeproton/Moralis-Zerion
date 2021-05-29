import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Avatar, Box, Typography } from "@material-ui/core";
import MonetizationOnOutlinedIcon from "@material-ui/icons/MonetizationOnOutlined";
import PieChartIcon from "@material-ui/icons/PieChart";

import { useCoinData } from "../hooks/coinData";
import { c2 } from "../utils";

const useStyles = makeStyles((theme) => ({
    tokenImg: {
        height: "2rem",
        width: "2rem",
    },
}));

const WhiteTextTypography = withStyles({
    root: {
        color: "#FFFFFF"
    }
    })(Typography);

export default function Assets() {
    const { coinList, portafolioValue, isLoading } = useCoinData();
    const styles = useStyles();

    if (!coinList || !coinList.length || isLoading) {
        return (    
            <Box display="flex" flexDirection="column" color="#ffffff" alignItems="center">
                <WhiteTextTypography variant="h3" >Moralis Zerion Clone</WhiteTextTypography> 
                <Typography>Connect an Ethereum wallet to manage your profile</Typography>               
            </Box>            
        );
    }

    return (
        <div>
            <Box display="flex" flexDirection="column" color="#ffffff" alignItems="center">
                <WhiteTextTypography variant="h3" >Moralis Zerion Clone</WhiteTextTypography>                
            </Box> 
            <Box my={2} >
                <Typography variant="h5" my={5}>
                    {c2.format(portafolioValue)}
                    <PieChartIcon fontSize="small" />
                </Typography>
            </Box>
            <Card background="red" cardvariant="outlined">
                <CardContent>
                <Typography variant="h5" >All Assets</Typography>
                    {coinList.map((token, i) => (
                         <Box display="flex" mb={2} key={i}>
                            <Box display="flex">
                                <Box display="flex">  
                                    {token.image ? (
                                        <Avatar 
                                            className={styles.tokenImg}
                                            src={token.image}
                                            alt={token.symbol}
                                        />
                                    ) :  (
                                        <Avatar> 
                                            <MonetizationOnOutlinedIcon frontSize="large" />
                                        </Avatar>      
                                    )}
                                </Box>
                                <Box display="flex" backgroundColor="#0000FF" flexDirection="column" ml={2}>
                                    <Typography variant="subtitle2">{token.name}</Typography>
                                    <Typography variant="body1">
                                    {token.valueTxt}{" "}{c2.format(token.price)}  
                                    </Typography>
                                </Box>
                                
                            </Box>
                            <Typography variant="body1"> {c2.format(token.value)} </Typography>                
                        </Box>
                    ))}
                </CardContent>
            </Card>
        </div>
);
}    