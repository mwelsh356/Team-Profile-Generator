// Importing employee constructor
const Employee = require('./Employee');

// Engineer constructor extends employee constructor
class Engineer extends Employee {
    constructor (name, id, email, github) {
        // Calls employee constructor
        super (name, id, email);
        
        this.github = github;
    }

    // Returning github info from user input
    getGithub () {
        return this.github;
    }

    // Override the employee role to engineer
    getRole () {
        return 'Engineer';
    }
}

// Exporting
module.exports = Engineer;