import Section from "./components/Section";
import LeadForm from "./components/LeadForm";
import FAQ from "./components/FAQ";

const APPLICATION_URL = "/#get-started"; // TODO: replace with your real application link when ready
const BALANCE_CIPHER_URL = "https://balancecipher.com"; // TODO: replace with your real app link if different

export default function Page() {
  return (
    <main>
      <header className="hero">
        <div className="container">
          <div className="nav">
            <div className="brand">
              <img
                src="/brand/newpath-auto-finance.png"
                alt="New Path Auto Finance"
                className="brandLogo"
              />
            </div>
            <div className="badge">Simple. Clear. Actionable.</div>
          </div>

          <div className="gridHero">
            <div className="card">
              <div className="cardInner">
                <h1 className="h1">
                  Start your next step <span className="accent">with clarity</span>.
                </h1>

                <p className="sub">
                  If you are tired of guessing, you are in the right place. We’ll take your situation,
                  keep it simple, and point you to one clean next step.
                </p>

                <div className="pills">
                  <div className="pill">No pressure</div>
                  <div className="pill">No long forms</div>
                  <div className="pill">Real next step</div>
                </div>

                <div className="buttonRow">
                  <a className="btn btnPrimary" href={APPLICATION_URL}>
                    Start my application →
                  </a>
                  <a className="btn" href={BALANCE_CIPHER_URL} target="_blank" rel="noreferrer">
                    Open BALANCE Cipher →
                  </a>
                </div>

                <div className="microNote">Fast path: start here. We’ll route you based on what you share.</div>
              </div>
            </div>

            <div className="card" id="get-started">
              <div className="cardInner">
                <h2 className="sectionTitle" style={{ marginTop: 0 }}>
                  Tell us where you’re at
                </h2>
                <p className="sectionDesc">
                  We only ask for what we need. You’ll get a follow-up with the next step.
                </p>
                <LeadForm sourcePage="newpath-landing" sourceCta="hero-form" />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* OPTION D: SHORT “HOW TO BUY A CAR” BLOCK — BULLETS + HARD CTA */}
      <Section
        id="how-to-buy-a-car"
        title="How to buy a car (the right way)"
        desc="Short version. No noise. Three moves that push you toward approval."
      >
        <div className="card">
          <div className="cardInner">
            <div className="bulletGrid">
              <div className="bulletItem">
                <div className="bulletTitle">1) Know your numbers</div>
                <div className="bulletBody">Budget, down payment, and what you can truly carry monthly.</div>
              </div>

              <div className="bulletItem">
                <div className="bulletTitle">2) Get positioned for approval</div>
                <div className="bulletBody">Identify the blockers early and route your next move correctly.</div>
              </div>

              <div className="bulletItem">
                <div className="bulletTitle">3) Make one clean move next</div>
                <div className="bulletBody">Not a 30-step checklist. One step you can execute today.</div>
              </div>
            </div>

            <div className="buttonRow" style={{ marginTop: 14 }}>
              <a className="btn btnPrimary" href={APPLICATION_URL}>
                Start my application →
              </a>
              <a className="btn" href={BALANCE_CIPHER_URL} target="_blank" rel="noreferrer">
                Open BALANCE Cipher →
              </a>
            </div>

            <div className="microNote">
              If you want the fastest path: submit the basics. We’ll route the next step based on your situation.
            </div>
          </div>
        </div>
      </Section>

      <Section id="how-it-works" title="How it works" desc="Three simple steps. No extra noise.">
        <div className="split">
          <div className="item">
            <h3 className="itemTitle">1) You send the basics</h3>
            <p className="itemBody">Name, contact info, and what you’re trying to do. That’s it.</p>
          </div>
          <div className="item">
            <h3 className="itemTitle">2) We sort the situation</h3>
            <p className="itemBody">
              We route your lead to the right lane: auto, refinance, rebuild, or next-step planning.
            </p>
          </div>
          <div className="item">
            <h3 className="itemTitle">3) You get one clear next step</h3>
            <p className="itemBody">
              Not a lecture. Not a checklist of 30 things. One clean move to take next.
            </p>
          </div>
          <div className="item">
            <h3 className="itemTitle">What this is not</h3>
            <p className="itemBody">
              This is not “magic credit repair.” It’s clarity, planning, and execution—one step at a time.
            </p>
          </div>
        </div>
      </Section>

      <Section title="FAQ" desc="Quick answers. Clear expectations.">
        <FAQ />
      </Section>

      <Section title="Ready to take the next step?" desc="Drop your info and we’ll route it correctly.">
        <div className="card">
          <div className="cardInner">
            <LeadForm sourcePage="newpath-landing" sourceCta="bottom-cta" />
          </div>
        </div>
      </Section>
    </main>
  );
}
