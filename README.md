
# Professional ReadMe Generator

## Author: Mai Moua 
[GitHub](https://github.com/SkyWalkerMM26)
[LinkedIn](https://www.linkedin.com/in/mai-moua-69a50517a/)

<img src="https://img.shields.io/badge/LICENSE-MIT-COLOR.svg?logo=LOGO">

## Description

This application is to generate a webpage that can provide a manager(s) an ease of access to their employee(Engineer or Intern) information: email and github username.

## Table of Contents 

- [Installation](#installation)
- [Usage](#usage)
- [Contributions](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

* Download package.JSON by running 'npm init -y' in terminal.
* Install inquirer by running 'npm i inquirer@8.2.4' in terminal.
* Install jess to run test by running 'npm install jess' in terminal.

## Usage

Click on the video to see how the application works.

[![IMAGE ALT TEXT HERE](https://img.youtube.com/vi/SrdHtp6Rn1w/0.jpg)](https://www.youtube.com/watch?v=SrdHtp6Rn1w)



## Tests

After performing the installation, run 'npm run test' in the terminal. These test is to ensure that the code works correctly for each of the profiles.These are the following tests:

* Employee Test
```const Employee = require("../lib/Employee")

describe('Employee', () => {
    it('should get be the object of answer', () => {
        const expectAns = new Employee();
        expect(typeof(expectAns)).toBe("object");
    });

    it('this should place name as a constructor argument', () => {
        const name = "Mai"
        const expectAns = new Employee(name);
        expect(expectAns.name).toBe(name);
    });
    it('this should place id as a constructor argument', () => {
        const idTestNumber = 1993
        const expectAns = new Employee("Mai", idTestNumber);
        expect(expectAns.id).toBe(idTestNumber);
    });
    it('this should place email as a constructor argument', () => {
        const emailTest = 1993
        const expectAns = new Employee("Mai", 26, emailTest);
        expect(expectAns.email).toBe(emailTest);
    });
});
```

* Manager Test
```
const Employee = require("./Employee");

class Manager extends Employee {
    constructor (name, id, email, officeNumber){
        super(name,id,email)
        this.officeNumber = officeNumber;
    }
    getRole(){
    return 'Manager'
    }
    getofficeNumber(){
    return this.officeNumber
    }
}

module.exports = Manager;
```

* Engineer Test
```
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor (name, id, email, github){
        super(name,id,email)
        this.github = github;
}
getRole(){
    return 'Engineer'
}
getGithub(){
    return this.github
}
} 
    
module.exports = Engineer;
```

* Intern Test
```
const Intern = require("../lib/Intern");

describe('Intern', () => {
    it('should return school name', () => {
        const str = "SFSU";
        const ans = new Intern("Name", 1, "name@gmail.com", str);
        expect(ans.school).toBe(str);
    })
});
```

## Questions
If you have any questions, open an issue or contact me directly at myia_moua26@yahoo.com. You can find more of my work at https://github.com/SkyWalkerMM26.

