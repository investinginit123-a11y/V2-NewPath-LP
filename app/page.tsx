// app/page.tsx

import Section from "../components/Section";
import LeadForm from "../components/LeadForm";
import FAQ from "../components/FAQ";

export default function Page() {
  return (
    <main>
      {/* GLOBAL WHITE CANVAS OVERRIDE */}
      <style>{`
        html, body { background: #ffffff !important; }

        /* Make the Section title for the pillars block read like a hero line */
        #pillars .sectionTitle {
          font-size: clamp(34px, 5vw, 52px);
          line-height: 1.05;
          letter-spacing: -0.02em;
        }
        #pillars .sectionDesc {
          font-size: 16px;
          max-width: 720px;
        }

        /* Door CTA (bottom) — button-first, form hidden until user opts in */
        #get-started .doorWrap {
          display: grid;
          gap: 12px;
        }

        #get-started details.doorDetails {
          border-radius: 18px;
        }

        #get-started details.doorDetails > summary {
          list-style: none;
          cursor: pointer;
          user-select: none;
          border-radius: 18px;
          padding: 18px 18px;
          border: 1px solid rgba(0,0,0,0.10);
          background: #fff;
          box-shadow: 0 12px 28px rgba(0,0,0,0.06);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          font-weight: 700;
        }

        /* hide default marker */
        #get-started details.doorDetails > summary::-webkit-details-marker { display: none; }

        /* “Door” visual */
        #get-started .doorIcon {
          width: 18px;
          height: 26px;
          border: 2px solid rgba(0,0,0,0.55);
          border-radius: 4px;
          position: relative;
          flex: 0 0 auto;
        }
        #get-started .doorIcon::after {
          content: "";
          width: 4px;
          height: 4px;
          border-radius: 999px;
          background: rgba(0,0,0,0.55);
          position: absolute;
          right: 3px;
          top: 50%;
          transform: translateY(-50%);
        }

        #get-started .doorText {
          display: grid;
          gap: 2px;
          flex: 1 1 auto;
          min-width: 0;
        }
        #get-started .doorTitle {
          font-size: 16px;
          line-height: 1.2;
        }
        #get-started .doorSub {
          font-size: 12px;
          opacity: 0.72;
          font-weight: 500;
        }

        #get-started .doorAction {
          padding: 10px 14px;
          border-radius: 12px;
          background: var(--accent);
          color: #fff;
          font-weight: 700;
          white-space: nowrap;
          flex: 0 0 auto;
        }

        #get-started details.doorDetails[open] > summary {
          box-shadow: 0 18px 40px rgba(0,0,0,0.09);
        }

        #get-started .doorBody {
          margin-top: 12px;
        }
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
            <div className="badge">Simple. Clear. Actionable.</div>
          </div>

          <div className="gridHero">
            <div className="card">
              <div className="cardInner">
                <h1 className="h1">
                  New Path Financial — <span style={{ color: "var(--accent)" }}>Open your new door</span>.
                </h1>

                <p className="sub">
                  NewPath exists to help get you approved—by using the BALANCE Cipher and the Co-Pilot to turn your
                  situation into one clear next step.
                </p>

                <div className="pills">
                  <div className="pill">No pressure</div>
                  <div className="pill">No long forms</div>
                  <div className="pill">Real next step</div>
                </div>

                <div className="muted" style={{ fontSize: 12, marginTop: 10 }}>
                  Choose one door below. When you’re ready, you can share the basics at the bottom.
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 4 CTA PILLARS — ARCHITECTURE ONLY */}
      <Section
        id="pillars"
        title="Choose your door"
        desc="Four clean paths. One clear next step—powered by the BALANCE Cipher and guided by the Co-Pilot."
      >
        <div style={{ display: "grid", gap: 12 }}>
          <div className="card">
            <div className="cardInner">
              <h3 className="itemTitle" style={{ marginTop: 0 }}>
                Buy your next vehicle the right way
              </h3>
              <p className="itemBody" style={{ marginBottom: 12 }}>
                Break free from what didn’t work before, learn what matters today, and move forward with clarity.
              </p>
              <a className="btn btnPrimary" href="#get-started">
                Click here →
              </a>
            </div>
          </div>

          <div className="card">
            <div className="cardInner">
              <h3 className="itemTitle" style={{ marginTop: 0 }}>
                Get approved the right way
              </h3>
              <p className="itemBody" style={{ marginBottom: 12 }}>
                We position you for approval by aligning your next move with the Cipher—translated by the Co-Pilot.
              </p>
              <a className="btn btnPrimary" href="#get-started">
                Click here →
              </a>
            </div>
          </div>

          <div className="card">
            <div className="cardInner">
              <h3 className="itemTitle" style={{ marginTop: 0 }}>
                Understand what happened—and what’s happening today
              </h3>
              <p className="itemBody" style={{ marginBottom: 12 }}>
                The BALANCE Cipher helps you see why outcomes repeat; the Co-Pilot turns it into one clear next step.
              </p>
              <a className="btn btnPrimary" href="#get-started">
                Click here →
              </a>
            </div>
          </div>

          <div className="card">
            <div className="cardInner">
              <h3 className="itemTitle" style={{ marginTop: 0 }}>
                Let us help you with your path forward—by the BALANCE Cipher
              </h3>
              <p className="itemBody" style={{ marginBottom: 12 }}>
                If buying today isn’t right, we map the next move to become ready—then execute with clarity.
              </p>
              <a className="btn btnPrimary" href="#get-started">
                Click here →
              </a>
            </div>
          </div>
        </div>
      </Section>

      <Section title="FAQ" desc="Quick answers. Clear expectations.">
        <FAQ />
      </Section>

      {/* BOTTOM: CTA-FIRST “DOOR”, FORM HIDDEN UNTIL THEY OPT IN */}
      <Section
        id="get-started"
        title="Ready to open your new door?"
        desc="No pressure. If you choose to step through, share the basics and we’ll route your next step."
      >
        <div className="doorWrap">
          <details className="doorDetails">
            <summary>
              <span className="doorIcon" aria-hidden="true" />
              <span className="doorText">
                <span className="doorTitle">Step through the door</span>
                <span className="doorSub">Share only the basics. We’ll follow up with the next step.</span>
              </span>
              <span className="doorAction">Continue →</span>
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
