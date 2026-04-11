import Link from "next/link";

export default function Footer() {
  const links = [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/e-books" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <footer style={{
      background: "#1f2937",
      color: "#ccc",
      marginTop: 80,
    }}>
      {/* Top section */}
      <div style={{
        maxWidth: 1200,
        margin: "0 auto",
        padding: "48px 40px 32px",
      }}>
        <Link
          href="/contact"
          style={{
            color: "#9ca3af",
            fontSize: 14,
            fontFamily: "sans-serif",
            textDecoration: "none",
          }}
        >
          Contact US
        </Link>
      </div>

      {/* Divider */}
      <div style={{ borderTop: "1px solid #374151" }} />

      {/* Bottom row */}
      <div style={{
        maxWidth: 1200,
        margin: "0 auto",
        padding: "20px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 12,
      }}>
        <p style={{ fontSize: 13, color: "#9ca3af", fontFamily: "sans-serif" }}>
          Copyright © 2026 Kiddy Books
        </p>
        <nav style={{ display: "flex", gap: 24 }}>
          {links.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              style={{
                fontSize: 13,
                color: "#9ca3af",
                fontFamily: "sans-serif",
                textDecoration: "none",
              }}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
