import {ExpressApplication} from "@tsed/common";
import {TestContext} from "@tsed/testing";
import * as SuperTest from "supertest";
import {Server} from "../../../Server";


describe("Calendars", () => {
  let request;
  // bootstrap your expressApplication in first
  beforeAll(TestContext.bootstrap(Server));
  beforeEach(TestContext.inject([ExpressApplication],(expressApplication: ExpressApplication) => {
    request = SuperTest(expressApplication);
  }));
  afterEach(TestContext.reset);

  describe("GET /api/calendars", () => {
    it("should return all calendars", async () => {
      const response = await request.get("/api/calendars").expect(200);      
      expect(response.text).toEqual("This action returns all calendars");
    });
  });
});