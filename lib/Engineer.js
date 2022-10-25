const Employee = require("./Employee");

class Engineer extends Employee {
    constructor (name, id, email, officeNumber, role){
        super(name, id, email, officeNumber)
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber = officeNumber;
        this.role = role;
    }   
    teamMemberRole(){
        return "Engineer"
    }
}

module.exports = Engineer;