"use strict";
exports.__esModule = true;
exports.compound = exports.simple = void 0;
exports.simple = function (principal, rate, time) {
    var formula = (principal * rate.rate * time) / 100;
    var interest;
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
        interest: interest,
        totalAmount: principal + interest
    };
};
exports.compound = function (principal, rate, time) {
    var exponent = time;
    var formula = principal * Math.pow((1 + rate.rate / 100), exponent) - principal;
    var interest;
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
        interest: interest,
        totalAmount: principal + interest
    };
};
