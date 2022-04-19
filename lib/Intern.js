// Importing employee constructor
const Employee = require('./Employee');

// Intern constructor extends employee constructor
class Intern extends Employee {
    constructor (name, id, email, school) {
        //calling employee constructor
        super (name, id, email);

        this.school = school;
    }

    // Returning school from user input
    getSchool () {
        return this.school;
    }

    // Override employee role to intern
    getRole () {
        return "Intern";
    }
}

// Exporting
module.exports = Intern;