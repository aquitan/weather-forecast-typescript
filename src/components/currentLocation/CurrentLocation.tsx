import { Box, Typography } from "@mui/material";
import { getCurrentDate } from "../../utilities/getCurrentDate";


type CurrentLocationType = {
    place: string
}

const CurrentLocation = ({place}:CurrentLocationType) => {

    return (
        <Box width={'100%'} marginTop={2} textAlign='center'>
            <Typography sx={{textAlign: 'center'}}>
                {getCurrentDate()}
            </Typography>
            <Typography sx={{fontWeight: 'bold', fontSize: 40}}>
                {place}
            </Typography>
        </Box>
    )
}
export default CurrentLocation;