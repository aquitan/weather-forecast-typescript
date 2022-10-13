import styled from "@emotion/styled";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Collapse, Grid, Typography } from "@mui/material";
import { useState } from "react";
import { Sys } from "../../types/types";
import { getTime } from "../../utilities/getTime";
import SunDayDuration from "../sunDayDuration/SunDayDuration";

type DailyCastType = {
    castData: Sys
}

const DailyCast = ({castData}:DailyCastType) => {
    const [active, setActive] = useState(false)

    const DailyCastBox = styled(Box)`
        background-color: #fff;
        padding: ${active ? '20px' : '0'};
        border-radius: 50px;
        color: #000;
        width: 100%;
        height: ${active ? 'auto' : '5px'}
    `

    return (
        <>
            <Typography sx={{cursor: 'pointer'}} onClick={() => setActive(prev => !prev)}>
                <FontAwesomeIcon icon={active ? faCaretDown : faCaretUp} color={'white'} size={'xl'} />
            </Typography>
            <Collapse in={active} sx={{width: '100%'}}>
                <DailyCastBox>
                    <SunDayDuration castData={castData} />
                </DailyCastBox>
            </Collapse>
        </>
    )
}
export default DailyCast;