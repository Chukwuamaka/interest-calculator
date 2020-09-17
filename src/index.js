import * as Interest from './interest.js';
document.getElementById("button").addEventListener("click", () => {
    let interestType = document.getElementById("interest-type").value;
    let principal = Number(document.getElementById("amount").value);
    let rate = Number(document.getElementById("rate").value);
    let rateBasis = document.getElementById("rate-basis").value;
    let duration = Number(document.getElementById("duration").value);
    let interest, totalAmount;
    switch (interestType) {
        case "compound":
            interest = Interest.compound(principal, { rate, rateBasis }, duration);
            totalAmount = principal + interest;
            break;
        default:
            interest = Interest.simple(principal, { rate, rateBasis }, duration);
            totalAmount = principal + interest;
    }
    document.getElementById("principal").innerHTML = principal.toString();
    document.getElementById("interest").innerHTML = interest.toString();
    document.getElementById("totalAmount").innerHTML = totalAmount.toString();
});
