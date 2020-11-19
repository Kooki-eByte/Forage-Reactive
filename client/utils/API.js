import axios from "axios";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getFoods: function () {
    return axios.get("/api/foods");
  },

  getFood: function (id) {
    return axios.get("/api/foods/" + id);
  },

  deleteFood: function (id) {
    return axios.delete("/api/foods/" + id);
  },

  saveFood: function (foodData) {
    return axios.post("/api/foods", foodData);
  },
};
