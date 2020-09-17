export const simple = (principal, rate, time) => {
    const formula = (principal * rate.rate * time) / 100;
    let result;
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
};
export const compound = (principal, rate, time) => {
    let exponent = time;
    const formula = principal * Math.pow((1 + rate.rate / 100), exponent) - principal;
    let result;
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
    return Number(result.toFixed(2));
};
