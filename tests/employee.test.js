const Employee = require('../employee')

describe('Employee', () => {
    it('Can create new employee objects',() => {
        const testGuy = new Employee();
        expect(typeof(testGuy)).toBe("object");
    });
    it('Can add and store a name',()=>{
        const name = 'Marko';
        const testGuy = new Employee(name);
        expect(testGuy.name).toBe(name);
    });
    it('Can add and store a id',()=>{
        const id = 888;
        const testGuy = new Employee('Marko',id);
        expect(testGuy.id).toBe(id);
    })
    it('Can add and store an email',()=>{
        const email = 'email@email.com';
        const testGuy = new Employee('Marko',888,email);
        expect(testGuy.email).toBe(email);
    })
});

