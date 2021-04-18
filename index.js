const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');


function init(){
    initHTML();
    makeManager();
}


function makeManager(){
    inquirer
    .prompt([
        {
            type:'input',
            message: 'Managers Name?',
            name: 'name',
        },
        {
            type:'input',
            message:'Managers Id?',
            name: 'id',
        },
        {
            type:'input',
            message:'Managers Email?',
            name:'email',
        },
        {
            type:'input',
            message:'Managers Office Number?',
            name:'officeNum',
        }
    ])
}

function initHTML(){
    const html = `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="utf-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <title></title>
            <meta name="description" content="">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" integrity="sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu" crossorigin="anonymous">
        </head>
        <body>
           
            <script src="" async defer></script>
        </body>
    </html>
    `;
    fs.writeFile('teamprofile.html',html,function(err){
        if (err){
            console.log(err);
        }
    });
    console.log("HTML Initialized");
}










init();