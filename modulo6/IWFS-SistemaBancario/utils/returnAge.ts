export const returnAge = (birthdate: Date): number =>{
    const currentDate: Date = new Date();
    const difference: number = Math.abs(currentDate.getTime() - birthdate.getTime());
    
    const age: number = Math.floor(
        Math.ceil(difference / (1000 * 60 * 60 * 24)) / 365
    );

    return age;
};