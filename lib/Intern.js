const Employee = require("./Employee");

class Intern extends Employee {
    constructor (name, id, email, number){
        super(name, id, email, number)
        
    }
    getRole(){
        return 'Intern'
    }
}

    

module.exports = Intern;