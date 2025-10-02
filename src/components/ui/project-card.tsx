import { Button } from "./button";

interface ProjectCardProps {
  projectName: string;
  resources: {
    ip: string;
    cpu: string;
    mem: string;
    storage: string;
  };
  serversActive: string;
}

export function ProjectCard({
  projectName,
  resources,
  serversActive,
}: ProjectCardProps) {
  return (
    <div className="bg-card p-6 rounded-lg shadow-md flex justify-between items-center">
      <div>
        <h3 className="text-xl font-bold">{projectName}</h3>
        <div className="text-sm text-muted-foreground mt-2 flex space-x-4">
          <span>IP: {resources.ip}</span>
          <span>CPU: {resources.cpu}</span>
          <span>Mem: {resources.mem}</span>
          <span>Storage: {resources.storage}</span>
        </div>
        <p className="text-sm mt-4">Servers Active: {serversActive}</p>
      </div>
      <Button variant="outline">Access Project</Button>
    </div>
  );
}
