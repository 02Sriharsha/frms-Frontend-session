import axios from "axios";

export const BASE_URL = "http://localhost:9191/api/v1"

const apiClient = axios.create({
    baseURL : BASE_URL
})

// function createDonor(donorData){
//     apiClient.post("/donors" , donorData) 
// }

export const createDonor = (donorData) => apiClient.post("/donors" , donorData)