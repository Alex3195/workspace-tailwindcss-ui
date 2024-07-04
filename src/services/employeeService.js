import axios from "axios";
import authHeader from "../app/authHeader";
const API_URL = process.env.REACT_APP_HOST_BASE_URL;

const getEmployee = () => {
    return axios.get(API_URL + "/employee/all", {
        headers: authHeader(),
    });
};
const getEmployeeById = (id) => {
    return axios.get(API_URL + `/employee/${id}`, {
      headers: authHeader(),
    });
};
const addEmployee = (data) => {
    return axios.post(API_URL + "/employee/add", data, {
      headers: authHeader(),
    });
};
const updateEmployee = (data) => {
  return axios.post(API_URL + "/employee/update", data, {
    headers: authHeader(),
  });
};
const deleteEmployee = (id) => {
  return axios.post(API_URL + `/employee/${id}`, {
    headers: authHeader(),
  });
};


export default {
  getEmployeeById,
  getEmployee,
  addEmployee,
  updateEmployee,
  deleteEmployee,
};
