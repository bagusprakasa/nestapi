import BaseAPI from "$root/page/base.api";
const ReqresAPI = {
  index: () => BaseAPI.get("/users"),
  show: (id) => BaseAPI.get("/users/" + id),
  register: (data) => BaseAPI.post("/register", data),
  put: (id, data) => BaseAPI.put("/users/" + id, data),
  patch: (id, data) => BaseAPI.patch("/users/" + id, data),
  delete: (id) => BaseAPI.delete("/users/" + id),
};

export default ReqresAPI;
