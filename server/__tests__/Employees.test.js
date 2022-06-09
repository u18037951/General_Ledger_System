const request = require('supertest');
const app = require("../app");
const {resolveContent} = require("nodemailer/lib/shared");
describe(`POST /EmployeeTest`, () => {
    jest.setTimeout(100000);


    test(`Testing Add Employee Success`, async () => {
        const data = await request(app).post(`/removeEmployee`).send({
            email: `mojohnnylerato@gmail.com`,
            PersonType :`Employees`
        });
        const response = await request(app).post(`/addEmployee`).send({
            email: `mojohnnylerato@gmail.com`,
            info:
                {
                    FullName:"Johannes Moselane",
                    Title: "Mr",
                    BirthDate: "02/12/1999",
                    Country: "South Africa",
                    Age: 23,
                    PersonType: "Employees",
                    SocialSecurityNumber: 6627712

                }
        });

    })

    test(`Testing Remove employee Positive Results`, async () => {
        const response = await request(app).post(`/removeEmployee`).send({
            email: `mojohnnylerato@gmail.com`,
            PersonType :`Employees`
        });

        expect(response.body.response).toBe('Employee successfully deleted!');
    });
    test(`Testing Remove employee Error`, async () => {
        const response = await request(app).post(`/removeEmployee`).send({
            email: `mojohnnylerato@gmail.com`,
            PersonType :`Employees`
        });

        expect(response.status).toBe(200);
    });
    test(`Testing Add Employee Correct Request Object Client Exits`, async () => {
        const duplicate = await request(app).post(`/addEmployee`).send({
            email: `mojohnnylerato@gmail.com`,
            info:
                {
                    FullName:"Johannes Moselane",
                    Title: "Mr",
                    BirthDate: "02/12/1999",
                    Country: "South Africa",
                    Age: 23,
                    PersonType: "Employees",
                    SocialSecurityNumber: 6627712

                }
        });
        const response = await request(app).post(`/addEmployee`).send({
            email: `mojohnnylerato@gmail.com`,
            info:
                {
                    FullName:"Johannes Moselane",
                    Title: "Mr",
                    BirthDate: "02/12/1999",
                    Country: "South Africa",
                    Age: 23,
                    PersonType: "Employees",
                    SocialSecurityNumber: 6627712

                }
        });

        expect(response.body.message).toBe('unable to add client email already been registered! ');
    });
    test(`Testing getEmployee endpoint Success`, async () => {
        const response = await request(app).post(`/getEmployee`).send({
        });

        expect(response.body).toBeDefined();
    });
})

