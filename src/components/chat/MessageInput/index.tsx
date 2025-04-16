import { useState } from 'react';
import { useChat } from '../../../contexts/ChatContext';
import { Button, Form, Input } from './styles';

export const MessageInput = () => {
  const { username, sendMessage } = useChat();
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submitMessage();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      submitMessage();
    }
  };
  const submitMessage = async () => {
    const trimmedMessage = message.trim();
    if (!trimmedMessage || !username) return;
    if (message.trim() && username) {
      try {
        // Clear the input after sending
        setMessage('');
        await sendMessage(message.trim());
      } catch (error) {
        alert('Failed to send message');
        console.error('Failed to send message:', error);
      }
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        value={message}
        onKeyDown={handleKeyDown}
        onChange={(e) => {
          setMessage(e.target.value);
        }}
        placeholder={username ? "Type a message..." : "Set a username first"}
        disabled={!username}
      />
      <Button type="submit" disabled={!message.trim() || !username}>
        Send
      </Button>
    </Form>
  );
}