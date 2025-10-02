"use client";

import React, { useState } from "react";
import { CodeEditor } from "@/components/ui/code-editor";
import { StatsBar } from "@/components/ui/stats-bar";
import { InGameTerminal } from "@/components/ui/in-game-terminal";
import { ActionButtons } from "@/components/ui/action-buttons";

const serverStats = {
  survival: {
    ip: "192.168.1.1",
    cpu: "15%",
    mem: "45%",
    disk: "60%",
    ai: "30%",
  },
  creative: {
    ip: "192.168.1.2",
    cpu: "10%",
    mem: "35%",
    disk: "50%",
    ai: "20%",
  },
  lobby: {
    ip: "192.168.1.3",
    cpu: "5%",
    mem: "25%",
    disk: "40%",
    ai: "10%",
  },
};

export default function EditorPage() {
  const [activeServer, setActiveServer] = useState<
    "survival" | "creative" | "lobby"
  >("survival");
  const stats = serverStats[activeServer];

  return (
    <div className="h-full flex flex-col">
      <div className="flex-1">
        <CodeEditor />
      </div>
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
  );
}
