import React from 'react';
import { User } from 'lucide-react';
import Link from 'next/link';

export function SubNavbar() {
  return (
    <nav className="bg-card text-sm text-foreground px-4 py-2 border-b border-border flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <Link href="/dashboard">
          <h1 className="text-lg font-bold text-foreground cursor-pointer">Pegasus Labs</h1>
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        <User className="w-5 h-5 text-muted-foreground" />
      </div>
    </nav>
  );
}
