const Intern = require("../lib/Intern");

describe('Intern', () => {
    it('should return school name', () => {
        const str = "SFSU";
        const ans = new Intern("Name", 1, "name@gmail.com", str);
        expect(ans.school).toBe(str);
    })
});