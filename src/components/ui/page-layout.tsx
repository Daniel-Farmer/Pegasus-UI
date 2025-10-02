"use client";

import { usePathname } from "next/navigation";
import { AIChat } from "./ai-chat";
import { FileManager } from "./file-manager";

export function PageLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isDashboard = pathname === "/dashboard";

  return (
    <div className="flex flex-1 overflow-hidden">
      <div className="flex flex-1 overflow-hidden bg-muted/40">
        {!isDashboard && <AIChat />}
        <main className="flex-1 overflow-auto">{children}</main>
        {!isDashboard && <FileManager />}
      </div>
    </div>
  );
}
