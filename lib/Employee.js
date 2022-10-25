class Employee {
    constructor(name, id, email, officeNumber, role){
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber = officeNumber;
        this.role = role;
    }

name(){
    return this.name
}

id() {
    return this.id
}

email(){
    return this.email
}

officeNumber(){
    return this.officeNumber
}
role(){
    return this.role
}
teamMemberRole(){
    return "Employee";
}
}

module.exports = Employee;