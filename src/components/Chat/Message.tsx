import React from 'react';
import { User, Bot } from 'lucide-react';
import './Message.scss';

interface MessageProps {
  content: string;
  sender: 'user' | 'bot' | 'counselor';
  timestamp: Date;
  counselorName?: string;
}

const Message: React.FC<MessageProps> = ({ content, sender, timestamp, counselorName }) => {
  const getIcon = () => {
    switch (sender) {
      case 'bot':
        return <Bot size={24} className="message-icon bot" />;
      case 'counselor':
        return <User size={24} className="message-icon counselor" />;
      default:
        return <User size={24} className="message-icon user" />;
    }
  };

  return (
    <div className={`message ${sender}`}>
      <div className="message-content">
        {getIcon()}
        <div className="message-bubble">
          {sender === 'counselor' && counselorName && (
            <div className="counselor-name">{counselorName}</div>
          )}
          <p>{content}</p>
          <small className="message-time">
            {timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </small>
        </div>
      </div>
    </div>
  );
};

export default Message;