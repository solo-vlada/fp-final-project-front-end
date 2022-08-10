import axios from "axios";

const flaskDb = axios.create({
  // Replace with actual url for backend
  baseURL: "https://concept-crew-server.herokuapp.com",
});

export const getAllListings = () => {
  // Replace endpoint with actual one from backend
  return flaskDb.get("/").then(({ data }) => {
    console.log(data);
    return data;
  });
};

export const getMyListings = (id) => {
  console.log("userID",id)
  // Replace endpoint with actual one from backend
  return flaskDb.get(`?user=${id}`).then(({ data }) => {
    console.log(data);
    return data;
  });
};
