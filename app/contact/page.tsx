"use client";
import { useState } from "react";
import PageHeader from "@/components/PageHeader";

export default function Contact() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 700));
    setLoading(false);
    setSubmitted(true);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "10px 12px",
    border: "1px solid #d1d5db",
    borderRadius: 2,
    fontSize: 14,
    fontFamily: "sans-serif",
    color: "#111",
    background: "#fafafa",
    outline: "none",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: 13,
    fontWeight: 600,
    color: "#222",
    marginBottom: 8,
    fontFamily: "sans-serif",
  };

  return (
    <>
      <PageHeader />
      <div style={{
        maxWidth: 900,
        margin: "0 auto",
        padding: "20px 40px 80px",
      }}>
        <h1 style={{
          fontSize: "clamp(2rem, 6vw, 3rem)",
          fontWeight: 300,
          color: "#111",
          fontFamily: "Georgia, serif",
          textAlign: "center",
          marginBottom: 10,
        }}>
          Contact
        </h1>
        <div style={{ width: 32, height: 2, background: "#ccc", margin: "0 auto 50px" }} />

        {submitted ? (
          <div style={{
            maxWidth: 600,
            margin: "0 auto",
            background: "#f0fdf4",
            border: "1px solid #86efac",
            borderRadius: 4,
            padding: "40px 32px",
            textAlign: "center",
          }}>
            <div style={{ fontSize: 40, marginBottom: 12 }}>✅</div>
            <h3 style={{ color: "#166534", fontSize: "1.1rem", fontFamily: "Georgia, serif", marginBottom: 8 }}>
              Message Sent!
            </h3>
            <p style={{ color: "#15803d", fontSize: 14, fontFamily: "sans-serif" }}>
              Thank you for reaching out. We&apos;ll get back to you soon.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            style={{
              maxWidth: 860,
              margin: "0 auto",
              display: "flex",
              flexDirection: "column",
              gap: 24,
            }}
          >
            <div>
              <label style={labelStyle}>
                Name <span style={{ color: "#dc2626" }}>*</span>
              </label>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                <div>
                  <input
                    type="text"
                    required
                    value={form.firstName}
                    onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                    style={inputStyle}
                  />
                  <span style={{ fontSize: 12, color: "#888", fontFamily: "sans-serif", display: "block", marginTop: 4 }}>First</span>
                </div>
                <div>
                  <input
                    type="text"
                    required
                    value={form.lastName}
                    onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                    style={inputStyle}
                  />
                  <span style={{ fontSize: 12, color: "#888", fontFamily: "sans-serif", display: "block", marginTop: 4 }}>Last</span>
                </div>
              </div>
            </div>

            <div>
              <label style={labelStyle}>
                Email <span style={{ color: "#dc2626" }}>*</span>
              </label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                style={inputStyle}
              />
            </div>

            <div>
              <label style={labelStyle}>
                Message <span style={{ color: "#dc2626" }}>*</span>
              </label>
              <textarea
                required
                rows={7}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                style={{ ...inputStyle, resize: "vertical", minHeight: 120 }}
              />
            </div>

            <div>
              <button
                type="submit"
                disabled={loading}
                style={{
                  background: "#111",
                  color: "#fff",
                  border: "none",
                  padding: "14px 36px",
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  fontFamily: "sans-serif",
                  cursor: loading ? "not-allowed" : "pointer",
                  opacity: loading ? 0.75 : 1,
                }}
              >
                {loading ? "Sending…" : "SEND"}
              </button>
            </div>
          </form>
        )}
      </div>
    </>
  );
}
