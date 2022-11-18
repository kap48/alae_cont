import axios from "axios";

const url = "http://localhost:8084/notes";

const remove = id => {
  return axios.delete(`${url}/${id}`);
};

const update = (id, newObject) => {
  return axios.put(`${url}/${id}`, newObject);
};

const getAll = () => {
  const req = axios.get(url);
  return req.then(res => res.data);
};

const create = newObject => {
  return axios.post(url, newObject);
};

export default { create, getAll, remove, update };
