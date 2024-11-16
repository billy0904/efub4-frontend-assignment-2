import axios from "axios";

export const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_URL,
    headers: { 
        "Content-Type": "application/json", 
        authorization: `Bearer ${process.env.READONLY_ACCESS_TOKEN}`},
    });
    
    instance.interceptors.response.use(
        (response) => response.data,
        async (error) => {
            console.error("API 에러:", error.message);
            return Promise.reject(error);
        }
);
    