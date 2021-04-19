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
    describe('getName',()=>{
        it('Should return the assigned name with function',()=>{
            const testVal = 'Marko';
            const testGuy = new Employee(testVal);
            expect(testGuy.getName()).toBe(testVal);
        });
    });
    describe('getId',()=>{
        it('Should return the assigned id with function',()=>{
            const testVal = 888;
            const testGuy = new Employee('Marko',testVal);
            expect(testGuy.getId()).toBe(testVal);
        });
    });
    describe('getEmail',()=>{
        it('Should return the assigned email with function',()=>{
            const testVal = 'email@email.com';
            const testGuy = new Employee('Marko',888,testVal);
            expect(testGuy.getEmail()).toBe(testVal);
        });
    });
    describe('getRole',()=>{
        it('Should return the assigned role with function',()=>{
            const testVal = 'Employee';
            const testGuy = new Employee('Marko',888,'email@email.com');
            expect(testGuy.getRole()).toBe(testVal);
        })
    })
});

