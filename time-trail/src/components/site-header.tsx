"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Compass, Map } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Discover", icon: Compass },
  { href: "/timeline", label: "Timeline", icon: Map },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-[color:var(--trail-ink)]/10 bg-[color:var(--trail-sky)]/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link
          href="/"
          className="group flex items-baseline gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--trail-sun)] rounded-md"
        >
          <span className="font-[family-name:var(--font-display)] text-2xl tracking-tight text-[color:var(--trail-ink)] transition-transform duration-300 group-hover:-translate-y-0.5">
            Time Trail
          </span>
          <span className="hidden text-sm text-[color:var(--trail-moss)] sm:inline">
            for young explorers
          </span>
        </Link>
        <nav className="flex items-center gap-1 sm:gap-2" aria-label="Main">
          {links.map(({ href, label, icon: Icon }) => {
            const active =
              href === "/"
                ? pathname === "/"
                : pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                className={cn(
                  "inline-flex min-h-11 min-w-11 items-center justify-center gap-2 rounded-xl px-3 text-base font-semibold transition-colors sm:min-w-0 sm:px-4",
                  active
                    ? "bg-[color:var(--trail-moss)] text-white"
                    : "text-[color:var(--trail-ink)] hover:bg-[color:var(--trail-moss)]/15"
                )}
              >
                <Icon className="size-5" aria-hidden />
                <span>{label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
