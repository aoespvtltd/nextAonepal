"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Use this instead of useLocation

export default function Header() {
  const pathname = usePathname(); // Get the current path in the App Router

  // Navigation items with slugs
  const navItems = [
    { name: "Home", slug: "/" },
    { name: "Projects", slug: "/projects" },
    { name: "Blogs", slug: "/blogs" },
    { name: "Contacts", slug: "/contacts" },
    { name: "Services", slug: "/services" },
    { name: "About Us", slug: "/aboutUs" },
  ];

  return (
    <header className="sticky top-0 z-20 bg-white border-b border-gray-200 hidden md:flex h-14">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between sm:h-14">
          {/* Logo Section */}
          <div>
            <Link href="/" className="flex items-center">
              <img
                src="https://files.catbox.moe/76j4ey.svg"
                alt="Logo"
                className="h-4 w-auto sm:h-8"
              />
            </Link>
          </div>

          {/* Navigation Section */}
          <nav className="hidden md:flex">
            <ul className="flex space-x-4 lg:space-x-8">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.slug}
                    className={`text-gray-700 text-sm transition duration-200 ${
                      pathname === item.slug
                        ? "text-red-700 underline underline-offset-8 font-extrabold decoration-2"
                        : ""
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Placeholder for Search Button */}
          <div className="hidden md:block">{/* Add SearchButton component if needed */}</div>
        </div>
      </div>
    </header>
  );
}

// import React from 'react'

// function Header() {
//   return (
//     <div>Header</div>
//   )
// }

// export default Header