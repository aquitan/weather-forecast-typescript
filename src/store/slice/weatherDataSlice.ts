import { createSlice } from "@reduxjs/toolkit";

type WeatherDataType = {
    city: string
}

const initialState:WeatherDataType = {
    city: 'Алма-ата'
}

export const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        changeCity: (state) => {
            console.log('state', state)
        }
    }
})

export const { changeCity } = weatherSlice.actions

export default weatherSlice.reducer