import { Message } from "../types/chat";
import { httpClient } from "./httpClient";
/**
 * Fetches messages with pagination support
 * @param params Optional query parameters
 * @returns Promise<Message[]>
 */
export const fetchMessages = async (params?: {
  limit?: number;
  beforeId?: string; // For pagination
}): Promise<Message[]> => {
  try {
    const response = await httpClient.get<Message[]>('/messages', {
      params: {
        limit: params?.limit || 100,
        before: params?.beforeId
      }
    });
    return response.data.reverse();
  } catch (error) {
    throw new Error('Failed to fetch messages: ' + (error as Error).message);
  }
};