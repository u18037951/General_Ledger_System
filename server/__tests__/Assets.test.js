const request = require('supertest');
const app = require("../app");

describe(`POST /GetAssets`, () => {
    jest.setTimeout(100000);
    test(`Testing getAssets Positive`, async () => {

        const response = await request(app).post(`/getAssets`).send();
        expect(response.body).toBeDefined();

    })
    test(`Testing getAssets Negative results`, async () => {
        const response = await request(app).post(`/getAssets`).send(

            {
                Name: "TestAssets",
                Asset: {
                    Name: "just testing"
                }
            }
        );
        expect(response.body).toBeDefined();

    })
    test(`Testing addAssets Positive`, async () => {
        const response = await request(app).post(`/addAssets`).send(
            {
                Name: "TestAssets",
                Asset: {
                    Name: "just testing"
                }
            }
        );
        expect(response.status).toBe(200);

    })
    test(`Testing Delete Assets`, async () => {
        const response = await request(app).post(`/deleteAssets`).send(
            {
                Name: "TestAssets",
                Asset: {
                    Name: "just testing"
                }
            }
        );
        expect(response.status).toBe(200);

    })
    test(`Testing Delete Assets Negative Results`, async () => {
        const response = await request(app).post(`/deleteAssets`).send(
            {
                Name: "TestAssets",
                Asset: {
                    Name: "just testing"
                }
            }
        );
        expect(response.body).toBeDefined();

    })

})