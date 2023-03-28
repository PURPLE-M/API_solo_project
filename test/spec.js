const { expect, assert } = require('chai')
const config = require('../knexfile')
const knex = require('knex')(config)
const customerModel = require('../src/family/family.model')
const CUSTOMER_TABLE = customerModel.CUSTOMER_TABLE

describe("customer", () => {
    describe("getAll", () => {
        it("should return an array of customers", async () => {
            const customers = await customerModel.getAll();
            //console.log("customers",customers)
            expect(customers).to.be.an.instanceof(Array);
        });
        it("should accept a limit argument", async () => {
            const customers = await customerModel.getAll(3);
            expect(customers.length).to.be.at.most(3);
        });
    });
})
