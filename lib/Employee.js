// Employee constructor
class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email
    }

    // Returning the name from user input
    getName () {
        return this.name;
    }

    // Returning ID from user input
    getId () {
        return this.id;
    }

    // Returning email from user input
    getEmail () {
        return this.email;
    }

    // Returning role
    getRole () {
        return 'Employee';
    }
}

// Exporting
module.exports = Employee;