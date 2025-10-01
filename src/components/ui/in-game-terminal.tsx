"use client";

import React, { useState } from 'react';
import { Input } from './input';
import { Button } from './button';

export function InGameTerminal() {
  const [command, setCommand] = useState('');
  const [output, setOutput] = useState<string[]>(['Welcome to the terminal.']);

  const handleSendCommand = () => {
    if (!command.trim()) return;
    // Mock command execution
    const newOutput = [...output, `> ${command}`, `Executing '${command}'...`];
    setOutput(newOutput);
    setCommand('');
  };

  return (
    <div className="w-full bg-card text-foreground font-mono text-xs flex flex-col h-64 border-b border-l border-border">
      <div className="flex-1 p-2 overflow-y-auto">
        {output.map((line, index) => (
          <p key={index} className="whitespace-pre-wrap">{line}</p>
        ))}
      </div>
      <div className="p-2 border-t border-border flex items-center space-x-2">
        <Input
          type="text"
          value={command}
          onChange={(e) => setCommand(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleSendCommand();
            }
          }}
          className="flex-1 bg-input border-none rounded px-2 py-1 text-sm focus:ring-0 placeholder-muted-foreground"
          placeholder="Enter command..."
        />
        <Button onClick={handleSendCommand} className="bg-primary text-primary-foreground h-auto py-1 px-3">
          Send
        </Button>
      </div>
    </div>
  );
}
