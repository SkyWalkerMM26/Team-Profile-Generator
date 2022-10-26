const Manager = require("../lib/Manager");

describe('Manager', () => {
    it('should return manager office number', () => {
        const officeAns = 26;
        const ans = new Manager("Name", 1, "name@gmail.com", officeAns);
        expect(ans.officeNumber).toBe(officeAns);
    })
});