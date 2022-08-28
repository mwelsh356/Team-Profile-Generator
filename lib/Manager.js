// Importing employee constructor
const Employee = require('./Employee');

// Manager constructor extends employee constructor
class Manager extends Employee {
    constructor (name, id, email, workPhone) {
        // Calling employee constructor
        super (name, id, email);

        this.workPhone = workPhone;
    }

    // Override employee role to manager
    getRole () {
        return "Manager";
    }
}

// Exporting
module.exports = Manager;