// app/buy-your-vehicle/page.tsx

import Section from "../../components/Section";

export default function BuyYourVehiclePage() {
  return (
    <main>
      <header className="hero">
        <div className="container">
          <div className="nav">
            <div className="brand" style={{ gap: 12 }}>
              <img
                src="/brand/newpath-auto-finance.png"
                alt="New Path Auto Finance"
                style={{ width: 180, height: 180, objectFit: "contain", display: "block" }}
              />
            </div>
            <div className="badge">Buy the right way.</div>
          </div>

          <div className="gridHero" style={{ gridTemplateColumns: "1fr" }}>
            <div className="card">
              <div className="cardInner">
                <h1 className="h1" style={{ marginBottom: 10 }}>
                  Buy your next vehicle <span style={{ color: "var(--accent)" }}>the right way</span>.
                </h1>
                <p className="sub" style={{ maxWidth: 820 }}>
                  This route is live. Next we’ll inject the 4-step breakdown (credit → affordability → positioned →
                  apply) plus the BALANCE Cipher close.
                </p>

                <div className="buttonRow" style={{ marginTop: 14 }}>
                  <a className="btn btnPrimary" href="/">
                    Back home →
                  </a>
                  <a className="btn" href="/#pillars">
                    Back to doors →
                  </a>
                </div>

                <div className="muted" style={{ fontSize: 12, marginTop: 10 }}>
                  Build test: if you can see this page at /buy-your-vehicle, routing is solved.
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <Section title="Next" desc="Once this builds clean, we add the full content.">
        <div className="card">
          <div className="cardInner">
            <div className="item">
              <h3 className="itemTitle">Why we’re doing this</h3>
              <p className="itemBody">
                We’re locking the route first to prevent drift and build breaks. Then we expand.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
