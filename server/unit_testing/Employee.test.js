require("dotenv").config();
const employee_functions = require('../routes/functions/Employees');


const object = {
    BirthDate: '21/12/1989',
    PersonType: 'Buyers',
    SocialSecurityNumber: 33447362,
    Age: 88,
    Title: 'Mrs',
    Country: 'South Africa',
    FullName: 'Jessica ahaddsa'
}

describe("testing generatingID ", () => {
    test('testing Two firstLetters', () => {
        expect('kio').toBe('kio');
    });
})