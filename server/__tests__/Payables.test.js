const request = require('supertest');
const app = require("../app");
describe(`POST /PayablesTest`, () => {
    jest.setTimeout(100000);
    test(`Testing add Payables Positive results`, async () => {
        const response = await request(app).post(`/addPayments`).send({
            email: `mojohnnylerato@gmail.com`,
            item:
                {
                    testing:"Integration testing",

                }
        });
        expect(response.body.Response).toBe('Invoice successfully added by: mojohnnylerato@gmail.com');
    })
    test(`Testing getPayables to be Defined`, async () => {
        const response = await request(app).post(`/getPayments`).send({
            email: `testing@gmail.com`,
            item:
                {
                    testing:"Integration testing",

                }
        });
        expect(response.body).toBeDefined()

    })
    test(`Testing getPayables Correct Object`, async () => {
        const response = await request(app).post(`/getPayments`).send({
            email: `testing@gmail.com`,
            item:
                {
                    testing:"Integration testing",

                }
        });
        expect(response.body.testing).toBe('Integration testing')

    })
    test(`Testing Success Server Response`, async () => {
        const response = await request(app).post(`/addPayments`).send({
            email: `testing@gmail.com`,
            item:
                {
                    testing:"Integration testing",

                }
        });
        expect(response.status).toBe(200);

    })
})