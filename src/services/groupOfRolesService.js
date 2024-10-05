import axios from "axios";
import authHeader from "../app/authHeader";
const API_URL = process.env.REACT_APP_HOST_BASE_URL;

const getGroupOfRoles = (filter) => {
  return axios.post(
    API_URL + "/api/group-of-roles/all",
    JSON.stringify(filter),
    {
      headers: authHeader(),
    }
  );
};
const getGroupOfRoleById = (id) => {
  return axios.get(API_URL + `/api/group-of-roles/${id}`, {
    headers: authHeader(),
  });
};
const addGroupOfRole = (data) => {
  return axios.post(API_URL + "/api/group-of-roles/add", data, {
    headers: authHeader(),
  });
};

const updateGroupOfRole = (data) => {
  return axios.put(API_URL + "/api/group-of-roles/update", data, {
    headers: authHeader(),
  });
};

const deleteGroupOfRole = (id) => {
  return axios.delete(API_URL + `/api/group-of-roles/${id}`, {
    headers: authHeader(),
  });
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getGroupOfRoleById,
  getGroupOfRoles,
  addGroupOfRole,
  updateGroupOfRole,
  deleteGroupOfRole,
};
