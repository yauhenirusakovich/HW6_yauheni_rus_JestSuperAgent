import superagent from "superagent";

describe("my API requests", () => {
    const expObj2: { id: number, email: string, first_name: string, last_name: string } = {
        id: 52,
        email: "rusakovich2304@gmail.com",
        first_name: "Yauheni",
        last_name: "Rusakovich",
    }

    test("positive get test", async () => {
        let result = await superagent
            .get("https://reqres.in/");
        expect(result.status).toBe(200)
    });

    test("positive post test", async() => {
        const result = await superagent
            .post("https://reqres.in/api/users/2")
            .set("Content-Type", "application/json")
            .send({id: 52, email:"rusakovich2304@gmail.com"});
        expect(result.statusCode).toEqual(201);
        expect(result.body.id).toEqual(expObj2.id);
        expect(result.body.email).toEqual(expObj2.email);
    });

    test("positive put test", async () => {
        const result = await superagent
            .put("https://reqres.in/api/users/2")
            .set("Content-Type", "application/json")
            .send({id: 52, email: "rusakovich2304@gmail.com", first_name: "Yauheni", last_name: "Rusakovich"})
        expect(result.statusCode).toEqual(200);
        expect(result.body.first_name).toEqual(expObj2.first_name);
        expect(result.body.last_name).toEqual(expObj2.last_name);
    });

    test("positive delete test", async () => {
        const result = await superagent
            .delete("https://reqres.in/api/users/2")
        expect(result.statusCode).toEqual(204);
    });

    test("positive patch test", async () => {
        const result = await superagent
            .patch("https://reqres.in/api/users/2")
            .set("Content-Type", "application/json")
            .send({id: 52, email: "rusakovich2304@gmail.com"})
        expect(result.statusCode).toEqual(200);
        expect(result.body.id).toEqual(expObj2.id);
        expect(result.body.email).toEqual(expObj2.email);
    });

    test("positive head test", async () => {
        const result = await superagent
            .head("https://reqres.in/api/users/2")
        expect(result.statusCode).toEqual(200);
    });

    test("negative get test", async () => {
        let result = await superagent
            .get("https://reqres.in/");
        expect(result.status).toBe(201)
    });

    test("negative post test", async() => {
        const result = await superagent
            .post("https://reqres.in/api/users/2")
            .set("Content-Type", "application/json")
            .send({id: 50, email:"rusakovich2304@mail.com"});
        expect(result.statusCode).toEqual(200);
        expect(result.body.id).toEqual(expObj2.id);
        expect(result.body.email).toEqual(expObj2.email);
    });

    test("negative put test", async () => {
        const result = await superagent
            .put("https://reqres.in/api/users/2")
            .set("Content-Type", "application/json")
            .send({id: 48, email: "rusakevich2304@gmail.com", first_name: "Jony", last_name: "Noxwell"})
        expect(result.statusCode).toEqual(200);
        expect(result.body.first_name).toEqual(expObj2.first_name);
        expect(result.body.last_name).toEqual(expObj2.last_name);
    });

    test("negative delete test", async () => {
        const result = await superagent
            .delete("https://reqres.in/api/users/2")
        expect(result.statusCode).toEqual(200);
    });

    test("negative patch test", async () => {
        const result = await superagent
            .patch("https://reqres.in/api/users/2")
            .set("Content-Type", "application/json")
            .send({id: 59, email: "rusakovich2304@gmail.ru"})
        expect(result.statusCode).toEqual(200);
        expect(result.body.id).toEqual(expObj2.id);
        expect(result.body.email).toEqual(expObj2.email);
    });

    test("negative head test", async () => {
        const result = await superagent
            .head("https://reqres.in/api/users/2")
        expect(result.statusCode).toEqual(204);
    })
});
