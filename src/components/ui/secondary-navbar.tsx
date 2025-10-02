"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function SecondaryNavbar() {
  const pathname = usePathname();

  const links = [
    { href: "/dashboard", label: "Dashboard" },
    { href: "/editor", label: "Editor" },
    { href: "/settings", label: "Settings" },
    { href: "/billing", label: "Billing" },
    { href: "/integrations", label: "Integrations" },
  ];

  return (
    <div className="bg-card border-b px-4 py-2">
      <nav className="flex items-center gap-6 text-sm font-medium">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "hover:text-primary/80 transition-colors",
              pathname.startsWith(link.href)
                ? "text-primary"
                : "text-muted-foreground"
            )}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
