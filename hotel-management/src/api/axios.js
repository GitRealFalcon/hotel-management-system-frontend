import axios from "axios";
import confDotENV from "../conf/confDotENV"
import { useNavigate } from "react-router-dom";


const api = axios.create({
    baseURL: confDotENV.baseUrl || "http://localhost:8000/api/v1",
    withCredentials: true,
    headers:{
        "Content-Type" : "application/json"
    }
})

api.interceptors.request.use((config)=>{
    const token = localStorage.getItem("token")
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }

    return config
})

api.interceptors.request.use((res)=>res,(err)=>{
    const navigate = useNavigate()
    const status = err.response?.status;
    if (status === 401) {
        localStorage.removeItem("token")
       navigate('/login')
    }

    return Promise.reject(err)
})

export default api