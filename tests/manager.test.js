const Manager = require('../manager')

describe('adding an office number',()=>{
    it('Should add an office number using constructor',()=>{
        const testVal = 118;
        const testGuy = new Manager('Marko',888,'email@email.com',testVal);
        expect(testGuy.officeNum).toBe(testVal);
    });
});
describe('getOfficeNum',()=>{
    it('Should return office number with function',()=>{
        const testVal = 118;
        const testGuy = new Manager('Marko',888,'email@email.',testVal);
        expect(testGuy.getOfficeNum()).toBe(testVal);
    });
});
describe('getRole',()=>{
    it('Should return role with function',()=>{
        const testVal = 'Manager';
        const testGuy = new Manager('Marko',888,'email@email.com',118);
        expect(testGuy.getRole()).toBe(testVal);
    });
});