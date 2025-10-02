import { LayoutDashboard, FolderKanban, Settings } from "lucide-react";

export function SideNavbar() {
  return (
    <div className="bg-card rounded-lg shadow-md h-full flex flex-col items-center justify-center gap-8">
      <LayoutDashboard className="h-6 w-6 text-muted-foreground hover:text-primary cursor-pointer" />
      <FolderKanban className="h-6 w-6 text-muted-foreground hover:text-primary cursor-pointer" />
      <Settings className="h-6 w-6 text-muted-foreground hover:text-primary cursor-pointer" />
    </div>
  );
}
