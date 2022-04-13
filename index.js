// Require node modules
const fs = require('fs');
const inquirer = require('inquirer');

// Require team profiles
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');

// Array to store team data
const teamArray = [];

// Function to add team member
const addMember = () => {
    inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: "Please enter the team member's name"
        },
        {
            type: 'list',
            name: 'role',
            message: "Please select the team member's role",
            choices: ['Manager', 'Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the team member's ID"
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the team member's email"
        },
    ])
    // Function to differentiate the last prompt based on role
    .then(function({name, role, id, email}) {
        let roleinfo = "";
        if (role === "Engineer") {
            roleinfo = "Github username";
        }
        else if (role === "Intern") {
            roleInfo = "school name";
        }
        else {
            roleinfo = "work phone number"
        }
        inquirer.prompt ([
         {
            type: 'input',
            name: 'roleinfo',
            message: `Please enter the team member's ${roleinfo}`
        },
        {
            type: 'list',
            name: 'addTeam',
            message: "Would you like to add more members?",
            choices: ['Yes', 'No']
        }
        ])
    })
}
