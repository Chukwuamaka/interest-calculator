interface Rate {
    rate: number,
    rateBasis: string
}

const simpleInterest = (principal: number, rate: Rate, time: number): number => {
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

const compoundInterestAmount = (principal: number, rate: Rate, time: number): number => {
    let exponent: number = time;
    const formula = principal * Math.pow((1 + rate.rate/100), exponent);
    let result: number;

    if (rate.rate === 0) {
        result = principal;
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

document.getElementById("button").addEventListener("click", () => {
    // Data from forms are collected as string, but some properties are of type 'number', hence the conversion in some cases.
    let interestType: string = (document.getElementById("interest-type") as HTMLSelectElement).value;
    let principal: number = Number((document.getElementById("amount") as HTMLInputElement).value);
    let rate: number = Number((document.getElementById("rate") as HTMLInputElement).value);
    let rateBasis: string = (document.getElementById("rate-basis") as HTMLSelectElement).value;
    let duration: number = Number((document.getElementById("duration") as HTMLInputElement).value);
    let interest: number, totalAmount: number;
    
    switch (interestType) {
        case "compound":
            totalAmount = compoundInterestAmount(principal, {rate, rateBasis}, duration); 
            interest = totalAmount - principal;
            break;
    
        default:
            interest = simpleInterest(principal, {rate, rateBasis}, duration);
            totalAmount = principal + interest;
    }

    document.getElementById("principal").innerHTML = principal.toString();
    document.getElementById("interest").innerHTML = interest.toString();
    document.getElementById("totalAmount").innerHTML = totalAmount.toString();
});