const Employee = require("./Employee");

class Intern extends Employee {
    constructor (name, id, email, officeNumber){
        super(name, id, email, officeNumber)
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber = officeNumber;
    }   
    teamMemberRole(){
        return "Intern"
    }
}

module.exports = Intern;