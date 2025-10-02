export interface Project {
  name: string;
  description: string;
  lastUpdated: string;
}

export const projects: Project[] = [
  {
    name: "Example Project",
    description: "This is a sample project to demonstrate the projects list.",
    lastUpdated: "2025-10-01",
  },
];
