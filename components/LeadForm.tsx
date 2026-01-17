"use client";

import React, { useMemo, useState } from "react";

type Props = {
  sourcePage: string;
  sourceCta: string;
};

type Status =
  | { kind: "idle" }
  | { kind: "submitting" }
  | { kind: "ok"; message: string }
  | { kind: "bad"; message: string };

function getUtm(param: string): string {
  if (typeof window === "undefined") return "";
  const url = new URL(window.location.href);
  return url.searchParams.get(param) ?? "";
}

export default function LeadForm({ sourcePage, sourceCta }: Props) {
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  const defaults = useMemo(() => {
    return {
      utm_source: typeof window === "undefined" ? "" : getUtm("utm_source"),
      utm_medium: typeof window === "undefined" ? "" : getUtm("utm_medium"),
      utm_campaign: typeof window === "undefined" ? "" : getUtm("utm_campaign"),
      utm_content: typeof window === "undefined" ? "" : getUtm("utm_content"),
      utm_term: typeof window === "undefined" ? "" : getUtm("utm_term")
    };
  }, []);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus({ kind: "submitting" });

    const form = e.currentTarget;
    const fd = new FormData(form);

    const payload = {
      fullName: String(fd.get("fullName") || "").trim(),
      phone: String(fd.get("phone") || "").trim(),
      email: String(fd.get("email") || "").trim(),
      goal: String(fd.get("goal") || "").trim(),
      notes: String(fd.get("notes") || "").trim(),
      sourcePage,
      sourceCta,
      utm: {
        source: defaults.utm_source,
        medium: defaults.utm_medium,
        campaign: defaults.utm_campaign,
        content: defaults.utm_content,
        term: defaults.utm_term
      }
    };

    if (!payload.fullName || (!payload.phone && !payload.email)) {
      setStatus({ kind: "bad", message: "Please add your name and either a phone number or email." });
      return;
    }

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; message?: string };

      if (!res.ok || !data.ok) {
        setStatus({ kind: "bad", message: data.message || "Something failed. Please try again." });
        return;
      }

      form.reset();
      setStatus({ kind: "ok", message: "Received. We’ll follow up with the next step." });
    } catch {
      setStatus({ kind: "bad", message: "Network error. Please try again." });
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <div style={{ display: "grid", gap: 10 }}>
        <div>
          <label style={{ display: "block", fontSize: 13, color: "var(--muted)", marginBottom: 6 }}>
            Full name
          </label>
          <input className="input" name="fullName" placeholder="Your name" autoComplete="name" />
        </div>

        <div className="split" style={{ gridTemplateColumns: "1fr 1fr" }}>
          <div>
            <label style={{ display: "block", fontSize: 13, color: "var(--muted)", marginBottom: 6 }}>
              Phone (optional)
            </label>
            <input className="input" name="phone" placeholder="(555) 555-5555" autoComplete="tel" />
          </div>
          <div>
            <label style={{ display: "block", fontSize: 13, color: "var(--muted)", marginBottom: 6 }}>
              Email (optional)
            </label>
            <input className="input" name="email" placeholder="you@email.com" autoComplete="email" />
          </div>
        </div>

        <div>
          <label style={{ display: "block", fontSize: 13, color: "var(--muted)", marginBottom: 6 }}>
            What are you trying to do?
          </label>
          <select className="input" name="goal" defaultValue="">
            <option value="" disabled>
              Choose one…
            </option>
            <option value="auto-approval">Get approved for a vehicle</option>
            <option value="refinance">Refinance or lower payments</option>
            <option value="credit-rebuild">Rebuild credit / get clarity</option>
            <option value="not-sure">Not sure yet</option>
          </select>
        </div>

        <div>
          <label style={{ display: "block", fontSize: 13, color: "var(--muted)", marginBottom: 6 }}>
            Notes (optional)
          </label>
          <input className="input" name="notes" placeholder="One sentence is enough." />
        </div>

        <button className="btn btnPrimary" type="submit" disabled={status.kind === "submitting"}>
          {status.kind === "submitting" ? "Submitting…" : "Send"}
        </button>

        {status.kind === "ok" ? <div className="muted">{status.message}</div> : null}
        {status.kind === "bad" ? <div className="muted">{status.message}</div> : null}
      </div>
    </form>
  );
}

