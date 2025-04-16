import styled from 'styled-components';
export const Form = styled.form`
  display: flex;
  gap: 0.5rem;
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.background};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

export const Input = styled.textarea`
  flex: 1;
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  border-radius: 0.5rem;
  border: 1px solid #cbd5e0;
  resize: none;
  min-height: 50px;
  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
  }
`;

export const Button = styled.button`
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  &:disabled {
    opacity: 0.5;
  }
  &:hover {
    border-color: ${({ theme }) => theme.colors.secondary};
  }

  &:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }
`;