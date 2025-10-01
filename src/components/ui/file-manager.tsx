"use client";

import React, { useState } from 'react';
import { Button } from './button'; // Assuming you have a button component

export function FileManager() {
  const [activeTab, setActiveTab] = useState<'plugin' | 'server' | 'logs'>('plugin');

  return (
    <aside className="w-64 bg-card border border-border shadow-sm flex flex-col">
      <header className="p-2 border-b border-border">
        <h2 className="text-sm font-medium text-foreground mb-2">System Browser</h2>
        <div className="flex w-full">
          <Button
            variant={activeTab === 'plugin' ? 'secondary' : 'ghost'}
            className="text-xs px-2 py-1 h-auto flex-1"
            onClick={() => setActiveTab('plugin')}
          >
            Plugin
          </Button>
          <Button
            variant={activeTab === 'server' ? 'secondary' : 'ghost'}
            className="text-xs px-2 py-1 h-auto flex-1"
            onClick={() => setActiveTab('server')}
          >
            Server
          </Button>
          <Button
            variant={activeTab === 'logs' ? 'secondary' : 'ghost'}
            className="text-xs px-2 py-1 h-auto flex-1"
            onClick={() => setActiveTab('logs')}
          >
            Logs
          </Button>
        </div>
      </header>
      <div className="flex-1 overflow-y-auto p-2">
        {/* File list will go here */}
        {activeTab === 'plugin' && <p className="text-xs text-muted-foreground">Plugin files list...</p>}
        {activeTab === 'server' && <p className="text-xs text-muted-foreground">Server files list...</p>}
        {activeTab === 'logs' && <p className="text-xs text-muted-foreground">Log files list...</p>}
      </div>
    </aside>
  );
}
