import React from 'react';

export function CodeEditor() {
  return (
    <div className="flex flex-col h-full bg-card border border-border shadow-sm">
      <div className="p-2 border-b border-border bg-muted/40">
        <p className="text-xs text-muted-foreground">/src/app/page.tsx</p>
      </div>
      <div className="flex-1 p-2 bg-card text-foreground font-mono text-sm overflow-auto rounded-b-lg">
        <pre>
          <code>
{`// Your code goes here
function HelloWorld() {
  return "Hello, world!";
}`}
          </code>
        </pre>
      </div>
    </div>
  );
}
