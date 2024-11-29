import React, { useState } from 'react';
import Message from '../../components/Chat/Message';
import ChatInput from '../../components/Chat/ChatInput';
import { Bot, Users } from 'lucide-react';
import './Chat.scss';

type ChatMode = 'bot' | 'counselor';

const Chat: React.FC = () => {
  const [chatMode, setChatMode] = useState<ChatMode>('bot');
  const [messages, setMessages] = useState<Array<{
    content: string;
    sender: 'user' | 'bot' | 'counselor';
    timestamp: Date;
    counselorName?: string;
  }>>([]);

  const handleSendMessage = (content: string) => {
    const newMessage = {
      content,
      sender: 'user' as const,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, newMessage]);

    // Simulate response
    setTimeout(() => {
      const response = {
        content: chatMode === 'bot' 
          ? "Je suis Dr Bot, je vais vous aider avec vos questions sur la santé reproductive."
          : "Un conseiller vous répondra bientôt. Merci de votre patience.",
        sender: chatMode === 'bot' ? 'bot' as const : 'counselor' as const,
        timestamp: new Date(),
        counselorName: chatMode === 'counselor' ? 'Dr. Sophie' : undefined
      };
      setMessages(prev => [...prev, response]);
    }, 1000);
  };

  return (
    <div className="chat-page">
      <div className="chat-container">
        <div className="chat-header">
          <div className="chat-mode-selector">
            <button 
              className={`mode-btn ${chatMode === 'bot' ? 'active' : ''}`}
              onClick={() => setChatMode('bot')}
            >
              <Bot size={20} />
              <span>Dr Bot</span>
            </button>
            <button 
              className={`mode-btn ${chatMode === 'counselor' ? 'active' : ''}`}
              onClick={() => setChatMode('counselor')}
            >
              <Users size={20} />
              <span>Conseiller</span>
            </button>
          </div>
        </div>

        <div className="messages-container">
          {messages.map((message, index) => (
            <Message
              key={index}
              content={message.content}
              sender={message.sender}
              timestamp={message.timestamp}
              counselorName={message.counselorName}
            />
          ))}
        </div>

        <ChatInput onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
};

export default Chat;