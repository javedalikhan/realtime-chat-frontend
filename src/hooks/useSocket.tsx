import { useEffect } from "react";
import { useChat } from "../contexts/ChatContext";
import { getSocket } from "../services/socket";

export const useSocket = () => {
    const { sendMessage } = useChat();
    
    useEffect(() => {
        const socket = getSocket();
        socket.connect();
    
        socket.on("connect", () => {
            console.log("Connected to server");
        });
    
        //incoming messages
        socket.on("newMessage", (message) => {
            sendMessage(message.content);
        });
    
        socket.on("disconnect", () => {
        console.log("Disconnected from server");
        });
    
        return () => {
            socket.off("newMessage");
            socket.disconnect();
        };
    }, [sendMessage]);
    
    return { socket: getSocket() };
}