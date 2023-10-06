import http from "./config/http"
import { TASKS_ENDPOINT } from "../constants/endpoints"

export const getSuggestedTasks = async () => {
    const response = await http.get(TASKS_ENDPOINT);
    return response
}