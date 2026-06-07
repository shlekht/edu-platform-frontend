import { apiClient } from "../../shared/api/client";


export const sendMessageToLLM = async (userMessage) => {
    console.log("send to llm:", userMessage)
    const response = await apiClient.post(`/chat`, { text: userMessage});
    return response.data;
};