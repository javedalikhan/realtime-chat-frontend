import styled, { ThemeProvider } from 'styled-components';
import { MessageInput, MessageList, UsernameForm } from './components/chat';
import { ChatProvider } from './contexts/ChatContext';
import { GlobalStyles } from './styles/GlobalStyles';
import theme from './styles/theme';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ChatProvider>
        <AppContainer>
          <UsernameForm />
          <MessageList />
          <MessageInput />
        </AppContainer>
      </ChatProvider>
    </ThemeProvider>
  );
}