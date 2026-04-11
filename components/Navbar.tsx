"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const links = [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/e-books" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header style={{ background: "#fff", borderBottom: "1px solid #eee" }}>
      <div style={{ textAlign: "center", padding: "20px 24px 0" }}>
        <Link href="/">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/logo.png" alt="Kiddy Books" style={{ height: 80, width: "auto", display: "inline-block" }} />
        </Link>
      </div>
      <nav style={{ display: "flex", justifyContent: "center", gap: 40, padding: "14px 24px 16px" }}>
        {links.map(({ label, href }) => {
          const active = pathname === href;
          return (
            <Link key={href} href={href} style={{
              fontSize: 14, fontWeight: active ? 700 : 400, color: "#222",
              fontFamily: "sans-serif", letterSpacing: "0.01em",
              borderBottom: active ? "2px solid #222" : "2px solid transparent", paddingBottom: 2,
            }}>
              {label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
