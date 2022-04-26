// Manager constructor
const Manager = require('../lib/Manager');

// Creating manager object
test('creates manager object', () => {
    const manager = new Manager('Mike', 90, 'michaelwelsh356@gmail.com', 216-555-6232);

    expect(manager.workPhone).toEqual(expect.any(Number));
});

// Tests to see if it gets the role
test('gets role of employee', () => {
    const manager = new Manager('Mike', 90, 'michaelwelsh356@gmail.com', 216-555-6232);

    expect(manager.getRole()).toEqual('Manager');
});