import { assert } from "chai";
import ReqresAPI from "$root/page/reqres.api";
import * as data from "$root/data/user.data";

describe("Register", () => {
  it("Should unccessfull register when insert invalid email", async () => {
    const response = await ReqresAPI.register(data.INVALID_REGISTER);

    assert.equal(response.status, 400);
  });
});
