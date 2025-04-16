import { render, screen, fireEvent} from '../../../../test-utils/testUtils';
import { vi } from 'vitest';
import { MessageInput } from './';
import { useChat } from '../../../contexts/ChatContext';

vi.mock('../../../contexts/ChatContext');

// mock implementation of useChat
const sendMessageMock = vi.fn();
const useChatMock = useChat as unknown as jest.Mock;

describe('MessageInput', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders input and send button', () => {
    useChatMock.mockReturnValue({ username: 'John', sendMessage: sendMessageMock });

    render(<MessageInput />);
    expect(screen.getByPlaceholderText(/type a message/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /send/i })).toBeInTheDocument();
  });

  it('disables input and button when username is missing', () => {
    useChatMock.mockReturnValue({ username: '', sendMessage: sendMessageMock });

    render(<MessageInput />);
    expect(screen.getByPlaceholderText(/set a username first/i)).toBeDisabled();
    expect(screen.getByRole('button', { name: /send/i })).toBeDisabled();
  });

  it('updates input value when user types', () => {
    useChatMock.mockReturnValue({ username: 'John', sendMessage: sendMessageMock });

    render(<MessageInput />);
    const input = screen.getByPlaceholderText(/type a message/i);
    fireEvent.change(input, { target: { value: 'Hello' } });
    expect(input).toHaveValue('Hello');
  });

  it('send button is disabled with empty or whitespace message', () => {
    useChatMock.mockReturnValue({ username: 'John', sendMessage: sendMessageMock });

    render(<MessageInput />);
    const button = screen.getByRole('button', { name: /send/i });
    expect(button).toBeDisabled();

    const input = screen.getByPlaceholderText(/type a message/i);
    fireEvent.change(input, { target: { value: '   ' } });
    expect(button).toBeDisabled();
  });

  it('submits message on button click', async () => {
    useChatMock.mockReturnValue({ username: 'John', sendMessage: sendMessageMock });

    render(<MessageInput />);
    const input = screen.getByPlaceholderText(/type a message/i);
    const button = screen.getByRole('button', { name: /send/i });

    fireEvent.change(input, { target: { value: 'Hello World' } });
    fireEvent.click(button);
    expect(sendMessageMock).toHaveBeenCalledTimes(1);
    expect(input).toHaveValue('');
    expect(button).toBeDisabled();
    expect(sendMessageMock).toHaveBeenCalledWith('Hello World');
  });

  it('submits message on Enter key press', () => {
    useChatMock.mockReturnValue({ username: 'John', sendMessage: sendMessageMock });

    render(<MessageInput />);
    const input = screen.getByPlaceholderText(/type a message/i);
    fireEvent.change(input, { target: { value: 'Hi there' } });

    fireEvent.keyDown(input, { key: 'Enter' });
    expect(sendMessageMock).toHaveBeenCalledTimes(1);
    expect(input).toHaveValue('');
    expect(screen.getByRole('button', { name: /send/i })).toBeDisabled();
    expect(sendMessageMock).toHaveBeenCalledWith('Hi there');
  });

  it('does not submit on Shift+Enter', () => {
    useChatMock.mockReturnValue({ username: 'John', sendMessage: sendMessageMock });

    render(<MessageInput />);
    const input = screen.getByPlaceholderText(/type a message/i);
    fireEvent.change(input, { target: { value: 'Should not send' } });

    fireEvent.keyDown(input, { key: 'Enter', shiftKey: true });

    expect(sendMessageMock).not.toHaveBeenCalled();
  });

  it('shows alert and logs error on sendMessage failure', async () => {
    const error = new Error('Test error');  
    const alertMock = vi.spyOn(window, 'alert').mockImplementation(() => {});
    const errorMock = vi.spyOn(console, 'error').mockImplementation(() => {});
    sendMessageMock.mockRejectedValue(error);
    useChatMock.mockReturnValue({ username: 'John', sendMessage: sendMessageMock });

    render(<MessageInput />);
    const input = screen.getByPlaceholderText(/type a message/i);
    fireEvent.change(input, { target: { value: 'Oops' } });
    fireEvent.keyDown(input, { key: 'Enter' });

    await Promise.resolve(); // flush microtasks

    expect(alertMock).toHaveBeenCalledWith('Failed to send message');
    expect(errorMock).toHaveBeenCalledWith('Failed to send message:', error);

    alertMock.mockRestore();
    errorMock.mockRestore();
  });
});