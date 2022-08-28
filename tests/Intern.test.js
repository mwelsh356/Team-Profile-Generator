// Intern constructor
const Intern = require('../lib/Intern');

// Creating intern object
 test('creates intern object', () => {
     const intern = new Intern('Mike', 90, 'michaelwelsh356@gmail.com', 'tOSU');

     expect(intern.school).toEqual(expect.any(String));
 });

 // Tests to see if it can get the school
 test('gets school name', () => {
     const intern = new Intern('Mike', 90, 'tOSU');

     expect(intern.getSchool()).toEqual(expect.stringContainer(intern.school.toString()));
 });

 // Tests to see if it gets the role 
 test('gets role of employee', () => {
     const intern = new Intern('Mike', 90, 'tOSU');

     expect(intern.getRole()).toEqual('Intern');
 });

