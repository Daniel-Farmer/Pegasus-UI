import React from "react";
import { EditorStatsBar } from "./editor-stats-bar";
import { ProjectListView } from "./project-list-view";
import { mockProjects } from "@/lib/mock-data";
import { Project } from "@/lib/editor-interface";

interface CodeEditorProps {
  display?: "filePath" | "stats";
  contentType?: "code" | "projects";
  projects?: Project[];
}

export function CodeEditor({
  display = "filePath",
  contentType = "code",
  projects = mockProjects,
}: CodeEditorProps) {
  return (
    <div className="h-full flex flex-col border-r">
      <div className="p-2 border-b border-border bg-muted/40">
        {display === "stats" ? (
          <EditorStatsBar />
        ) : (
          <p className="text-xs text-muted-foreground text-center">
            /src/app/page.tsx
          </p>
        )}
      </div>
      <div className="flex-1 p-4 bg-background">
        {contentType === "projects" ? (
          <ProjectListView projects={projects} />
        ) : (
          <p className="text-sm font-mono text-muted-foreground">
            // Start coding...
          </p>
        )}
      </div>
    </div>
  );
}
