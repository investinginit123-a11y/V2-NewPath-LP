// app/page.tsx

import Section from "../components/Section";
import LeadForm from "../components/LeadForm";
import FAQ from "../components/FAQ";

export default function Page() {
  return (
    <main>
      <style>{`
        html, body { background: #ffffff !important; }

        #pillars .sectionTitle {
          font-size: clamp(34px, 5vw, 52px);
          line-height: 1.05;
          letter-spacing: -0.02em;
        }
        #pillars .sectionDesc {
          font-size: 16px;
          max-width: 720px;
        }

        /* HERO: AI guided pill — hero artifact */
        .aiGuidedPill {
          display: inline-flex;
          align-items: center;
          gap: 14px;
          padding: 12px 16px;
          border-radius: 999px;
          border: 1px solid rgba(0,0,0,0.12);
          background: #ffffff;
          box-shadow: 0 14px 34px rgba(0,0,0,0.08);
          white-space: nowrap;
        }
        .aiGuidedText {
          font-weight: 900;
          font-size: 12px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          opacity: 0.82;
        }
        .aiGuidedAccent {
          width: 10px;
          height: 46px;
          border-radius: 999px;
          background: var(--accent);
          opacity: 0.14;
          flex: 0 0 auto;
        }
        .aiGuidedEmblem {
          height: 46px;
          width: auto;
          display: block;
          object-fit: contain;
          background: transparent !important;
          border: none !important;
          border-radius: 0 !important;
          padding: 0 !important;
          margin: 0 !important;
        }

        /* Benefits grid (V1-style, clean) */
        .benefitsLead {
          max-width: 820px;
        }
        .benefitsGrid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 12px;
        }
        @media (max-width: 920px) {
          .benefitsGrid { grid-template-columns: 1fr; }
        }

        /* Bottom Door CTA */
        #get-started .doorWrap { display: grid; gap: 14px; }
        #get-started details.doorDetails { border-radius: 22px; }
        #get-started details.doorDetails > summary {
          list-style: none;
          cursor: pointer;
          user-select: none;
          border-radius: 22px;
          padding: 22px 22px;
          border: 1px solid rgba(0,0,0,0.10);
          background: #ffffff;
          box-shadow: 0 18px 44px rgba(0,0,0,0.08);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          font-weight: 800;
          position: relative;
          overflow: hidden;
        }
        #get-started details.doorDetails > summary::-webkit-details-marker { display: none; }
        #get-started details.doorDetails > summary::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, rgba(0,0,0,0.00), rgba(0,0,0,0.03), rgba(0,0,0,0.00));
          transform: translateX(-40%);
          opacity: 0.9;
          pointer-events: none;
        }
        #get-started .doorBadge {
          width: 64px;
          height: 64px;
          border-radius: 16px;
          display: grid;
          place-items: center;
          background: rgba(0,0,0,0.04);
          border: 1px solid rgba(0,0,0,0.08);
          flex: 0 0 auto;
        }
        #get-started .doorIcon {
          width: 26px;
          height: 34px;
          border: 2px solid rgba(0,0,0,0.60);
          border-radius: 6px;
          position: relative;
        }
        #get-started .doorIcon::before {
          content: "";
          position: absolute;
          left: 6px;
          top: 6px;
          right: 6px;
          bottom: 6px;
          border-radius: 4px;
          border: 1px solid rgba(0,0,0,0.18);
        }
        #get-started .doorIcon::after {
          content: "";
          width: 5px;
          height: 5px;
          border-radius: 999px;
          background: rgba(0,0,0,0.60);
          position: absolute;
          right: 5px;
          top: 50%;
          transform: translateY(-50%);
        }
        #get-started .doorText { display: grid; gap: 4px; flex: 1 1 auto; min-width: 0; }
        #get-started .doorTitle { font-size: 18px; line-height: 1.15; letter-spacing: -0.01em; }
        #get-started .doorSub { font-size: 13px; opacity: 0.72; font-weight: 500; line-height: 1.35; }
        #get-started .doorAction {
          padding: 12px 16px;
          border-radius: 14px;
          background: var(--accent);
          color: #fff;
          font-weight: 800;
          white-space: nowrap;
          flex: 0 0 auto;
          box-shadow: 0 10px 20px rgba(0,0,0,0.08);
        }
        #get-started details.doorDetails[open] > summary {
          box-shadow: 0 22px 54px rgba(0,0,0,0.10);
          border-color: rgba(0,0,0,0.14);
        }
        #get-started .doorBody { margin-top: 14px; }
      `}</style>

      <header className="hero">
        <div className="container">
          <div className="nav">
            <div className="brand" style={{ gap: 12 }}>
              <img
                src="/brand/newpath-auto-finance.png"
                alt="New Path Auto Finance"
                style={{
                  width: 288,
                  height: 288,
                  objectFit: "contain",
                  display: "block"
                }}
              />
            </div>

            <div className="aiGuidedPill" aria-label="AI guided by the BALANCE Cipher">
              <span className="aiGuidedText">AI GUIDED BY</span>
              <span className="aiGuidedAccent" aria-hidden="true" />
              <img
                className="aiGuidedEmblem"
                src="/brand/balance-cipher-emblem.png"
                alt="BALANCE Cipher emblem"
              />
            </div>
          </div>

          <div className="gridHero">
            <div className="card">
              <div className="cardInner">
                <h1 className="h1">
                  Create a New Path <span style={{ color: "var(--accent)" }}>forward</span>.
                </h1>

                <p className="sub">
                  NewPath exists to help get you approved—using the BALANCE Cipher and the Co-Pilot to turn your
                  situation into one clear next step.
                </p>

                <div className="pills">
                  <div className="pill">No pressure</div>
                  <div className="pill">No long forms</div>
                  <div className="pill">Real next step</div>
                </div>

                <div className="muted" style={{ fontSize: 12, marginTop: 10 }}>
                  Choose one door below. When you’re ready, you can open your new door at the bottom.
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <Section
        id="pillars"
        title="Choose your door"
        desc="Four clean paths. One clear next step—powered by the BALANCE Cipher and guided by the Co-Pilot."
      >
        <div style={{ display: "grid", gap: 12 }}>
          <div className="card">
            <div className="cardInner">
              <h3 className="itemTitle" style={{ marginTop: 0 }}>Buy your next vehicle the right way</h3>
              <p className="itemBody" style={{ marginBottom: 12 }}>
                Break free from what didn’t work before, learn what matters today, and move forward with clarity.
              </p>
              <a className="btn btnPrimary" href="#get-started">Click here →</a>
            </div>
          </div>

          <div className="card">
            <div className="cardInner">
              <h3 className="itemTitle" style={{ marginTop: 0 }}>Get approved the right way</h3>
              <p className="itemBody" style={{ marginBottom: 12 }}>
                We position you for approval by aligning your next move with the Cipher—translated by the Co-Pilot.
              </p>
              <a className="btn btnPrimary" href="#get-started">Click here →</a>
            </div>
          </div>

          <div className="card">
            <div className="cardInner">
              <h3 className="itemTitle" style={{ marginTop: 0 }}>Understand what happened—and what’s happening today</h3>
              <p className="itemBody" style={{ marginBottom: 12 }}>
                The BALANCE Cipher helps you see why outcomes repeat; the Co-Pilot turns it into one clear next step.
              </p>
              <a className="btn btnPrimary" href="#get-started">Click here →</a>
            </div>
          </div>

          <div className="card">
            <div className="cardInner">
              <h3 className="itemTitle" style={{ marginTop: 0 }}>Let us help you with your path forward—by the BALANCE Cipher</h3>
              <p className="itemBody" style={{ marginBottom: 12 }}>
                If buying today isn’t right, we map the next move to become ready—then execute with clarity.
              </p>
              <a className="btn btnPrimary" href="#get-started">Click here →</a>
            </div>
          </div>
        </div>
      </Section>

      {/* V1-STYLE BENEFITS BLOCK */}
      <Section
        id="simple-clear"
        title="Simple. Clear. Built for action—when you’re guided by an AI-driven system."
        desc="These doors create a simple, clear, built-for-action path—powered by the BALANCE Cipher and guided by the Co-Pilot."
      >
        <div className="benefitsLead" style={{ marginBottom: 12 }}>
          <div className="muted" style={{ fontSize: 12 }}>
            NewPath is the starting line. The Cipher is the follow-through map—so your next move stays simple, calm, and doable.
          </div>
        </div>

        <div className="benefitsGrid">
          <div className="item">
            <h3 className="itemTitle">Clarity first</h3>
            <p className="itemBody">You’ll know where you are and what your next step is—fast.</p>
          </div>

          <div className="item">
            <h3 className="itemTitle">One clean start</h3>
            <p className="itemBody">You choose a door. We route your next move. No overwhelm.</p>
          </div>

          <div className="item">
            <h3 className="itemTitle">North Star vision</h3>
            <p className="itemBody">Car → Score → Home. Auto is the on-ramp to long-term stability.</p>
          </div>

          <div className="item">
            <h3 className="itemTitle">Big picture</h3>
            <p className="itemBody">The Cipher helps you see the pattern—so your next move actually sticks.</p>
          </div>
        </div>
      </Section>

      <Section title="FAQs" desc="Short answers. Clear expectations.">
        <FAQ />
      </Section>

      <Section
        id="get-started"
        title="Ready to open your new door?"
        desc="No pressure. If you choose to step through, share the basics and we’ll route your next step."
      >
        <div className="doorWrap">
          <details className="doorDetails">
            <summary>
              <span className="doorBadge" aria-hidden="true">
                <span className="doorIcon" />
              </span>
              <span className="doorText">
                <span className="doorTitle">Open your new door</span>
                <span className="doorSub">Share only the basics. We’ll follow up with the next step.</span>
              </span>
              <span className="doorAction">Open →</span>
            </summary>

            <div className="doorBody">
              <div className="card">
                <div className="cardInner">
                  <LeadForm sourcePage="newpath-landing" sourceCta="bottom-door" />
                </div>
              </div>
            </div>
          </details>
        </div>
      </Section>
    </main>
  );
}
