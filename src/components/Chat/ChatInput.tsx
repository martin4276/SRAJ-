import React, { useState } from 'react';
import { Send } from 'lucide-react';
import './ChatInput.scss';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message.trim());
      setMessage('');
    }
  };

  return (
    <form className="chat-input" onSubmit={handleSubmit}>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Tapez votre message..."
        className="form-control"
      />
      <button type="submit" className="btn btn-primary-custom" disabled={!message.trim()}>
        <Send size={20} />
      </button>
    </form>
  );
};

export default ChatInput;