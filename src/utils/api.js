import axios from "axios";

const flaskDb = axios.create({
  // Replace with actual url for backend
  baseURL: "something on heroku",
});

export const getAllListings = () => {
  // Replace endpoint with actual one from backend
  return flaskDb.get("/endpoint").then(({ data }) => {
    console.log(data);
    return data;
  });
};

export const getMyListings = () => {
  // Replace endpoint with actual one from backend
  return flaskDb.get("/endpoint").then(({ data }) => {
    console.log(data);
    return data;
  });
};
