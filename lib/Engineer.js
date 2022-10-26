const Employee = require("./Employee");

class Engineer extends Employee {
    constructor (name, id, email, number){
        super(name, id, email, number)
}
getRole(){
    return 'Engineer'
}
} 
    
module.exports = Engineer;