import axios from 'axios'

// production url
const baseURL = "https://express-validator-proj.herokuapp.com/api"
// development url
// const baseURL = "http://localhost:8080/api"

export const api = axios.create({
  baseURL: {baseURL},
  headers: {
    "Content-type": "application/json"
  }
});