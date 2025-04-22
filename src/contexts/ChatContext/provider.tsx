import { createContext, ReactNode, useCallback, useEffect, useMemo, useState } from 'react';
import { useSessionStorage } from '../../hooks/useSessionStorage';
import { fetchMessages } from '../../services';
import { initSocket, sendMessage as sendSocketMessage } from '../../services/socket';
import { Message } from '../../types/chat';
import { ChatContextType } from './types';

export const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const ChatProvider = ({ children }: { children: ReactNode }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [username, setUsername] = useSessionStorage<string | null>('chat-username', null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const clearError = useCallback(() => setError(null), []);

  const loadMessages = useCallback(async () => {
    try {
      const messages = await fetchMessages({ limit: 100 });
      setMessages(messages);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to load messages'));
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleNewMessage = useCallback((msg: Message) => {
    setMessages(prev => prev.some(m => m.id === msg.id) ? prev : [...prev, msg]);
  }, []);

  const sendMessage = useCallback(async (content: string) => {
    if (!username) return;
    try {
      const serverMessage = await sendSocketMessage(content, username);
      setMessages(prev => [...prev, serverMessage]);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to send message'));
    }
  }, [username]);

  useEffect(() => {
    loadMessages();
    const cleanup = initSocket({ 
      onMessage: handleNewMessage, 
      onError: (error: string) => setError(new Error(error)) 
    });
    return cleanup;
  }, [loadMessages, handleNewMessage]);

  const value = useMemo(() => ({
    messages,
    username,
    isLoading,
    error,
    clearError,
    setUsername,
    sendMessage
  }), [messages, username, isLoading, error, setUsername, sendMessage, clearError]);

  return (
    <ChatContext.Provider value={value}>
      {children}
    </ChatContext.Provider>
  );
};