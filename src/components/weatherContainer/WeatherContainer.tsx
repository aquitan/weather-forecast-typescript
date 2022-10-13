import styled from "@emotion/styled"
import { Paper, PaperProps } from "@mui/material"

type WeatherContainerTypes = PaperProps & {}

const WeatherContainer = ({children, elevation, sx}:WeatherContainerTypes) => {

    const StyledPaper = styled(Paper)`
        background: linear-gradient(0deg, rgba(41,41,39,0.8898153011204482) 4%, rgba(25,195,221,1) 100%);
        margin: 0 auto;
        border-radius: 50px;
        margin-top: 10%;
        display: flex;
        align-items: center;
        flex-direction: column;
        overflow: hidden;
    `

    return(
        <StyledPaper sx={sx} elevation={elevation}>
            {children}
        </StyledPaper>
    )
}
export default WeatherContainer;