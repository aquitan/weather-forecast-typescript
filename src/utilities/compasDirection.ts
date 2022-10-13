export const compasDirection = (deg:number) => {

    if (deg === 0) return 'С'
    if (deg > 0 && deg < 90) return 'СВ'
    if (deg > 90 && deg < 180) return 'ЮВ'
    if (deg > 180 && deg < 270) return 'ЮЗ'
    if (deg > 270 && deg < 359) return 'СЗ'

}