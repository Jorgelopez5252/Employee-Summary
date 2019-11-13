// NPM Modules
const inquirer = require("inquirer");

// Local Modules
const render = require("./lib/htmlrenderer");

// Constructors
const Manager = require("./lib/constructors/Manager");
const Engineer = require("./lib/constructors/Engineer");
const Intern = require("./lib/constructors/Intern");

// Global Variables
// const teamMembers = [
//   new Manager("Brent", 1, "brent@trilogyed.com", 200),
//   new Engineer("Tucker", 2, "tbeauchamp@2u.com", "tuckerbeauchamp"),
//   new Intern("Becky", 3, "becky@becky.com", "UofA"),
//   new Intern("Shelly", 4, "shelly@shelly.com", "UofA")
// ];





function managerprompt(){
  inquirer.prompt(
    [
      {
        type: "input",
        name: "mangerName",
        message: "what is your name?"
      },
      {
        type: "input",
        name:"id",
        message: "What is your ID number"
      },
      {
        type: "input",
        name: "email",
        message: "What is your email?"
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is your office number?"
      }
    ]
  ).then(function (response){
    const {mangerName, id, email, officeNumber} = response;
    console.log(response)
  });
  
  };
  managerprompt();

// const teamMembers = [
//   {
//     type: "input",
//     name: "name",
//     message: "What is the name of the Employee?"
//   },
//   {
//     type: "list",
//     message: "What type of employee is this?",
//     choices: ["Engineer", "Intern"]
//   },
//   {
//     type: "input",
//     id: "id",
//     message: "What is the employee number/id?"
//   },
//   {
//     type: "input",
//     email: "email",
//     message: "What is the email associated with this employee?"
//   },
//   {
//     type: "input",
//     gitHub: "github",
//     message: "What is the gitHub account associated with this employee?"
//   },
// ];
/***
 * THIS PROJECT IS NOT COMPLETE.
 * YOU WILL NEED TO BUILD YOUR HTML LAYOUTS
 * PROMPT THE USER FOR ALL OF THEIR DIFFERENT TEAM MEMBERS
 */

async function init() {
  render(teamMembers);
}

// init();
