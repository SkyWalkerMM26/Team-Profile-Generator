const Employee = require("../lib/Employee")

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
