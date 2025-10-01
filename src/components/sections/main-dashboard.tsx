"use client";

import React, { useState } from "react";
import { CodeEditor } from "@/components/ui/code-editor";
import { StatsBar } from "@/components/ui/stats-bar";
import { InGameTerminal } from "@/components/ui/in-game-terminal";
import { ActionButtons } from "@/components/ui/action-buttons";
import { serverStats } from "@/lib/server-data";
import { AIChat } from "../ui/ai-chat";
import { FileManager } from "../ui/file-manager";

export function MainDashboard() {
  const [activeServer, setActiveServer] = useState<
    "survival" | "creative" | "lobby"
  >("survival");
  const stats = serverStats[activeServer];

  return (
    <div className="h-full flex flex-row overflow-hidden">
      {/* Left Sidebar */}
      <div className="w-1/5 border-r border-border">
        <AIChat />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Code Editor */}
        <div className="flex-1 overflow-auto">
          <CodeEditor />
        </div>
        {/* Bottom Section */}
        <div className="w-full">
          <StatsBar stats={stats} />
          <div className="flex">
            <div className="w-[70%]">
              <InGameTerminal />
            </div>
            <div className="w-[30%]">
              <ActionButtons onServerChange={setActiveServer} />
            </div>
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="w-64 border-l border-border">
        <FileManager />
      </div>
    </div>
  );
}
