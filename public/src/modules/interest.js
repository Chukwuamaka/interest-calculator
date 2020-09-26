export const simple = (principal, rate, time) => {
    const formula = (principal * rate.rate * time) / 100;
    let interest;
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
};
export const compound = (principal, rate, time) => {
    let exponent = time;
    const formula = principal * Math.pow((1 + rate.rate / 100), exponent) - principal;
    let interest;
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
    interest = Number(interest.toFixed(2));
    return {
        interest,
        totalAmount: principal + interest
    };
};
