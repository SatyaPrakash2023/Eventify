import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/api/user";

export const ListOfUser = () => axios.get(`${REST_API_BASE_URL}/list`);
export const cretaeUser = (user) => axios.post(REST_API_BASE_URL, user);
export const LoginUser = (userName, passwordFst) => 
    axios.post(`${REST_API_BASE_URL}/Login`, {
      userName: userName,
      passwordFst: passwordFst,
    });