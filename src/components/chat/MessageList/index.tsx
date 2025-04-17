import { ErrorBoundary } from 'react-error-boundary';
import { useChat } from '../../../contexts/ChatContext';
import { useAutoScroll } from '../../../hooks/useAutoScroll';
import { ErrorFallback } from '../ErrorFallback';
import { ErrorContainer } from '../ErrorFallback/styles';
import { Container, MessageHeader, MessageItem, Timestamp, Username, } from './styles';

export const MessageList = () => {
  const { messages, isLoading, username, error } = useChat();
  const containerRef = useAutoScroll([messages]);

  if (error) {
    return (
      <ErrorContainer>
        <h3>Connection Error</h3>
        <p>{error.message}</p>
      </ErrorContainer>
    );
  }

  if (isLoading) {
    return <>Loading....</>; 
  }

  return (
    <ErrorBoundary 
    FallbackComponent={ErrorFallback}
    onError={(error, info) => {
      console.error('MessageList crashed:', error, info);
    }}
  >
    <Container ref={containerRef}>
      {
      messages.length === 0 ? (<>No messages yet. Be the first to say something!</>) : (
      messages.map((msg) => (
        <MessageItem 
          key={msg.id} 
          $isCurrentUser={(msg.username ?? '').toLowerCase() === (username ?? '').toLowerCase()}
        >
          <MessageHeader>
            <Username>{msg.username}</Username>
            <Timestamp>
              {
              new Date(msg.createdAt).toLocaleTimeString([], { 
                hour: '2-digit', 
                minute: '2-digit',
                timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
                }
              )}
            </Timestamp>
          </MessageHeader>
          <div>{msg.content}</div>
        </MessageItem>
      ))
    )}  
    </Container>
    </ErrorBoundary>
  );
}