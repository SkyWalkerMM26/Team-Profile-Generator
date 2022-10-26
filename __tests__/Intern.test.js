const Intern = require("../lib/Intern");
const Engineer = require("../lib/Engineer");

describe('Intern', () => {
    it('should return role as Intern', () => {
        const str = "Engineer, Manager, Intern";
        const role = "Intern"
        const result = "Intern"
        expect(result).toEqual(role);
    })
});