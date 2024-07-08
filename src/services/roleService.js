import axios from "axios";
import authHeader from "../app/authHeader";
const API_URL = process.env.REACT_APP_HOST_BASE_URL;

const getRoles = () => {
    return axios.get(API_URL + "/roles/all", {
        headers: authHeader(),
    });
};
const getRoleById = (id) => {
    return axios.get(API_URL + `/roles/${id}`, {
      headers: authHeader(),
    });
};
const addRole = (data) => {
    return axios.post(API_URL + "/roles/add", data, {
      headers: authHeader(),
    });
};

const updateRole = (data) => {
    return axios.put(API_URL + "/roles/update", data, {
      headers: authHeader(),
    });
};
const deleteRole = (id) => {
    return axios.delete(API_URL + `/roles/${id}`, {
      headers: authHeader(),
    });
};



export default {
  getRoleById,
  getRoles,
  addRole,
  updateRole,
  deleteRole,
};
