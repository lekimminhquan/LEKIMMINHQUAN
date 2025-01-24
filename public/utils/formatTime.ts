export const formatTime = (timestamp: number) => {
  const date = new Date(timestamp * 1000)
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
                  
  const formattedDate = `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
  return formattedDate
}

export const calculateAge = (birthDate : number) => {
  const today = new Date(); 
  const birth = new Date(birthDate * 1000); 
  
  let age = today.getFullYear() - birth.getFullYear(); 
  
  const monthDifference = today.getMonth() - birth.getMonth();
  if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  
  return age;
}

export const formatMatchTime = (timestamp: number) => {
  const date = new Date(timestamp * 1000);
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${day}/${month}`
}
  

  