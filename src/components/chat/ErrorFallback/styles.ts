import { styled } from "styled-components";

export const ErrorContainer = styled.div`
  padding: 1.5rem;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.error};
  border-radius: 8px;
  margin: 1rem;
  text-align: center;
`;

export const RetryButton = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  margin: 0.5rem;
  border-radius: 4px;
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.9;
  }
`;
export const ReloadButton = styled(RetryButton)`
  background: ${({ theme }) => theme.colors.secondary};
`;

export const EmptyState = styled.div`
  padding: 2rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.secondary};
`;