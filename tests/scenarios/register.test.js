import { assert } from "chai";
import ReqresAPI from "$root/page/reqres.api";
import * as data from "$root/data/user.data";

describe("Get Detail User", () => {
  it("Should successfull detail user", async () => {
    const response = await ReqresAPI.show(data.ID.id);

    assert.equal(response.status, 200);
  });
});

describe("Register Failed", () => {
  it("Should unccessfull register when insert invalid email", async () => {
    const response = await ReqresAPI.register(data.INVALID_REGISTER);

    assert.equal(response.status, 400);
    assert.equal(
      response.data.error,
      "Note: Only defined users succeed registration"
    );
  });
  it("Should successfull register when insert valid email", async () => {
    const response = await ReqresAPI.register(data.VALID_REGISTER);
    assert.equal(response.status, 200);
  });
});

describe("Update with put", () => {
  it("Should succesfull update with method put", async () => {
    const response = await ReqresAPI.put(data.ID, data.VALID_UPDATE);

    assert.equal(response.status, 200);
  });
});

describe("Update with patch", () => {
  it("Should succesfull update with method patch", async () => {
    const response = await ReqresAPI.patch(data.ID, data.VALID_UPDATE);

    assert.equal(response.status, 200);
  });
});

describe("Delete User", () => {
  it("Should succesfull delete", async () => {
    const response = await ReqresAPI.delete(data.ID.id);

    assert.equal(response.status, 204);
  });
});
