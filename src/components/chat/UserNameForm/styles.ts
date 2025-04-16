import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  gap: 0.5rem;
  padding: 1rem;
  background: #e2e8f0;
`;

export const Input = styled.input`
  flex: 1;
  padding: 0.75rem;
  border-radius: 0.5rem;
  border: 1px solid #cbd5e0;
`;

export const Button = styled.button`
  padding: 0 1rem;
  background: #2563eb;
  color: white;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
`;

export const Badge = styled.div`
  padding: 0.5rem 1rem;
  background: #2563eb;
  color: white;
  border-radius: 1rem;
  margin: 1rem;
  display: inline-block;
`;