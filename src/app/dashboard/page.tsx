"use client";
import React, { useEffect, useState } from "react";
import { Project } from "@/lib/project-data";

export default function DashboardPage() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    async function fetchProjects() {
      const res = await fetch("/api/projects");
      const { data } = await res.json();
      setProjects(data);
    }
    fetchProjects();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {/* Stats Cards Placeholder */}
        <div className="bg-card border border-border p-4 rounded-lg">
          <h2 className="text-lg font-semibold">Stat 1</h2>
          <p className="text-3xl font-bold">0</p>
        </div>
        <div className="bg-card border border-border p-4 rounded-lg">
          <h2 className="text-lg font-semibold">Stat 2</h2>
          <p className="text-3xl font-bold">0</p>
        </div>
        <div className="bg-card border border-border p-4 rounded-lg">
          <h2 className="text-lg font-semibold">Stat 3</h2>
          <p className="text-3xl font-bold">0</p>
        </div>
        <div className="bg-card border border-border p-4 rounded-lg">
          <h2 className="text-lg font-semibold">Stat 4</h2>
          <p className="text-3xl font-bold">0</p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-4">Projects</h2>
        <div className="bg-card border border-border p-4 rounded-lg">
          <ul>
            {projects.map((project: Project) => (
              <li key={project.name} className="border-b border-border py-2">
                <h3 className="text-lg font-semibold">{project.name}</h3>
                <p className="text-sm text-gray-400">{project.description}</p>
                <p className="text-xs text-gray-500">
                  Last updated: {new Date(project.lastUpdated).toLocaleDateString()}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
