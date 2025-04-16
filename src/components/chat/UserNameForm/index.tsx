import { useState, useEffect } from 'react';
import { useChat } from '../../../contexts/ChatContext';
import { Badge, Button, Form, Input } from './styles';

export const UsernameForm = () => {
  const [input, setInput] = useState('');
  const { username, setUsername } = useChat();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      setUsername(input.trim());
    }
  };

  return username ? (
    <Badge>Hello, {username}!</Badge>
  ) : (
    <Form onSubmit={handleSubmit}>
      <Input
        id="username"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter username"
        required
        minLength={3}
        maxLength={20}
      />
      <Button type="submit">Join</Button>
    </Form>
  );
}