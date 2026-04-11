"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/e-books" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header style={{ background: "#fff", borderBottom: "1px solid #eee" }}>
      {/* Logo row */}
      <div style={{ textAlign: "center", padding: "20px 24px 0" }}>
        <Link href="/">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://kiddy-books.com/wp-content/uploads/2023/05/kiddy-books-1-249x99.png"
            alt="Kiddy Books"
            style={{ height: 80, width: "auto", display: "inline-block" }}
          />
        </Link>
      </div>

      {/* Nav row */}
      <nav style={{
        display: "flex",
        justifyContent: "center",
        gap: 40,
        padding: "14px 24px 16px",
      }}>
        {links.map(({ label, href }) => {
          const active = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              style={{
                fontSize: 14,
                fontWeight: active ? 700 : 400,
                color: "#222",
                fontFamily: "sans-serif",
                letterSpacing: "0.01em",
                borderBottom: active ? "2px solid #222" : "2px solid transparent",
                paddingBottom: 2,
              }}
            >
              {label}
            </Link>
          );
        })}
      </nav>

      {/* Mobile menu button */}
      <style>{`
        @media (max-width: 500px) {
          .kb-nav-links { flex-direction: column; align-items: center; gap: 16px !important; }
        }
      `}</style>
    </header>
  );
}
