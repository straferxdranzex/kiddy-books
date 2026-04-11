import { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Books – Kiddy Books",
};

const books = [
  {
    image: "https://kiddy-books.com/wp-content/uploads/2021/08/Starkids-book-cover-final-01-209x300.jpg",
    title: "Star-Kids",
    subtitle: "Solar System Exploration",
    description:
      "Zooming through the universe faster than the speed of light on their flying scooters and skateboards, these 10 fifth grade astronomy students are on a solar system odyssey. Experiencing extreme dangers, all these 11 year old explorers mostly find this trek very exciting. This 53 page ( approximate 17,000 word) novella is educational in an entertaining way and is very exciting to read for all ages.",
    link: "https://www.amazon.com/Star-Kids-Solar-System-Exploration/dp/B07DX9GLRT/",
  },
  {
    image: "https://kiddy-books.com/wp-content/uploads/2021/08/cover_juvenisle-193x300.png",
    title: "Juven-Isle",
    subtitle: "Washed Ashore",
    description:
      "CRASH! BANG! BOOM! This ocean's storm sunk their tiny sailboat. Forced to swim to an abandoned isle, these 8 ninth-grade students have to exercise their survival skill This 57 page action-packed book is enjoyable for all ages.",
    link: "https://www.amazon.com/Juven-Isle-Washed-Ashore/dp/B085DNV1PG/",
  },
  {
    image: "https://kiddy-books.com/wp-content/uploads/2021/08/cover-231x300.jpg",
    title: "Historical-Rhetorical",
    subtitle: "Father of his Country",
    description:
      "Written in poetic verse, \"Historical-Rhetorical\" is a history book series. This pilot book is the biography of George Washington, which includes his involvement in the Revolution, Constitution and his Presidency. This 32 page, illustrated book is a fun read for all ages. This book series' characters are portrayed by 8 year old kids.",
    link: "https://www.amazon.com/Historical-Rhetorical-Father-of-his-Country/dp/B07LGDNT7M/",
  },
  {
    image: "https://kiddy-books.com/wp-content/uploads/2021/08/Claymates-v2-outer-corners-rounded-232x300.png",
    title: "CLAYMATES",
    subtitle: "George Washington",
    description:
      "CLAYMATES PRESENTS is an educational/entertainment trivial book series for all ages. Illustrated in 3-D, these CLAY play MATES are 8 years old. With 135 pages, this first book is the biography of GEORGE WASHINGTON.",
    link: "https://www.amazon.com/Claymates-Presents-Washington-John-Harrington/dp/1482088010/",
  },
  {
    image: "https://kiddy-books.com/wp-content/uploads/2025/10/51cN449U-L._SY522_-206x300.jpg",
    title: "Told in Gold",
    subtitle: "Admiral of the Ocean Sea",
    description:
      "Written in poetic verse, TOLD IN GOLD: \"Admiral of the Ocean Sea\" is the biography of Christopher Columbus, beginning with his birth in 1451, in Genoa, Italy, to his oceanic voyage to America then celebrating his parade, to his final years. Illustrated in (many shades of) gold, and portrayed by 8 year old kids, this 50 page (serial) book is very enjoyable for all ages.",
    link: "https://www.amazon.com/Told-Gold-Admiral-Ocean-Sea-ebook/dp/B0B7282J4L",
  },
];

function BookCard({ book }: { book: (typeof books)[0] }) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{
        width: "100%",
        height: 260,
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        marginBottom: 16,
      }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={book.image}
          alt={book.title}
          style={{ maxHeight: "100%", maxWidth: "100%", objectFit: "contain" }}
        />
      </div>

      <h3 style={{
        fontSize: "1.1rem",
        fontWeight: 400,
        color: "#111",
        fontFamily: "Georgia, serif",
        marginBottom: 4,
      }}>
        {book.title}
      </h3>

      <p style={{
        fontSize: 13,
        color: "#666",
        fontFamily: "Georgia, serif",
        fontStyle: "italic",
        marginBottom: 8,
      }}>
        {book.subtitle}
      </p>

      <div style={{ width: 32, height: 2, background: "#ccc", marginBottom: 14 }} />

      <p style={{
        fontSize: 13,
        lineHeight: 1.75,
        color: "#444",
        fontFamily: "sans-serif",
        marginBottom: 20,
        flex: 1,
      }}>
        {book.description}
      </p>

      <a
        href={book.link}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-block",
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "#111",
          fontFamily: "sans-serif",
          textDecoration: "none",
        }}
      >
        BUY NOW
      </a>
    </div>
  );
}

export default function EBooks() {
  const topRow = books.slice(0, 3);
  const bottomRow = books.slice(3);

  return (
    <>
      <PageHeader />
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "20px 40px 80px" }}>
        <h1 style={{
          fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
          fontWeight: 400,
          color: "#111",
          fontFamily: "Georgia, serif",
          textAlign: "center",
          marginBottom: 8,
        }}>
          Books
        </h1>
        <div style={{
          width: "60%",
          height: 1,
          background: "#ccc",
          margin: "0 auto 60px",
        }} />

        {/* Top 3 */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "0 48px",
          marginBottom: 64,
        }}>
          {topRow.map((book) => (
            <BookCard key={book.title} book={book} />
          ))}
        </div>

        {/* Bottom 2 */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "0 48px",
        }}>
          {bottomRow.map((book) => (
            <BookCard key={book.title} book={book} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .books-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .books-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
