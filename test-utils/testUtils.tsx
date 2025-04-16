import { render, RenderOptions } from '@testing-library/react';
import { ReactElement, ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { ChatContext, ChatContextType } from '../src/contexts/ChatContext';
import { GlobalStyles } from '../src/styles/GlobalStyles';
import theme from '../src/styles/theme';

type AllProvidersProps = {
  children: ReactNode;
  contextValue: ChatContextType;
};

const AllProviders = ({ children, contextValue }: AllProvidersProps) => {
  return (
    // Add more global providers as needed
    <ThemeProvider theme={theme}>
       <GlobalStyles />
        <ChatContext.Provider value={contextValue}>
          {children}
        </ChatContext.Provider>
     </ThemeProvider>
  );
};

type CustomRenderOptions = RenderOptions & {
  contextValue: ChatContextType;
};

const defaultContextValue: ChatContextType = {
  messages: [],
  username: null,
  setUsername: vi.fn(),
  sendMessage: vi.fn(),
  isLoading: false,
  error: null,
  clearError: vi.fn(),
};

const customRender = (
  ui: ReactElement,
  { contextValue = defaultContextValue, ...options }: Partial<CustomRenderOptions> = {}
) => {
  return render(ui, {
    wrapper: ({ children }) => (
      <AllProviders contextValue={contextValue}>{children}</AllProviders>
    ),
    ...options,
  });
};

export * from '@testing-library/react';
export { customRender as render };

