export const calculatePrice = (pets: number, duration: string) => {
    const optionOne = "30";
    const optionTwo = "60"
    const halfHourPrice = 25;
    const additionalHalfHourTours = 15;
    const oneHour = 35;
    const additionalOneHourTours = 20;

    if (duration === optionOne)
        return pets === 1 ? halfHourPrice : (
            (pets - 1) * additionalHalfHourTours + halfHourPrice
        );
            
    if (duration === optionTwo)
        return pets === 1 ? oneHour : (
            (pets - 1) * additionalOneHourTours + oneHour
        );
};