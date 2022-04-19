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
    inquirer.prompt([
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
        .then(function ({ name, role, id, email }) {
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
            inquirer.prompt([
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
            // Function to determine the prompts for the new member
            .then(function({roleInfo, addTeam}) {
                let newMember;
                if (role === "Manager") {
                    newMember = new Manager (name, id, email, roleInfo);
                }
                else if (role === "Engineer") {
                    newMember = new Engineer (name, id, email, roleInfo);
                }
                else if (role === "Intern") {
                    newMember = new Intern (name, id, email, roleInfo);
                }
                employees.push(newMember);
                addhtml(newMember)
                .then(function(){
                    if (addTeam === 'Yes') { 
                        addMember();
                    }
                    else { 
                        finishHtml();
                    }
                });
            });
        });
        
}

// Function to start generating html
function generateHtml() {
    const html = `<!DOCTYPE html>
    <html lang= "en">
    <head>
        <meta charset= "UTF-8">
        <meta name= "viewport" content= "width=device-width, initial-scale=1.0">
        <meta http-equiv= "X-UA-Compatible" content= "ie=edge">
        <link rel= "stylesheet" href= "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity= "sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin= "anonymous">
        <title>Team Profile Generator</title>
    </head>
    <body>
        <nav class= "navbar navbar-dark bg-dark mb-5">
            <span class= "navbar-brand mb-0 h1 w-100 text-center">Team Profile Generator</span>
        </nav>
        <div class= "container">
            <div class="row">`;
    fs.writeFile("./output/team.html", html, function(err) {
        if (err) {
            console.log(err);
        }
    });
    console.log("start");
}

// Function to add to html depending on role selected
function addHtml(member) {
    return new Promise(function(resolve, reject) {
        const name = member.getName();
        const role = member.getRole();
        const id = member.getId();
        const email = member.getEmail();
        let data = '';
        if (role === "Engineer") {
            const gitHub = member.getGithub();
            data = `<div class= "col-6">
            <div class= "card mx-auto mb-3" style= "width: 18rem">
            <h5 class= "card-header">${name}<br /><br />Engineer</h5>
            <ul class= "list-group list-group-flush">
                <li class= "list-group-item">ID: ${id}</li>
                <li class= "list-group-item">Email Address: ${email}</li>
                <li class= "list-group-item">GitHub: ${gitHub}</li>
            </ul>
            <div>
        </div>`;
        }
        else if (role === "Intern") {
            const school = member.getSchool();
            data = `<div class= "col-6">
            <div class= "card mx-auto mb-3" style= "width: 18rem">
            <h5 class= "card-header">${name}<br /><br />Intern</h5>
            <ul class= "list-group list-group-flush">
                <li class= "list-group-item">ID: ${id}</li>
                <li class= "list-group-item">Email Address: ${email}</li>
                <li class= "list-group-item">School: ${school}</li>
            </ul>
            <div>
        </div>`;
        }
        else {
            const workPhone = member.getworkPhone();
            data = `<div class= "col-6">
            <div class= "card mx-auto mb-3" style= "width: 18rem">
            <h5 class= "card-header">${name}<br /><br />Manager</h5>
            <ul class= "list-group list-group-flush">
                <li class= "list-group-item">ID: ${id}</li>
                <li class= "list-group-item">Email Address: ${email}</li>
                <li class= "list-group-item">School: ${workPhone}</li>
            </ul>
            <div>
        </div>`;
        }
        console.log("adding your team member now");
        fs.appendFile("./output/team.html", data, function (err) {
            if (err) {
                return reject(err);
            };
            return resolve();
        });
    });
}

//Function to finish writing HTML
function finishHtml() {

}
