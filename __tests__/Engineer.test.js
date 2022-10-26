const Engineer = require("../lib/Engineer");

describe('Engineer', () => {
    it('should return role as Engineer', () => {
        const str = Engineer.answers.role
        const result = "Engineer"
        expect(str).toEqual(result);
    })
});