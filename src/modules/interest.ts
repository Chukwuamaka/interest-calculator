interface Rate {
    rate: number,
    rateBasis: string
}

interface Results {
    interest: number,
    totalAmount: number
}

export const simple = (principal: number, rate: Rate, time: number): Results => {
    const formula: number = (principal * rate.rate * time) / 100;
    let interest: number;
    
    if (rate.rate === 0) {
        interest = 0;
    }
    else {
        switch (rate.rateBasis) {
            case 'month':
                interest = formula;
                break;
            
            case 'year':
                interest = formula / 12;
        }
    }
    
    return {
        interest,
        totalAmount: principal + interest
    };
}

export const compound = (principal: number, rate: Rate, time: number): Results => {
    let exponent: number = time;
    const formula = principal * Math.pow((1 + rate.rate/100), exponent) - principal;
    let interest: number;

    if (rate.rate === 0) {
        interest = 0;
    }
    else {
        switch (rate.rateBasis) {
            case 'month':
                interest = formula;
                break;

            case 'year':
                exponent = time / 12;
                interest = formula;
        }
    }
    
    interest = Number(interest.toFixed(2)); //toFixed() method returns a string but 'result' is of type 'number', hence the conversion.

    return {
        interest,
        totalAmount: principal + interest
    };
}