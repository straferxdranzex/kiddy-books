// Decorative page header with books in corners (as seen on Contact and Shop pages)
export default function PageHeader() {
  return (
    <div style={{
      position: "relative",
      width: "100%",
      height: 140,
      overflow: "hidden",
      background: "#fff",
      pointerEvents: "none",
      userSelect: "none",
    }}>
      {/* Left book stack */}
      <div style={{
        position: "absolute",
        left: -20,
        top: -10,
        width: 200,
        height: 160,
        overflow: "hidden",
      }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://kiddy-books.com/wp-content/uploads/2021/08/Starkids-book-cover-final-01-scaled.jpg"
          alt=""
          aria-hidden="true"
          style={{
            width: 170,
            height: "auto",
            transform: "rotate(-30deg) translate(-30px, -20px)",
            opacity: 0.9,
          }}
        />
      </div>

      {/* Right book stack */}
      <div style={{
        position: "absolute",
        right: -20,
        top: -10,
        width: 200,
        height: 160,
        overflow: "hidden",
        display: "flex",
        justifyContent: "flex-end",
      }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://kiddy-books.com/wp-content/uploads/2021/08/Claymates-v2-outer-corners-rounded.png"
          alt=""
          aria-hidden="true"
          style={{
            width: 160,
            height: "auto",
            transform: "rotate(20deg) translate(30px, -20px)",
            opacity: 0.9,
          }}
        />
      </div>
    </div>
  );
}
