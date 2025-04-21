import { fireEvent, render, screen } from '@testing-library/react';
import { Mock, vi } from 'vitest';
import { useChat } from '../../../contexts/ChatContext';
import { UsernameForm } from './';


vi.mock('../../../contexts/ChatContext', () => ({
  useChat: vi.fn(),
}));

describe('UsernameForm', () => {
  const setUsernameMock = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders input form when username is not set', () => {
    (useChat as Mock).mockReturnValue({ username: '', setUsername: setUsernameMock });

    render(<UsernameForm />);

    expect(screen.getByPlaceholderText('Enter username')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /join/i })).toBeInTheDocument();
  });

  it('shows greeting badge when username is set', () => {
    (useChat as Mock).mockReturnValue({ username: 'JohnDoe', setUsername: setUsernameMock });

    render(<UsernameForm />);

    expect(screen.getByText(/hello, JohnDoe!/i)).toBeInTheDocument();
    expect(screen.queryByPlaceholderText('Enter username')).not.toBeInTheDocument();
  });

  it('calls setUsername with trimmed input on submit', () => {
    (useChat as Mock).mockReturnValue({ username: '', setUsername: setUsernameMock });

    render(<UsernameForm />);
    const input = screen.getByPlaceholderText('Enter username') as HTMLInputElement;
    const button = screen.getByRole('button', { name: /join/i });

    fireEvent.change(input, { target: { value: '  Alice  ' } });
    fireEvent.click(button);

    expect(setUsernameMock).toHaveBeenCalledWith('Alice');
  });

  it('does not call setUsername if input is empty or whitespace', () => {
    (useChat as Mock).mockReturnValue({ username: '', setUsername: setUsernameMock });

    render(<UsernameForm />);
    const input = screen.getByPlaceholderText('Enter username') as HTMLInputElement;
    const button = screen.getByRole('button', { name: /join/i });

    fireEvent.change(input, { target: { value: '   ' } });
    fireEvent.click(button);

    expect(setUsernameMock).not.toHaveBeenCalled();
  });

  it('enforces minLength and maxLength via input attributes', () => {
    (useChat as Mock).mockReturnValue({ username: '', setUsername: setUsernameMock });

    render(<UsernameForm />);
    const input = screen.getByPlaceholderText('Enter username') as HTMLInputElement;

    expect(input).toHaveAttribute('minLength', '3');
    expect(input).toHaveAttribute('maxLength', '20');
  });
});