"use client";

import React, { useState } from "react";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"; // Custom components
import { Button } from "@/components/ui/button"; // Custom button
import Link from "next/link"; // Next.js link

export default function MobileHeader() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const navItems = [
    { name: "Home", slug: "/" },
    { name: "Projects", slug: "/projects" },
    { name: "Blogs", slug: "/blogs" },
    { name: "Contacts", slug: "/contacts" },
    { name: "Services", slug: "/services" },
    { name: "About Us", slug: "/aboutUs" },
  ];

  const closeSheet = () => setIsSheetOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-background border-b md:hidden">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <img
                src="https://files.catbox.moe/76j4ey.svg"
                alt="Logo"
                className="h-8 w-auto"
              />
            </Link>
          </div>
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-foreground w-8 py-0">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open main menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <nav className="mt-6">
                <ul className="space-y-4">
                  {navItems.map((item) => (
                    <li key={item.slug}>
                      <Link
                        href={item.slug}
                        className="block py-2 text-foreground hover:text-primary"
                        onClick={closeSheet}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
