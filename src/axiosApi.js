import axios from 'axios'
// https://express-validator-proj.herokuapp.com/api
export const api = axios.create({
  baseURL: "http://localhost:8080/api",
  headers: {
    "Content-type": "application/json"
  }
});