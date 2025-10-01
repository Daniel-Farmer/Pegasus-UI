import React from 'react';
import { User } from 'lucide-react';

export function SubNavbar() {
  return (
    <nav className="bg-card text-sm text-foreground px-4 py-2 border-b border-border flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <h1 className="text-lg font-bold text-foreground">Pegasus Labs</h1>
      </div>
      <div className="flex items-center space-x-4">
        <User className="w-5 h-5 text-muted-foreground" />
      </div>
    </nav>
  );
}
