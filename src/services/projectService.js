import axios from "axios";
import authHeader from "../app/authHeader";
const API_URL = process.env.REACT_APP_HOST_BASE_URL;

const getProjects = () => {
    return axios.get(API_URL + "/project/all", {
        headers: authHeader(),
    });
};
const getProjectById = (id) => {
    return axios.get(API_URL + `/project/${id}`, {
      headers: authHeader(),
    });
};
const addProject = (data) => {
    return axios.post(API_URL + "/project/add", data, {
      headers: authHeader(),
    });
};

const updateProject = (data) => {
    return axios.post(API_URL + "/project/update", data, {
      headers: authHeader(),
    });
};
const deleteProject = (id) => {
    return axios.post(API_URL + `/project/${id}`, {
      headers: authHeader(),
    });
};



export default {
  getProjectById,
  getProjects,
  addProject,
  updateProject,
  deleteProject,
};
