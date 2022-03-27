const checkValidityIdCard = (birth: string, idCard: string) : boolean =>{

    const actual: Date = new Date();
    const birthDate: Date = new Date(birth);
    const idCardDate: Date = new Date(idCard)

    const differenceForAge: number = Math.abs(actual.getTime() - birthDate.getTime());
    const differenceForEmission: number = Math.abs(actual.getTime() - idCardDate.getTime());

    const age: number = Math.floor(
        Math.ceil(differenceForAge / (1000 * 60 * 60 * 24)) / 365
    );

    const yearsEmission: number = Math.floor(
        Math.ceil(differenceForEmission / (1000 * 60 * 60 * 24)) / 365
    );


    if(age <= 20){
        if(yearsEmission >= 5){
            return true;
        }else{
            return false;
        };
    }else if(age > 20 && age <= 50){
        if(yearsEmission >= 10){
            return true;
        }else{
            return false;
        };
    }else if(age > 50){
        if(yearsEmission >= 15){
            return true;
        }else{
            return false;
        };
    }else{
        return false;
    };
};
console.log(checkValidityIdCard("05/11/1996", "06/06/2011"))