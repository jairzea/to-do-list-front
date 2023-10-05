import http from "./config/http"
import { LOGIN_ENDPOINT } from "../constants/endpoints"

export const loginService = async (userData) => {
    const response = await http.post(LOGIN_ENDPOINT, userData);
    return response
}