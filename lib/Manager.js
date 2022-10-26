const Employee = require("./Employee");

class Manager extends Employee {
    constructor (name, id, email, number, role){
        super(name, id, email, number, role)
    }
    getRole(){
    return 'Manager'
}
}

module.exports = Manager;