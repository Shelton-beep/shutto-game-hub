import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "16491997297c495a950eeb23b0a225",
  },
});
