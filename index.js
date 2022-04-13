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
const addMember()
