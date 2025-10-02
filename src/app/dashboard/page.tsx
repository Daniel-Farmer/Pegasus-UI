"use client";

import React from "react";
import { CodeEditor } from "@/components/ui/code-editor";

export default function DashboardPage() {
  return (
    <div className="h-full flex flex-col">
      <div className="flex-1">
        <CodeEditor display="stats" contentType="projects" />
      </div>
    </div>
  );
}
