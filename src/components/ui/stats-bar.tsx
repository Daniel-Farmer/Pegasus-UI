"use client";

import React from 'react';
import { Cpu, HardDrive, MemoryStick, Server, BrainCircuit } from 'lucide-react';

export function StatsBar({ stats }: { stats: { ip: string; cpu: string; mem: string; disk: string; ai: string } }) {
  return (
    <div className="bg-muted/40 border-t border-x border-border p-2">
      <div className="flex items-center justify-around text-xs text-muted-foreground">
        <div className="flex items-center space-x-1">
          <Server className="w-3 h-3" />
          <span>IP: {stats.ip}</span>
        </div>
        <div className="flex items-center space-x-1">
          <Cpu className="w-3 h-3" />
          <span>CPU: {stats.cpu}</span>
        </div>
        <div className="flex items-center space-x-1">
          <MemoryStick className="w-3 h-3" />
          <span>Mem: {stats.mem}</span>
        </div>
        <div className="flex items-center space-x-1">
          <HardDrive className="w-3 h-3" />
          <span>Disk: {stats.disk}</span>
        </div>
        <div className="flex items-center space-x-1">
          <BrainCircuit className="w-3 h-3" />
          <span>AI Usage: {stats.ai}</span>
        </div>
      </div>
    </div>
  );
}
