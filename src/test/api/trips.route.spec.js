const request = require("supertest");
const app = require("../../app");

describe("TEST API - TURNOS", () => {
  //TEST ENDPOINT
  describe("GET CONTULTAR TODOS LOS TURNOS /api/turnos/all", () => {
    let response;
    beforeEach(async () => {
      response = await request(app).get("/api/turnos/all").send();
    });

    // validate route is ok
    it("route ok", async () => {
      expect(response.status).toBe(200);
      expect(response.headers["content-type"]).toContain("json");
    });

    // validate array
    it("returned array", async () => {
      expect(response.body.response).toBeInstanceOf(Array);
    });
  });

  describe("POST CREAR TURNOS /api/turnos/crear", () => {
    let response;
    const objectPost = {
      fecha_inicio: "09/03/2023",
      fecha_fin: "09/03/2023",
      id_servicio: 1,
    };
    beforeEach(async () => {
      // hacemos petición de inserción
      response = await request(app).post("/api/turnos/crear").send(objectPost);
    });

    // validamos que la ruta funcione
    it("route ok", async () => {
      expect(response.status).toBe(200);
      expect(response.headers["content-type"]).toContain("json");
    });

    // validamos si el return es array
    it("returned array", async () => {
      expect(response.body.response).toBeInstanceOf(Array);
    });

    it("returned id", async () => {
      expect(response.body.response.length > 0).toBeDefined();
    });
  });
});
