"use client";

import { usePathname } from "next/navigation";
import { AIChat } from "./ai-chat";
import { FileManager } from "./file-manager";
import { RightSidebar } from "./right-sidebar";

export function PageWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isDashboard = pathname === "/dashboard";

  return (
    <>
      <AIChat title={isDashboard ? "AI Assistant" : "AI Chat"} />
      <main className="flex-1 overflow-auto">{children}</main>
      {isDashboard ? <RightSidebar /> : <FileManager />}
    </>
  );
}
