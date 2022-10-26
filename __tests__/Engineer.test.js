const Engineer = require("../lib/Engineer");

describe('Engineer', () => {
    it('should return github username', () => {
        const str = "gitHubUsername";
        const ans = new Engineer("Name", 1, "name@gmail.com", str);
        expect(ans.github).toBe(str);
    })
});