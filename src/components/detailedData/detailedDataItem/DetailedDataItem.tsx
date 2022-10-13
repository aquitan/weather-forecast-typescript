import { Grid, Typography } from "@mui/material"

type DetailedDataItemType = {
    title: string,
    info?: string | number,
    sign?: string,
    icon?: React.ReactElement,
}

const DetailedDataItem = ({title, info, sign, icon}:DetailedDataItemType) => {
    return (
        <Grid xs={4} textAlign='center' padding='10px' item >
            <Typography sx={{justifyContent: 'center', fontWeight: 'bold', fontSize: 12}} component='h4'>
                {title}
            </Typography>
            <Typography sx={{justifyContent: 'center'}} component='div'>
                <>
                    {icon} {info} {sign}
                </>
            </Typography>
        </Grid>
    )
}
export default DetailedDataItem;