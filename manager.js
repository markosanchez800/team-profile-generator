const Employee = require('./employee')

class Manager extends Employee {
    constructor(name,id,email,officeNum){
        super(name,id,email);
        this.officeNum = officeNum;
    }

    getOfficeNum(){
        return this.officeNum;
    }
    getRole(){
        console.log('Manager');
        return 'Manager';
    }
}

/*
const Marko = new Manager('Marko',888,'markosanchez800@gmail.com',08);
Marko.getName();
Marko.getId();
Marko.getEmail();
Marko.getRole();
*/

module.exports = Manager;