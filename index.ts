interface Duration {
    duration: number,
    durationBasis: string
}

interface Rate {
    rate: number,
    rateBasis: string
}

const simpleInterest = (principal: number, rate: Rate, time: Duration): number => {
    let result: number;
    if (rate.rate === 0) {
        result = 0;
    }
    else if (rate.rateBasis === time.durationBasis) {
        result = (principal * rate.rate * time.duration) / 100;
    }
    else if (rate.rateBasis === 'month' && time.durationBasis === 'year') {
        result = (principal * rate.rate * time.duration * 12) / 100;
    }
    else {
        result = (principal * rate.rate * time.duration / 12) / 100;
    }
    
    return result;
}

const compoundInterestAmount = (principal: number, rate: Rate, time: Duration): number => {
    let result: number;
    if (rate.rate === 0) {
        result = principal;
    }
    else if (rate.rateBasis === time.durationBasis) {
        result = principal * Math.pow((1 + rate.rate/100), time.duration);
    }
    else if (rate.rateBasis === 'month' && time.durationBasis === 'year') {
        result = principal * Math.pow((1 + rate.rate/100), (time.duration * 12));
    }
    else {
        result = principal * Math.pow((1 + rate.rate/100), (time.duration / 12));
    }
    
    return Number(result.toFixed(2));
}

document.getElementById("button").addEventListener("click", (event) => {
    // event.preventDefault();
    let interestType: string = (document.getElementById("interest-type") as HTMLSelectElement).value;
    let principal: number = Number((document.getElementById("amount") as HTMLInputElement).value);
    let rate: number = Number((document.getElementById("rate") as HTMLInputElement).value);
    let rateBasis: string = (document.getElementById("rate-basis") as HTMLSelectElement).value;
    let duration: number = Number((document.getElementById("duration") as HTMLInputElement).value);
    let durationBasis: string = (document.getElementById("duration-basis") as HTMLSelectElement).value;

    let interest: number, totalAmount: number;
    switch (interestType) {
        case "compound":
            totalAmount = compoundInterestAmount(principal, {rate, rateBasis}, {duration, durationBasis}); 
            interest = totalAmount - principal;
            break;
    
        default:
            interest = simpleInterest(principal, {rate, rateBasis}, {duration, durationBasis});
            totalAmount = principal + interest;
            break;
    }

    document.getElementById("principal").innerHTML = principal.toString();
    document.getElementById("interest").innerHTML = interest.toString();
    document.getElementById("totalAmount").innerHTML = totalAmount.toString();
});