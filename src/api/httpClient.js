// import axios from 'axios';

// export const httpClient = axios.create({
//     baseURL:import.meta.env.VITE_API_URL,
//     headers:{
//         "Content-Type":"application/json"
//     }
// })
// export const END_POINT = '/student/students'
import axios from "axios";
export const httpClient = axios.create({
  baseURL: "https://689e1e603fed484cf8765f83.mockapi.io/",
  headers: {
    "Content-Type": "application/json",
  },
});

export const END_POINT = "/student/students";
