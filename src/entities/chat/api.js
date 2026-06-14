import { apiClient } from "../../shared/api/client";


export const sendMessageToLLM = async (userMessage) => {
    const response = await apiClient.post(`/chat`, { text: userMessage});
    return response.data;
};