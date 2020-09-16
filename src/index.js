"use strict";
var simpleInterest = function (principal, rate, time) {
    var formula = (principal * rate.rate * time) / 100;
    var result;
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
var compoundInterestAmount = function (principal, rate, time) {
    var exponent = time;
    var formula = principal * Math.pow((1 + rate.rate / 100), exponent);
    var result;
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
};
document.getElementById("button").addEventListener("click", function () {
    // Data from forms are collected as string, but some properties are of type 'number', hence the conversion in some cases.
    var interestType = document.getElementById("interest-type").value;
    var principal = Number(document.getElementById("amount").value);
    var rate = Number(document.getElementById("rate").value);
    var rateBasis = document.getElementById("rate-basis").value;
    var duration = Number(document.getElementById("duration").value);
    var interest, totalAmount;
    switch (interestType) {
        case "compound":
            totalAmount = compoundInterestAmount(principal, { rate: rate, rateBasis: rateBasis }, duration);
            interest = totalAmount - principal;
            break;
        default:
            interest = simpleInterest(principal, { rate: rate, rateBasis: rateBasis }, duration);
            totalAmount = principal + interest;
    }
    document.getElementById("principal").innerHTML = principal.toString();
    document.getElementById("interest").innerHTML = interest.toString();
    document.getElementById("totalAmount").innerHTML = totalAmount.toString();
});
