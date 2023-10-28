import React from 'react'
import useOnline from './useOnline'
const ChatPage = () => {
  const isOnline = useOnline(2000);
  return isOnline ? "I am here to chat" : "offline for chat"
}

export default ChatPage