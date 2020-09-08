"use strict";
var simpleInterest = function (principal, rate, time) {
    var result;
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
};
var compoundInterestAmount = function (principal, rate, time) {
    var result;
    if (rate.rate === 0) {
        result = principal;
    }
    else if (rate.rateBasis === time.durationBasis) {
        result = principal * Math.pow((1 + rate.rate / 100), time.duration);
    }
    else if (rate.rateBasis === 'month' && time.durationBasis === 'year') {
        result = principal * Math.pow((1 + rate.rate / 100), (time.duration * 12));
    }
    else {
        result = principal * Math.pow((1 + rate.rate / 100), (time.duration / 12));
    }
    return Number(result.toFixed(2));
};
document.getElementById("button").addEventListener("click", function (event) {
    // event.preventDefault();
    var interestType = document.getElementById("interest-type").value;
    var principal = Number(document.getElementById("amount").value);
    var rate = Number(document.getElementById("rate").value);
    var rateBasis = document.getElementById("rate-basis").value;
    var duration = Number(document.getElementById("duration").value);
    var durationBasis = document.getElementById("duration-basis").value;
    var interest, totalAmount;
    switch (interestType) {
        case "compound":
            totalAmount = compoundInterestAmount(principal, { rate: rate, rateBasis: rateBasis }, { duration: duration, durationBasis: durationBasis });
            interest = totalAmount - principal;
            break;
        default:
            interest = simpleInterest(principal, { rate: rate, rateBasis: rateBasis }, { duration: duration, durationBasis: durationBasis });
            totalAmount = principal + interest;
            break;
    }
    document.getElementById("principal").innerHTML = principal.toString();
    document.getElementById("interest").innerHTML = interest.toString();
    document.getElementById("totalAmount").innerHTML = totalAmount.toString();
});
