import { Typography } from "@mui/material";
import { Box, styled } from "@mui/system";

type MainDegreeAreaType = {
    temperature: number,
    description: string,
    icon: string
}

const MainDegreeArea = ({temperature, description, icon}:MainDegreeAreaType) => {
    const RoundedBox = styled(Box)`
        height: 300px;
        width: 300px;
        border-radius: 50%;
        background-color: rgba(255,255,255, .3);
        color: #fff;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-weight: lighter;
        margin: 20px 0;
        box-shadow: 0px 28px 36px rgba(96, 209, 234, 0.4);
    `

    const descriptionUppercase = () => {
        return description.split('')[0].toUpperCase() + description.slice(1)
    }

    return (
        <RoundedBox>
            <img width={100} src={`http://openweathermap.org/img/wn/${icon}@4x.png`} alt='weather' />
            
            <Typography>{descriptionUppercase()}</Typography>
            <Typography sx={{fontSize: 80}}>{Math.round(temperature)}&#8451;</Typography>
        </RoundedBox>
    )
}
export default MainDegreeArea;