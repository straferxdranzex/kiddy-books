"use client";
import Link from "next/link";

const alsoLoveBooks = [
  {
    image: "/images/starkids.jpg",
    title: "STAR-KIDS",
    subtitle: "Solar System Exploration",
    description: "Zooming through the universe faster than the speed of light on their flying scooters and skateboards, these 10 fifth grade astronomy students are on a solar system odyssey.",
    link: "https://www.amazon.com/Star-Kids-System-Exploration-John-Harrington/dp/1482088150",
  },
  {
    image: "/images/historical-rhetorical.jpg",
    title: "Historical-Rhetorical",
    subtitle: "Father Of His Country",
    description: "Written in poetic verse, \"Historical-Rhetorical\" is a history book series. This pilot book is the biography of George Washington, which includes his involvement in the Revolution, Constitution and his Presidency. This 32 page, illustrated book is a fun read for all ages. This book series' characters are portrayed by 8 year old kids.",
    link: "https://www.amazon.com/Historical-Rhetorical-Father-of-his-Country/dp/B07LGDNT7M/",
  },
  {
    image: "/images/claymates.jpg",
    title: "CLAYMATES",
    subtitle: "George washington",
    description: "CLAYMATES PRESENTS is an educational/entertainment trivial book series for all ages. Illustrated in 3-D, these CLAY play MATES are 8 years old. With 135 pages, this first book is the biography of GEORGE WASHINGTON.",
    link: "https://www.amazon.com/Claymates-Presents-Washington-John-Harrington/dp/1482088010/",
  },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "60px 40px 80px", display: "flex", alignItems: "center", gap: 48, flexWrap: "wrap" }}>
        <div style={{ flex: "1 1 340px", maxWidth: 420 }}>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 700, color: "#111", letterSpacing: "0.03em", marginBottom: 12, fontFamily: "Georgia, serif" }}>
            JUVEN – ISLE
          </h1>
          <p style={{ fontSize: 13, fontWeight: 600, color: "#111", letterSpacing: "0.05em", marginBottom: 10, textTransform: "uppercase", fontFamily: "sans-serif" }}>
            CRASH! BANG! BOOM!
          </p>
          <div style={{ width: 32, height: 2, background: "#ccc", marginBottom: 18 }} />
          <p style={{ fontSize: 13.5, lineHeight: 1.75, color: "#444", marginBottom: 32, fontFamily: "sans-serif" }}>
            This ocean&apos;s storm sunk their tiny sailboat. Forced to swim to an abandoned isle, these 8 ninth-grade students have to exercise their survival skill This 57 page action-packed book is enjoyable for all ages.
          </p>
          <Link href="/e-books" style={{ display: "inline-block", background: "#111", color: "#fff", padding: "12px 28px", fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", fontFamily: "sans-serif", textDecoration: "none" }}>
            SHOP NOW
          </Link>
        </div>
        <div style={{ flex: "1 1 300px", display: "flex", justifyContent: "center" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/juven-isle.jpg" alt="Juven-Isle: Washed Ashore" style={{ maxHeight: 520, maxWidth: "100%", objectFit: "contain" }} />
        </div>
      </section>

      <div style={{ borderTop: "1px solid #e5e5e5" }} />

      {/* YOU'LL ALSO LOVE */}
      <section style={{ padding: "70px 40px 80px", background: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(1.6rem, 4vw, 2rem)", fontWeight: 400, textAlign: "center", color: "#111", fontFamily: "Georgia, serif", marginBottom: 10 }}>
            You&apos;ll also love
          </h2>
          <div style={{ width: 32, height: 2, background: "#ccc", margin: "0 auto 48px" }} />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0 40px" }}>
            {alsoLoveBooks.map((book) => (
              <div key={book.title} style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ width: "100%", aspectRatio: "3/4", overflow: "hidden", marginBottom: 20 }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={book.image} alt={book.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <h3 style={{ fontSize: "1.15rem", fontWeight: 700, textAlign: "center", color: "#111", fontFamily: "Georgia, serif", marginBottom: 4 }}>{book.title}</h3>
                <p style={{ fontSize: 13, textAlign: "center", color: "#555", fontFamily: "Georgia, serif", marginBottom: 8 }}>{book.subtitle}</p>
                <div style={{ width: 32, height: 2, background: "#ccc", margin: "0 auto 16px" }} />
                <p style={{ fontSize: 13, lineHeight: 1.7, color: "#555", fontFamily: "sans-serif", marginBottom: 20 }}>{book.description}</p>
                <a href={book.link} target="_blank" rel="noopener noreferrer" style={{ fontSize: 13, color: "#111", fontFamily: "sans-serif", fontWeight: 600, textDecoration: "none", marginTop: "auto" }}>
                  Read More
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
