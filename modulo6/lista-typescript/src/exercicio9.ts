const calculateAnagrams = (word: string): number =>{
    const wordSize: number = word.length
    let qtyAnagrams: number = wordSize

    for(let i: number = wordSize - 1; i >=1 ; i--){      
        qtyAnagrams *= i       
    };
    return qtyAnagrams;   
};
console.log(calculateAnagrams("deslumbrativo"));