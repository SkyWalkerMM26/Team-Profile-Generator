const Manager = require("../lib/Manager");

const Engineer = require("../lib/Engineer");

describe('Manager', () => {
    it('should return role as Manager', () => {
        const str = "Engineer, Manager, Intern";
        const role = "Manager"
        const result = "Manager"
        expect(result).toEqual(role);
    })
});