import * as Interest from './modules/interest.js';

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
            ( {interest, totalAmount} = Interest.compound(principal, {rate, rateBasis}, duration) );
            break;
    
        default:
            ( {interest, totalAmount} = Interest.compound(principal, {rate, rateBasis}, duration) );
    }

    document.getElementById("principal").innerHTML = principal.toString();
    document.getElementById("interest").innerHTML = interest.toString();
    document.getElementById("totalAmount").innerHTML = totalAmount.toString();
});