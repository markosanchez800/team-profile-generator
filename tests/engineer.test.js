const Engineer = require('../engineer')

describe('adding a git name',()=>{
    it('Should store a github user using the constructor',()=>{
        const testVal = 'markogit';
        const testGuy = new Engineer('Marko',888,'email@email.com',testVal);
        expect(testGuy.github).toBe(testVal);
    });
});
describe('getGithub',()=>{
    it('Should return github user with function',()=>{
        const testVal = 'markogit';
        const testGuy = new Engineer('Marko',888,'email@email.com',testVal);
        expect(testGuy.getGithub()).toBe(testVal);
    });
});
describe('getRole',()=>{
    it('Should return the role with function',()=>{
        const testVal = 'Engineer';
        const testGuy = new Engineer('Marko',888,'email@email.com','markogit');
        expect(testGuy.getRole()).toBe(testVal);
    });
});