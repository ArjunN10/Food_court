import axios from "axios"


export const Axios= axios.create({
    baseURL: process.env.REACT_BASE_URL || "https://food-court-1.onrender.com/",
    headers: {
      "Content-Type":"application/json",
    }
  })

  console.log(process.env.REACT_BASE_URL,"hhbh");