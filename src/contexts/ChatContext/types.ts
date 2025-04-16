import { Message } from "../../types/chat";

  export type ChatContextType = {
    messages: Message[];
    username: string | null;
    setUsername: (name: string) => void;
    sendMessage: (content: string) => Promise<void>;
    isLoading: boolean;
    error: Error | null;
    clearError: () => void;
  };