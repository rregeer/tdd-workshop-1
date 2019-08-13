'use strict';

const test = require('ava');
const sinon = require('sinon');

const Calculator = require('../src/Calculator');
const CalculationService = require('../src/CalculationService');

test.beforeEach(t => {
  t.context.calculatorStub = sinon.createStubInstance(Calculator);
  t.context.calculationService = new CalculationService(t.context.calculatorStub);
});

test('Add request will return the sum of two numbers', t => {
    const { calculationService, calculatorStub } = t.context;
      
    const result = calculationService.request(1, 2, '+');

    t.is(result, 3);
});