'use strict'

class CalculationService {
    constructor(calculator) {
        this._calculator = calculator;
    }

    request(value1, value2, action) {
        switch(action) {
            case '+':
                 return this._calculator.add(value1, value2);
            case '!':
                 return this._calculator.substract(value1, value2);
            case '*':
                return this._calculator.multiply(value1, value2);
            case '/':
                return this._calculator.divide(value2, value1);
        }
    }
}

module.exports = CalculationService;