export const getCurrentDate = () => {
    const date:Date = new Date()
    const currentDate = date.getDate() + '/' + (date.getMonth()+1) + '/' + date.getFullYear()
    return currentDate
}