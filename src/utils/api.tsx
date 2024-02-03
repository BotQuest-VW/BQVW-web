import axios from "axios";

const api = axios.create({
    baseURL: "https://apibqvw.azurewebsites.net/"
})

export default api