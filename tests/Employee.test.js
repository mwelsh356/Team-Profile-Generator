// Using employee constructor
const Employee = require('../lib/Employee');

// Tests if it can get name from getName
test('gets employee name', () => {
    const employee = new Employee('Mike', 90, 'michaelwelsh356@gmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

// Tests to see if it can get id from getID
test('gets employee ID', () => {
    const employee = new Employee('Mike', 90, 'michaelwelsh356@gmail.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

// Tests to see if it can get email from getEmail
test('gets employee email', () => {
    const employee = new Employee('Mike', 90, 'michaelwelsh356@gmail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

// Tests to see if it can get role from getRole
test('gets employee role', () => {
    const employee = new Employee('Mike', 90, 'michaelwelsh356@gmail.com');

    expect(employee.getRole()).toEqual('Employee');
});

