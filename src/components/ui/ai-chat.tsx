"use client";
import React, { useState } from 'react';
import { Input } from './input';
import { Button } from './button';

interface AIChatProps {
  title?: string;
}

export function AIChat({ title = "AI Chat" }: AIChatProps) {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<string[]>([]);

  const sendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, message]);
      setMessage('');
    }
  };

  return (
    <section className="flex flex-col h-full bg-card border border-border shadow-sm">
      {/* Settings / Options */}
      <header className="p-2 border-b border-border">
        <h2 className="text-sm font-medium text-foreground">{title}</h2>
        {/* Placeholder for future settings controls */}
      </header>

      {/* Chat messages */}
      <div className="flex-1 overflow-y-auto p-2 space-y-2">
        {messages.length === 0 ? (
          <p className="text-muted-foreground text-sm">No messages yet.</p>
        ) : (
          messages.map((msg, idx) => (
            <div key={idx} className="bg-muted p-2 rounded shadow-sm text-sm">
              {msg}
            </div>
          ))
        )}
      </div>

      {/* Input area */}
      <footer className="p-2 border-t border-border flex items-center space-x-2">
        <Input
          type="text"
          className="flex-1 bg-input border-none rounded px-2 py-1 text-sm focus:ring-0 placeholder-muted-foreground"
          placeholder="Type a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
        />
        <Button
          className="bg-primary text-primary-foreground h-auto py-1 px-3"
          onClick={sendMessage}
        >
          Send
        </Button>
      </footer>
    </section>
  );
}
