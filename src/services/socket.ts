import { io, Socket } from 'socket.io-client';
import { Message } from '../types/chat';
import { getSocketConfig } from './httpClient';

type SocketEvents = {
  ServerToClient: {
    'newMessage': (message: Message) => void;
    'error': (error: string) => void;
  };
  ClientToServer: {
    'sendMessage': (
      payload: { content: string; username: string },
      callback: (res: { error?: string; message?: Message }) => void
    ) => void;
  };
};

let socket: Socket<SocketEvents['ServerToClient'], SocketEvents['ClientToServer']>;

export const getSocket = () => {
  if (!socket) {
    socket = io(getSocketConfig().baseURL, {
      autoConnect: false,
      reconnectionAttempts: 5,
      reconnectionDelay: 1000,
      transports: ['websocket'],
      //auth: (cb) => cb({ token: localStorage.getItem('token') }),
    });
  }
  return socket;
};

/**
 * Initialize socket connection with handlers
 */
export const initSocket = (
  handlers: {
    onMessage: (message: Message) => void;
    onError: (error: string) => void;
  }
) => {
  const socket = getSocket();

  const onMessage = (msg: Message) => handlers.onMessage(msg);
  const onError = (error: string) => handlers.onError(error);

  socket.on('newMessage', onMessage);
  socket.on('error', onError);

  if (!socket.connected) socket.connect();

  return () => {
    socket.off('newMessage');
    socket.off('error');
    socket.disconnect();
  };
};

/**
 * Send message with acknowledgment
 */
export const sendMessage = async (
  content: string,
  username: string
): Promise<Message> => {
  return new Promise((resolve, reject) => {
    socket.emit(
      'sendMessage', 
      { content, username },
      (response) => {
        if (response.error) {
          const err = new Error(response.error);
          console.error('Message send error:', err);
          reject(err);
        } else {
          resolve(response.message!);
        }
      }
    );
  });
};
