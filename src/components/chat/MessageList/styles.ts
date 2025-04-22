import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  padding: 1rem;
  overflow-y: auto;
  background: #f8fafc;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const MessageItem = styled.div<{ $isCurrentUser: boolean }>`
  max-width: 80%;
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  border-radius: ${props => props.$isCurrentUser ? '1rem 1rem 0 1rem' : '1rem 1rem 1rem 0'};
  background: ${props => props.$isCurrentUser ? '#2563EB' : '#fff'};
  color: ${props => props.$isCurrentUser ? '#fff' : '#1A202C'};
  align-self: ${props => props.$isCurrentUser ? 'flex-end' : 'flex-start'};
  box-shadow: 0 1px 2px rgba(0,0,0,0.1);
`;

export const MessageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.25rem;
  font-size: 0.875rem;
`;

export const Username = styled.span`
  font-weight: bold;
`;

export const Timestamp = styled.span`
  opacity: 0.7;
  font-size: 0.75rem;
`;
export const InfoMessage = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.text};
  border-radius: ${({ theme }) => theme.radii.md};
  font-size: 1rem;
  text-align: center;
  margin-top: auto;
  margin-bottom: auto;
  max-width: 80%;
  align-self: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
`;