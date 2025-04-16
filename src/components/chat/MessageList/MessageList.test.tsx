import { render, screen } from '../../../../test-utils/testUtils';
import { ChatContextType } from '../../../contexts/ChatContext';
import { Message } from '../../../types/chat';
import { MessageList } from './';

const mockMessages: Message[] = [
  {
    id: '1',
    username: 'Alice',
    content: 'Hello there!',
    createdAt: new Date(),
  },
  {
    id: '2',
    username: 'Bob',
    content: 'Hi Alice!',
    createdAt: new Date(),
  },
];

const mockContextValue: ChatContextType = {
  messages: mockMessages,
  username: 'Alice',
  setUsername: vi.fn(),
  sendMessage: vi.fn(),
  isLoading: false,
  error: null,
  clearError: vi.fn(),
};

describe('MessageList', () => {
  it('renders messages correctly', () => {
    render(<MessageList />, { contextValue: mockContextValue });

    expect(screen.getByText('Hello there!')).toBeInTheDocument();
    expect(screen.getByText('Hi Alice!')).toBeInTheDocument();
    expect(screen.getByText('Alice')).toBeInTheDocument();
    expect(screen.getByText('Bob')).toBeInTheDocument();
  });

  it('renders loading state', () => {
    render(<MessageList />, {
      contextValue: {
        ...mockContextValue,
        isLoading: true,
        messages: [],
      },
    });

    expect(screen.getByText(/Loading/i)).toBeInTheDocument();
  });

  it('renders error state', () => {
    render(<MessageList />, {
      contextValue: {
        ...mockContextValue,
        error: new Error('Something went wrong!'),
        isLoading: false,
      },
    });

    expect(screen.getByText(/Connection Error/i)).toBeInTheDocument();
    expect(screen.getByText(/Something went wrong!/i)).toBeInTheDocument();
  });

  it('renders no messages state', () => {
    render(<MessageList />, {
      contextValue: {
        ...mockContextValue,
        messages: [],
        isLoading: false,
      },
    });
    expect(screen.getByText(/No messages yet/i)).toBeInTheDocument();
  });
});