import axios from "axios";
import authHeader from "../app/authHeader";
const API_URL = process.env.REACT_APP_HOST_BASE_URL;

const getMeeting = () => {
    return axios.get(API_URL + "/meeting/all", {
        headers: authHeader(),
    });
};
const getMeetingById = (id) => {
    return axios.get(API_URL + `/meeting/${id}`, {
      headers: authHeader(),
    });
};
const addMeeting = (data) => {
    return axios.post(API_URL + "/meeting/add", data, {
      headers: authHeader(),
    });
};
const updateMeeting = (data) => {
  return axios.post(API_URL + "/meeting/update", data, {
    headers: authHeader(),
  });
};
const deleteMeeting = (id) => {
  return axios.post(API_URL + `/meeting/${id}`, {
    headers: authHeader(),
  });
};


export default {
  getMeetingById,
  getMeeting,
  addMeeting,
  updateMeeting,
  deleteMeeting,
};
