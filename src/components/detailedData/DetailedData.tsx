import { Box, Grid } from "@mui/material"
import DetailedDataItem from "./detailedDataItem/DetailedDataItem"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowUpLong, faDroplet, faWind } from "@fortawesome/free-solid-svg-icons"
import { StateType } from "../../types/types"
import { compasDirection } from "../../utilities/compasDirection"

type DetailedDataType = {
    mainData: StateType
}

const DetailedData = ({mainData}:DetailedDataType) => {
    return (
        <Box width={'100%'} padding='20px'>
            <Grid container>
                <DetailedDataItem title="Температура &#8451;" info={mainData.main.temp} sign='&#8451;' />
                <DetailedDataItem title="Ощущается как" info={mainData.main.feels_like} sign='&#8451;' />
                <DetailedDataItem title="Влажность" info={mainData.main.humidity} icon={<FontAwesomeIcon icon={faDroplet} />} sign='%' />
                <DetailedDataItem title="Скорость ветра" info={mainData.wind.speed} sign='м/с' icon={<FontAwesomeIcon icon={faWind} />} />
                <DetailedDataItem title="Направление ветра" sign={`${compasDirection(mainData.wind.deg)}`} icon={<FontAwesomeIcon style={{transform: `rotate(${mainData.wind.deg}deg)`}} icon={faArrowUpLong} />} />
                <DetailedDataItem title="Порывы ветра" info={`до ${mainData.wind.gust}`} sign={'м/с'}/>
            </Grid>
        </Box>
    )
}
export default DetailedData;