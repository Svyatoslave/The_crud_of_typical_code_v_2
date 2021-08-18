import * as request from "supertest";

import bootstrap from "../src/server";

describe("Users", () => {
  let id;
  let app;

  const createdUser = {
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  };

  const updatedUser = {
    username: "Ilon",
    email: "mask@tesla.com",
    address: {
      street: "Deer Creek Rd",
      suite: "CA 94304",
      city: "Palo Alto",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-800-613-8840",
    website: "https://www.tesla.com/",
    company: {
      name: "TESLA",
      catchPhrase: "Buy Tesla",
      bs: "Eazy money",
    },
  };

  beforeEach(async () => {
    app = await bootstrap();
  });

  it("POST /users", async () => {
    const res = await request(app).post("/users").send(createdUser);

    id = res.body._id;

    expect(res.statusCode).toEqual(201);
    expect(res.body.name).toEqual(createdUser.name);
    expect(res.body.username).toEqual(createdUser.username);
  });

  it("GET /users", async () => {
    const res = await request(app).get("/users").send();

    expect(res.statusCode).toEqual(200);
  });

  it("GET /users/:id", async () => {
    const res = await request(app).get(`/users/${id}`).send();

    expect(res.statusCode).toEqual(200);
    expect(res.body.name).toEqual(createdUser.name);
    expect(res.body.username).toEqual(createdUser.username);
  });

  it("PUT /users/:id", async () => {
    const res = await request(app).put(`/users/${id}`).send(updatedUser);

    expect(res.statusCode).toEqual(200);
    expect(res.body.name).toEqual(updatedUser.name);
  });

  it("DELETE /users/:id", async () => {
    const res = await request(app).delete(`/users/${id}`).send();

    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual(true);
  });
});
