"use client";

import { useState } from "react";
import {
  ChevronRight,
  Users,
  Calendar,
  Power,
  Zap,
  ChevronLeft,
} from "lucide-react";
import { Button } from "./button";

interface Project {
  projectName: string;
  creationDate: string;
  status: string;
  teamMembers: number;
  apiUsage: number;
}

interface ProjectListViewProps {
  projects: Project[];
}

const PAGE_SIZE = 6;

export function ProjectListView({ projects }: ProjectListViewProps) {
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(projects.length / PAGE_SIZE);
  const paginatedProjects = projects.slice(
    currentPage * PAGE_SIZE,
    (currentPage + 1) * PAGE_SIZE
  );

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 0));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1));
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-foreground">Your Project</h2>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8"
            onClick={handlePrevPage}
            disabled={currentPage === 0}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8"
            onClick={handleNextPage}
            disabled={currentPage >= totalPages - 1}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="sm">
            Create New Project
          </Button>
        </div>
      </div>
      {paginatedProjects.map((project, index) => (
        <div
          key={index}
          className="flex justify-between items-center p-4 bg-muted/40 hover:bg-muted/80 transition-colors cursor-pointer"
        >
          <div>
            <h3 className="font-semibold">{project.projectName}</h3>
            <p className="text-sm text-muted-foreground">
              Created on {project.creationDate}
            </p>
          </div>
          <div className="grid grid-cols-4 gap-6 text-sm text-muted-foreground items-center">
            <div className="flex items-center gap-2 w-40">
              <Zap className="h-4 w-4 flex-shrink-0" />
              <div className="w-full bg-background rounded-full h-2.5">
                <div
                  className="bg-primary h-2.5 rounded-full"
                  style={{ width: `${project.apiUsage}%` }}
                />
              </div>
              <span className="w-8 text-right">{project.apiUsage}%</span>
            </div>
            <div className="flex items-center gap-2 w-32">
              <Power className="h-4 w-4 flex-shrink-0 text-muted-foreground" />
              <span>{project.status}</span>
            </div>
            <div className="flex items-center gap-2 w-28">
              <Users className="h-4 w-4 flex-shrink-0" />
              <span>{project.teamMembers} Team Members</span>
            </div>
            <div className="flex justify-end items-center">
              <Button variant="outline" size="sm">
                Manage
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 ml-1">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
