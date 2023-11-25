"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/register", name: "Register" },
  { href: "/login", name: "Login" },
  { href: "/forgot-password", name: "Forgot Password" },
];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const [input, setInput] = useState("");

  return (
    <div>
      <input value={input} onChange={(e) => setInput(e.target.value)} />

      {navLinks.map(({ href, name }) => {
        const isActive = pathname.startsWith(href);

        return (
          <Link
            key={href}
            href={href}
            style={{ color: isActive ? "red" : "blue" }}
          >
            {name}
          </Link>
        );
      })}
      {children}
    </div>
  );
}
