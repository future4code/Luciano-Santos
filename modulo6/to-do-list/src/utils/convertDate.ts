export const convertDate = (date: Date) =>{
    return new Intl.DateTimeFormat('en-US').format(date);
};
