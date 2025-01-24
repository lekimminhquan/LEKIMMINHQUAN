export const formatTime = (timestamp: number) => {
    const date = new Date(timestamp * 1000)
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
                  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
                  
    const formattedDate = `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
    return formattedDate
}