"use client";

import NavbarJS from "@/components/js/NavbarJS";
import { usePathname } from "next/navigation";

export default function JavaScriptLayout({ children }) {
  const pathname = usePathname();

  const isFirstJsPage = pathname === "/languages/js";

  return (
    <div className="bg-neutral-950 text-white min-h-screen">
      <div className="hidden md:flex">
        <NavbarJS />
        <main className="flex-1 p-6">{children}</main>
      </div>

      <div className="flex flex-col md:hidden">
        <main className="p-4">{children}</main>
        {isFirstJsPage && (
          <div className="border-t border-neutral-800 p-4">
            <NavbarJS />
          </div>
        )}
      </div>
    </div>
  );
}
