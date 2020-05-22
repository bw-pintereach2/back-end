const supertest = require("supertest")
//const express = require("express")
const server = require("../api/server")
const db = require("../database/dbConfig")
const Users = require("../auth/auth-router")

beforeEach(async () => {
    await db("users").truncate()
})

afterAll(async () => {
    await db.destroy()
})

describe("Authentication Integration Tests", () => {
    it("Registers New User", async () => {
        const newTestUser = {
            username: "newUsersTest",
            password: "newPasswordTest"
        }

        const res = await supertest(server)
            .post("./api/auth/register")
            .send(newTestUser)

        expect(res.statusCode).toBe(201)
        expect(res.type).toBe("application/json")
        expect(res.body.id).toBe(1)
        expect(res.body.username).toMatch(/newuserstest/i)
    })

    it("Fails to Register New User", async () => {
        const res = await supertest(server)
            .post("./api/auth/register")

        expect(res.statusCode).toBe(500)
    })

    it("Logs in the User", async () => {
        await Users.add({
            username: "newUsersTest",
            password: "newPasswordTest"
        })

        await supertest(server)
            .post("./api/auth/login")
            .send({
                username: "newUsersTest",
                password: "newPasswordTest"
            })
            .then(res => {
                expect(res.statusCode).toBe(200)
                expect(res.type).toBe("application/json")
                expect(res.body.message).toMatch(/Welcome/i)
            })
    })
})

module.exports = server