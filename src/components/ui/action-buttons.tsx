"use client";

import React, { useState } from 'react';
import { Button } from './button';
import { RefreshCw, FileText, Play, Square, Save, Users, ChevronDown, ChevronLeft, ChevronRight, Zap, Activity, FileWarning, Terminal, Camera, Filter } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ActionButtons({ onServerChange }: { onServerChange: (server: 'survival' | 'creative' | 'lobby') => void }) {
  const [isServerRunning, setIsServerRunning] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 2;

  const handleToggleServer = () => {
    setIsServerRunning(!isServerRunning);
  };

  const pageOneActions = (
    <>
      <Button variant="outline" className="w-full justify-start text-xs h-auto py-1 px-2" onClick={handleToggleServer}>
        {isServerRunning ? (
          <>
            <Square className="w-3 h-3 mr-2" />
            Stop Server
          </>
        ) : (
          <>
            <Play className="w-3 h-3 mr-2" />
            Start Server
          </>
        )}
      </Button>
      <Button variant="outline" className="w-full justify-start text-xs h-auto py-1 px-2">
        <RefreshCw className="w-3 h-3 mr-2" />
        Restart Server
      </Button>
      <Button variant="outline" className="w-full justify-start text-xs h-auto py-1 px-2">
        <FileText className="w-3 h-3 mr-2" />
        View Logs
      </Button>
      <Button variant="outline" className="w-full justify-start text-xs h-auto py-1 px-2">
        <Save className="w-3 h-3 mr-2" />
        Backup Server
      </Button>
      <Button variant="outline" className="w-full justify-start text-xs h-auto py-1 px-2">
        <Users className="w-3 h-3 mr-2" />
        Manage Players
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="w-full justify-start text-xs h-auto py-1 px-2">
            <ChevronDown className="w-3 h-3 mr-2" />
            Switch Server
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={() => onServerChange('survival')}>Survival</DropdownMenuItem>
          <DropdownMenuItem onClick={() => onServerChange('creative')}>Creative</DropdownMenuItem>
          <DropdownMenuItem onClick={() => onServerChange('lobby')}>Lobby</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );

  const pageTwoActions = (
    <>
      <Button variant="outline" className="w-full justify-start text-xs h-auto py-1 px-2">
        <Zap className="w-3 h-3 mr-2" />
        Reload Plugins
      </Button>
      <Button variant="outline" className="w-full justify-start text-xs h-auto py-1 px-2">
        <Activity className="w-3 h-3 mr-2" />
        TPS Monitor
      </Button>
      <Button variant="outline" className="w-full justify-start text-xs h-auto py-1 px-2">
        <FileWarning className="w-3 h-3 mr-2" />
        Crash Dump Viewer
      </Button>
      <Button variant="outline" className="w-full justify-start text-xs h-auto py-1 px-2">
        <Terminal className="w-3 h-3 mr-2" />
        Command Presets
      </Button>
      <Button variant="outline" className="w-full justify-start text-xs h-auto py-1 px-2">
        <Camera className="w-3 h-3 mr-2" />
        World Snapshot / Restore
      </Button>
      <Button variant="outline" className="w-full justify-start text-xs h-auto py-1 px-2">
        <Filter className="w-3 h-3 mr-2" />
        Plugin Console Filter
      </Button>
    </>
  );

  return (
    <div className="h-64 bg-card p-4 flex flex-col border-b border-r border-border">
      <div className="flex-1 space-y-2">
        {currentPage === 1 ? pageOneActions : pageTwoActions}
      </div>
      <div className="flex items-center justify-between mt-2">
        <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => setCurrentPage(p => Math.max(1, p - 1))}>
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <span className="text-xs text-muted-foreground">{currentPage} / {totalPages}</span>
        <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}>
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
