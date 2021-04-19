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
    .then((response)=>{
        topDog = new Manager(response.name,response.id,response.email,response.officeNum);
        const manHtml = `
        <div class="col-md-4">
        <div class="card text-dark bg-info mb-3" style="border: 3px solid rgb(137, 190, 207); border-radius:15px; margin-bottom:8px">
        <div class="card-header text-center"><h4>${topDog.name}</h4></div>
        <div class="card-header text-center"><h4>${topDog.getRole()} ☕️</h4></div>
        <div class="card-body">
        <ul class="list-group list-group-flush">
        <li class="list-group-item"><strong>ID:</strong> ${topDog.id}</li>
        <li class="list-group-item"><strong>Email:</strong> <a href="mailto:${topDog.email}"> ${topDog.email}</a></li>
        <li class="list-group-item"><strong>Office Number:</strong> ${topDog.officeNum}</li>
        </div>
        </div>
        </div>
        `
        fs.appendFile('teamprofile.html',manHtml,function(err){
            if(err){
                console.log(err);
            }
        })
        console.log('Manager Added');
        addMore();
    });
}

function addMore(){
    inquirer
        .prompt([
        {
            type:'list',
            message:'Add another employee?',
            choices:['Yes','No'],
            name:'confirm',
        }
        ])
        .then((response)=> {
            if(response.confirm === 'Yes'){
                inquirer
                .prompt([
                    {
                        type:'list',
                        message:'Which kind of employee?',
                        choices:['Engineer','Intern'],
                        name:'eOI',
                    }
                ])
                .then((response) => {
                    if(response.eOI === 'Engineer'){
                        inquirer
                        .prompt([
                            {
                                type:'input',
                                message: 'Engineers Name?',
                                name: 'name',
                            },
                            {
                                type:'input',
                                message:'Engineers Id?',
                                name: 'id',
                            },
                            {
                                type:'input',
                                message:'Engineers Email?',
                                name:'email',
                            },
                            {
                                type:'input',
                                message:'Github Name?',
                                name:'github',
                            }
                        ])
                        .then((response) => {
                            newGuy = new Engineer(response.name,response.id,response.email,response.github);
                            const engHtml =
                             `
                             <div class="col-md-4">  
                             <div class="card text-dark bg-info mb-3" style="border: 3px solid rgb(137, 190, 207); border-radius:15px; margin-bottom:8px">
                             <div class="card-header text-center"><h4>${newGuy.name}</h4></div>
                             <div class="card-header text-center"><h4>${newGuy.getRole()} 🛠</h4></div>
                             <div class="card-body">
                             <ul class="list-group list-group-flush">
                             <li class="list-group-item"><strong>ID:</strong> ${newGuy.id}</li>
                             <li class="list-group-item"><strong>Email:</strong> <a href="mailto:${newGuy.email}"> ${newGuy.email}</a></li>
                             <li class="list-group-item"><strong>Github:</strong> <a href="https://github.com/${newGuy.github}"> ${newGuy.github}</a></li>
                             </div>
                             </div>
                             </div> 
                             `
                             fs.appendFile('teamprofile.html',engHtml,function(err){
                                if(err){
                                    console.log(err);
                                }
                             })
                             console.log('Engineer Added');
                             addMore();
                        })
                    }
                    else if (response.eOI === 'Intern'){
                        inquirer
                        .prompt([
                            {
                                type:'input',
                                message: 'Interns Name?',
                                name: 'name',
                            },
                            {
                                type:'input',
                                message:'Interns Id?',
                                name: 'id',
                            },
                            {
                                type:'input',
                                message:'Interns Email?',
                                name:'email',
                            },
                            {
                                type:'input',
                                message:'School Name?',
                                name:'school',
                            }
                        ])
                        .then((response) => {
                            newGuy = new Intern(response.name,response.id,response.email,response.school);
                            const intHtml = 
                            `
                            <div class="col-md-4">   
                            <div class="card text-dark bg-info mb-3" style="border: 3px solid rgb(137, 190, 207); border-radius:15px; margin-bottom:8px">
                             <div class="card-header text-center"><h4>${newGuy.name}</h4></div>
                             <div class="card-header text-center"><h4>${newGuy.getRole()} 🎓</h4></div>
                             <div class="card-body">
                             <ul class="list-group list-group-flush">
                             <li class="list-group-item"><strong>ID:</strong> ${newGuy.id}</li>
                             <li class="list-group-item"><strong>Email:</strong> <a href="mailto:${newGuy.email}"> ${newGuy.email}</a></li>
                             <li class="list-group-item"><strong>School:</strong> ${newGuy.school}</li>
                             </div>
                             </div>
                             </div>
                            `
                            fs.appendFile('teamprofile.html',intHtml,function(err){
                                if(err){
                                    console.log(err);
                                }
                            })
                            console.log('Intern Added');
                            addMore();
                        })
                    }
                })
            }
            else if (response.confirm === 'No'){
                console.log('Team Built');
                endHtml();
            }
        })
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
        <header class="text-center border-bottom bg-info">
        <h1>Team Profiles</h1>
        </header>
        <div class="row row-cols-1 row-cols-md-2 g-4">
        <div class="col">
    `;
    fs.writeFile('teamprofile.html',html,function(err){
        if (err){
            console.log(err);
        }
    });
    console.log("HTML Initialized");
}

function endHtml(){
    const finishedHtml = 
    `
    </div>
    </div>
    </body>
    </html>
    `;
    fs.appendFile('teamprofile.html',finishedHtml,function(err){
        if (err){
            console.log(err);
        }
    });
    console.log('Html Complete');
}





init();