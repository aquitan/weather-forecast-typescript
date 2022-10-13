import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system"
import { Sys } from "../../types/types";
import { getTime } from "../../utilities/getTime";

type DailyCastType = {
    castData: Sys
}

const SunDayDuration = ({castData}:DailyCastType) => {
    return (
        <Box>

            <Typography textAlign='center'>
                <img height={50} src="./img/sunperiod.svg" alt="sunperiod" />
            </Typography>
            <Grid container alignItems='center'>
                <Grid item xs={4} textAlign='center'>
                    <img width={60} src='./img/sunrise.svg' alt='sunrise' />
                    <Box>{getTime(castData.sunrise)}</Box>
                </Grid>
                <Grid item xs={4} textAlign='center'>
                    <Typography>Световой день</Typography>
                </Grid>
                <Grid item xs={4} textAlign='center'>
                    <Box>
                        <img width={60} src='./img/sunset.svg' alt='sunset' />
                        <Box>{getTime(castData.sunset)}</Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default SunDayDuration;