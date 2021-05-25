import axios from 'axios'

export const api = axios.create({
  baseURL: "https://express-validator-proj.herokuapp.com/api",
  headers: {
    "Content-type": "application/json"
  }
});