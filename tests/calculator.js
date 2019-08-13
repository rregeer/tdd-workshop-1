'use strict';

const test = require('ava');

const Calculator = require('../src/Calculator');

test.beforeEach(t => {
    t.context.calculator = new Calculator();
});

test('Will return the sum of two numbers', t => {
    const { calculator } = t.context;
});