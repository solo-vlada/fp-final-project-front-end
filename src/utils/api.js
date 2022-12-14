import axios from "axios";

const flaskDb = axios.create({
  // Replace with actual url for backend
  baseURL: "https://concept-crew-server.herokuapp.com",
});

export const getAllListings = (filter) => {
  let path = "/";
  if (filter) path = `?category=${filter}`;
  return flaskDb.get(path).then(({ data }) => {
    console.log(data);
    return data;
  });
};

export const getMyListings = (id, filter) => {
  let path = `?user=${id}`;
  if (filter) path += `&category=${filter}`;
  return flaskDb.get(path).then(({ data }) => {
    console.log(data);
    return data;
  });
};

export const deleteMyListing = (id) => {
  return flaskDb.delete(`/delete/${id}`).then((response) => {
    console.log(response);
    return response;
  });
};
