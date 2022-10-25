const Employee = require("./Employee");

class Engineer extends Employee {
    constructor (name, id, email, officeNumber){
        super(name, id, email, officeNumber)
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber = officeNumber;
    }   
    teamMemberRole(){
        return "Engineer"
    }
}

module.exports = Engineer;