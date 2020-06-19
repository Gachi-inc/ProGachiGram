import { axios } from "core";

export default {
  signIn: postData => axios.post("/api/user/signin", postData),
  signUp: postData => axios.post("/api/user/signup", postData),
  verifyHash: hash => axios.get("/api/user/verify?hash=" + hash),
  getMe: () => axios.get("/api/user/me"),
  findUsers: query => axios.get("/api/user/find?query=" + query)
};