import axios from "axios"


export const Axios= axios.create({
    baseURL: process.env.REACT_BASE_URL || "http://localhost:3002/",
    headers: {
      "Content-Type":"application/json",
    }
  })

  console.log(process.env.REACT_BASE_URL,"hhbh");