export const getTime = (time:number) => {
    const fromTimeStamp:Date = new Date(time * 1000)

    return fromTimeStamp.getHours() + ':' + fromTimeStamp.getMinutes()
}