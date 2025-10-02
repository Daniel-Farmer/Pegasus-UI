"use client";

import React, { useState } from "react";
import { CodeEditor } from "@/components/ui/code-editor";
import { StatsBar } from "@/components/ui/stats-bar";
import { InGameTerminal } from "@/components/ui/in-game-terminal";
import { ActionButtons } from "@/components/ui/action-buttons";
import { DashboardStatsBar } from "@/components/ui/dashboard-stats-bar";
import { StatCard } from "@/components/ui/stat-card";

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

export default function Home() {
  return (
    <div className="h-full flex flex-col p-4">
      <DashboardStatsBar />
      <div className="flex-1 rounded-lg bg-muted/40 mt-4 p-8">
        <h1 className="text-3xl font-bold mb-6">Server Statistics</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard title="Plugins Generated" value="128" />
          <StatCard title="Servers Managed" value="12" />
          <StatCard title="Deploy Success Rate" value="98%" />
          <StatCard title="Players Online" value="256" />
          <StatCard title="Total Players" value="1,450" />
          <StatCard title="Revenue (Month)" value="$2,500" />
          <StatCard title="Open Tickets" value="5" />
          <StatCard title="Server Uptime" value="99.9%" />
        </div>
      </div>
    </div>
  );
}
