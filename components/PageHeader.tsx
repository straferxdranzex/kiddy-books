export default function PageHeader() {
  return (
    <div style={{ position: "relative", width: "100%", height: 140, overflow: "hidden", background: "#fff", pointerEvents: "none", userSelect: "none" }}>
      <div style={{ position: "absolute", left: -20, top: -10, width: 200, height: 160, overflow: "hidden" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/starkids.jpg" alt="" aria-hidden="true" style={{ width: 170, height: "auto", transform: "rotate(-30deg) translate(-30px, -20px)", opacity: 0.9 }} />
      </div>
      <div style={{ position: "absolute", right: -20, top: -10, width: 200, height: 160, overflow: "hidden", display: "flex", justifyContent: "flex-end" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/claymates.jpg" alt="" aria-hidden="true" style={{ width: 160, height: "auto", transform: "rotate(20deg) translate(30px, -20px)", opacity: 0.9 }} />
      </div>
    </div>
  );
}
