import { Alert, AlertTitle  } from "@material-ui/lab";
import { Box, Button } from '@material-ui/core';

export const ErrorBox = ({title, message}) => {
    return (<Alert severity="error"> (
        <Box flex="1">
            <AlertTitle>title</AlertTitle>
            {message}
         <Button position="absolute" right="8px" top="8px" />
         </Box>
    </Alert>
    );
};