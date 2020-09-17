interface Rate {
    rate: number,
    rateBasis: string
}

export const simple = (principal: number, rate: Rate, time: number): number => {
    const formula: number = (principal * rate.rate * time) / 100;
    let result: number;
    
    if (rate.rate === 0) {
        result = 0;
    }

    switch (rate.rateBasis) {
        case 'month':
            result = formula;
            break;
        
        case 'year':
            result = formula / 12;
    }
    
    return result;
}

export const compound = (principal: number, rate: Rate, time: number): number => {
    let exponent: number = time;
    const formula = principal * Math.pow((1 + rate.rate/100), exponent) - principal;
    let result: number;

    if (rate.rate === 0) {
        result = 0;
    }

    switch (rate.rateBasis) {
        case 'month':
            result = formula;
            break;

        case 'year':
            exponent = time / 12;
            result = formula;
    }
    
    return Number(result.toFixed(2)); //toFixed() method returns a string but 'result' is of type 'number', hence the conversion.
}