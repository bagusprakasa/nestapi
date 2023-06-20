import chai, { assert, expect } from "chai";
import ReqresAPI from "$root/page/reqres.api";
import * as data from "$root/data/user.data";
import { getParams } from "$helper/lib.api";
import jsonSchema from "chai-json-schema";
import * as schema from "$root/schema/list-user.schema";

chai.use(jsonSchema);

describe("Get index User", () => {
  it("Should successfull get index user", async () => {
    const param = getParams(data.PARAM_USER["page"]);
    const response = await ReqresAPI.index(param);

    assert.equal(response.status, 200);
    expect(response.data).to.be.jsonSchema(schema.VALID_SCHEMA);
  });
});
