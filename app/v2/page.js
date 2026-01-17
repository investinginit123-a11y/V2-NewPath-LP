// app/v2/page.js

import React from "react";

export default function V2NewPathLanding() {
  return (
    <main style={styles.page}>
      {/* ========== SECTION 1: HERO (Promise + Mechanism + Guide Rail) ========== */}
      <section style={styles.heroSection}>
        <div style={styles.heroGrid}>
          {/* Left: Pill + Headline + Body + Micro-line + Primary button */}
          <div style={styles.heroLeft}>
            <div style={styles.pill}>GUIDED BY THE CIPHER. LED BY THE CO-PILOT.</div>

            <h1 style={styles.h1}>Create a New Path forward.</h1>

            <p style={styles.body}>
              You don’t need more tips. You need one clear next step.
              <br />
              Pick your lane below—auto loan steps, approval blockers, or the BALANCE Cipher.
              <br />
              The Co-Pilot turns what you share into a simple plan you can actually follow.
            </p>

            <p style={styles.microLine}>Pick your lane below. We’ll route your next step.</p>

            {/* Primary button scrolls to Section 2 */}
            <a href="#choose" style={{ ...styles.primaryBtn, textDecoration: "none" }}>
              Open a new door →
            </a>
          </div>

          {/* Right: Guide Rail */}
          <aside style={styles.heroRight} aria-label="Guide rail">
            <div style={styles.guideCard}>
              <div style={styles.guideRow}>
                <div style={styles.guideLabel}>Past:</div>
                <div style={styles.guideText}>Stop guessing.</div>
              </div>
              <div style={styles.guideRow}>
                <div style={styles.guideLabel}>Present:</div>
                <div style={styles.guideText}>See what’s real.</div>
              </div>
              <div style={styles.guideRow}>
                <div style={styles.guideLabel}>Next Step:</div>
                <div style={styles.guideText}>Move forward with the Co-Pilot.</div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* ========== SECTION 2: CONTROL PANEL (3 Option Cards) ========== */}
      <section id="choose" style={styles.section}>
        <div style={styles.sectionInner}>
          <h2 style={styles.h2}>Choose your next step.</h2>
          <p style={styles.subheader}>
            The Cipher shows the pattern. The Co-Pilot gives you the next move.
          </p>

          <div style={styles.cardGrid}>
            {/* Option 1 */}
            <div style={styles.card}>
              <h3 style={styles.h3}>How to get an auto loan (the right way)</h3>
              <p style={styles.cardText}>
                See where you are, what lenders look for, and the next step that moves you forward.
              </p>
              <div style={styles.microRail}>Past → Present → Next Step</div>
              <button type="button" style={styles.secondaryBtn} disabled>
                Show me the steps →
              </button>
            </div>

            {/* Option 2 (LOCKED B) */}
            <div style={styles.card}>
              <h3 style={styles.h3}>Why you keep getting “No”</h3>
              <p style={styles.cardText}>
                Without the Cipher, you’re guessing. We’ll find the blockers—and route your next move.
              </p>
              <div style={styles.microRail}>Past → Present → Next Step</div>
              <button type="button" style={styles.secondaryBtn} disabled>
                Find my blockers →
              </button>
            </div>

            {/* Option 3 */}
            <div style={styles.card}>
              <h3 style={styles.h3}>How BALANCE Cipher + Co-Pilot works</h3>
              <p style={styles.cardText}>
                The Cipher shows the pattern. The Co-Pilot turns your situation into one clear next step.
              </p>
              <div style={styles.microRail}>Past → Present → Next Step</div>
              <button type="button" style={styles.secondaryBtn} disabled>
                See how it works →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SECTION 3: FORM (Secondary) ========== */}
      <section style={styles.sectionAlt}>
        <div style={styles.sectionInner}>
          <h2 style={styles.h2}>Save my spot (60 seconds)</h2>
          <p style={styles.subheader}>
            The Cipher spots the pattern. The Co-Pilot uses your info to route the next move.
          </p>

          <form style={styles.form} onSubmit={(e) => e.preventDefault()}>
            <div style={styles.formRow}>
              <label style={styles.label} htmlFor="name">
                Name
              </label>
              <input id="name" name="name" type="text" style={styles.input} placeholder="Your name" />
            </div>

            <div style={styles.formRow}>
              <label style={styles.label} htmlFor="email">
                Email
              </label>
              <input id="email" name="email" type="email" style={styles.input} placeholder="you@email.com" />
            </div>

            <div style={styles.formRow}>
              <label style={styles.label} htmlFor="phone">
                Phone (optional)
              </label>
              <input id="phone" name="phone" type="tel" style={styles.input} placeholder="(###) ###-####" />
            </div>

            <div style={styles.formRow}>
              <label style={styles.label} htmlFor="note">
                What are you trying to solve? (optional)
              </label>
              <textarea
                id="note"
                name="note"
                rows={4}
                style={styles.textarea}
                placeholder="One sentence is enough."
              />
            </div>

            <button type="submit" style={styles.primaryBtn} disabled>
              Save my spot →
            </button>

            <p style={styles.formNote}>
              (Not wired yet.) This form is placed and styled for V2 layout stability.
            </p>
          </form>
        </div>
      </section>

      {/* ========== SECTION 4: REINFORCEMENT (Minimal) ========== */}
      <section style={styles.section}>
        <div style={styles.sectionInner}>
          <h2 style={styles.h2}>Simple. Clear. Built for action.</h2>
          <p style={styles.subheader}>
            The Cipher shows the pattern. The Co-Pilot gives the next move.
          </p>

          <div style={styles.miniGrid}>
            <div style={styles.miniCard}>
              <div style={styles.miniTitle}>CLARITY</div>
              <div style={styles.miniBody}>See it.</div>
            </div>
            <div style={styles.miniCard}>
              <div style={styles.miniTitle}>DIRECTION</div>
              <div style={styles.miniBody}>Route it.</div>
            </div>
            <div style={styles.miniCard}>
              <div style={styles.miniTitle}>FOLLOW-THROUGH</div>
              <div style={styles.miniBody}>Do it.</div>
            </div>
          </div>

          <div style={styles.microRailCentered}>Past → Present → Next Step</div>
        </div>
      </section>

      {/* ========== SECTION 5: FOOTER CLOSE (Locked) ========== */}
      <footer style={styles.footer}>
        <div style={styles.sectionInner}>
          <p style={styles.footerText}>
            Try something different this time.
            <br />
            If you keep doing what you’ve been doing, you’ll keep getting what you’ve been getting. Open a new door.
          </p>
        </div>
      </footer>
    </main>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#0b1220",
    color: "#e8eefc",
    fontFamily:
      'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji"',
  },

  heroSection: {
    padding: "56px 20px 32px",
    borderBottom: "1px solid rgba(255,255,255,0.08)",
  },

  heroGrid: {
    maxWidth: 1100,
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "1.25fr 0.75fr",
    gap: 24,
    alignItems: "start",
  },

  heroLeft: {
    padding: 20,
  },

  heroRight: {
    padding: 20,
  },

  pill: {
    display: "inline-block",
    padding: "8px 12px",
    borderRadius: 999,
    border: "1px solid rgba(82, 255, 214, 0.35)",
    background: "rgba(82, 255, 214, 0.08)",
    color: "#7fffe4",
    fontSize: 12,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    marginBottom: 14,
  },

  h1: {
    fontSize: 44,
    lineHeight: 1.05,
    margin: "0 0 14px",
    letterSpacing: "-0.02em",
  },

  body: {
    fontSize: 16,
    lineHeight: 1.6,
    margin: "0 0 12px",
    color: "rgba(232, 238, 252, 0.9)",
  },

  microLine: {
    margin: "0 0 18px",
    fontSize: 14,
    color: "rgba(232, 238, 252, 0.75)",
  },

  primaryBtn: {
    display: "inline-block",
    padding: "12px 16px",
    borderRadius: 12,
    border: "1px solid rgba(82, 255, 214, 0.35)",
    background: "rgba(82, 255, 214, 0.14)",
    color: "#e8eefc",
    fontWeight: 600,
    cursor: "not-allowed",
    opacity: 0.95,
  },

  guideCard: {
    borderRadius: 16,
    border: "1px solid rgba(255,255,255,0.10)",
    background: "rgba(255,255,255,0.03)",
    padding: 16,
  },

  guideRow: {
    display: "grid",
    gridTemplateColumns: "96px 1fr",
    gap: 10,
    padding: "10px 0",
    borderBottom: "1px solid rgba(255,255,255,0.07)",
  },

  guideLabel: {
    color: "rgba(232, 238, 252, 0.75)",
    fontSize: 13,
  },

  guideText: {
    fontSize: 14,
    color: "rgba(232, 238, 252, 0.92)",
  },

  section: {
    padding: "40px 20px",
  },

  sectionAlt: {
    padding: "40px 20px",
    borderTop: "1px solid rgba(255,255,255,0.08)",
    borderBottom: "1px solid rgba(255,255,255,0.08)",
    background: "rgba(255,255,255,0.02)",
  },

  sectionInner: {
    maxWidth: 1100,
    margin: "0 auto",
  },

  h2: {
    fontSize: 28,
    margin: "0 0 10px",
    letterSpacing: "-0.01em",
  },

  subheader: {
    margin: "0 0 18px",
    color: "rgba(232, 238, 252, 0.78)",
    lineHeight: 1.5,
  },

  cardGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: 16,
  },

  card: {
    borderRadius: 16,
    border: "1px solid rgba(255,255,255,0.10)",
    background: "rgba(255,255,255,0.03)",
    padding: 18,
    display: "flex",
    flexDirection: "column",
    gap: 10,
    minHeight: 210,
  },

  h3: {
    fontSize: 16,
    margin: 0,
  },

  cardText: {
    margin: 0,
    color: "rgba(232, 238, 252, 0.82)",
    lineHeight: 1.5,
    fontSize: 14,
  },

  microRail: {
    marginTop: "auto",
    fontSize: 12,
    color: "rgba(232, 238, 252, 0.65)",
  },

  secondaryBtn: {
    marginTop: 10,
    padding: "10px 12px",
    borderRadius: 12,
    border: "1px solid rgba(255,255,255,0.14)",
    background: "rgba(255,255,255,0.04)",
    color: "#e8eefc",
    fontWeight: 600,
    cursor: "not-allowed",
  },

  form: {
    marginTop: 14,
    borderRadius: 16,
    border: "1px solid rgba(255,255,255,0.10)",
    background: "rgba(255,255,255,0.03)",
    padding: 18,
    maxWidth: 720,
  },

  formRow: {
    display: "flex",
    flexDirection: "column",
    gap: 6,
    marginBottom: 12,
  },

  label: {
    fontSize: 13,
    color: "rgba(232, 238, 252, 0.78)",
  },

  input: {
    padding: "11px 12px",
    borderRadius: 12,
    border: "1px solid rgba(255,255,255,0.14)",
    background: "rgba(0,0,0,0.15)",
    color: "#e8eefc",
    outline: "none",
  },

  textarea: {
    padding: "11px 12px",
    borderRadius: 12,
    border: "1px solid rgba(255,255,255,0.14)",
    background: "rgba(0,0,0,0.15)",
    color: "#e8eefc",
    outline: "none",
    resize: "vertical",
  },

  formNote: {
    marginTop: 10,
    fontSize: 12,
    color: "rgba(232, 238, 252, 0.55)",
  },

  miniGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: 16,
    marginTop: 14,
  },

  miniCard: {
    borderRadius: 16,
    border: "1px solid rgba(255,255,255,0.10)",
    background: "rgba(255,255,255,0.03)",
    padding: 18,
  },

  miniTitle: {
    fontSize: 12,
    letterSpacing: "0.10em",
    textTransform: "uppercase",
    color: "rgba(127, 255, 228, 0.9)",
    marginBottom: 8,
  },

  miniBody: {
    fontSize: 16,
  },

  microRailCentered: {
    marginTop: 16,
    fontSize: 12,
    color: "rgba(232, 238, 252, 0.60)",
  },

  footer: {
    padding: "40px 20px 60px",
    borderTop: "1px solid rgba(255,255,255,0.08)",
  },

  footerText: {
    margin: 0,
    fontSize: 16,
    lineHeight: 1.6,
    color: "rgba(232, 238, 252, 0.88)",
    maxWidth: 900,
  },
};

