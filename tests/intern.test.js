const Intern = require('../intern')

describe('adding a school name',()=>{
    it('Should add a school name using the constructor',()=>{
        const testVal = 'DVC';
        const testGuy = new Intern('Marko',888,'email@email.com',testVal);
        expect(testGuy.school).toBe(testVal);
    });
});
describe('getSchool',()=>{
    it('Should return the school with function',()=>{
        const testVal = 'DVC';
        const testGuy = new Intern('Marko',888,'email@email.',testVal);
        expect(testGuy.getSchool()).toBe(testVal);
    });
});
describe('getRole',()=>{
    it('Should return the role with function',()=>{
        const testVal = 'Intern';
        const testGuy = new Intern('Marko',888,'email@email.com','DVC');
        expect(testGuy.getRole()).toBe(testVal);
    });
});