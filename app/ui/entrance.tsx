"use client";

import { FormEvent, useState } from "react";

export function Entrance({ configured }: { configured: boolean }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  async function unlock(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBusy(true);
    setError("");
    try {
      const response = await fetch("/api/unlock", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password })
      });
      const data = await response.json();
      if (!response.ok) {
        setError(data.error || "Something went wrong. Please try again.");
        return;
      }
      window.location.reload();
    } catch {
      setError("The universe couldn't open just now. Please try again.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <main className="entrance">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="sparkle sparkle-one">✦</div>
      <div className="sparkle sparkle-two">✧</div>
      <div className="sparkle sparkle-three">✦</div>
      <section className="gate-card">
        <div className="gate-mark">e<span>♡</span></div>
        <p className="eyebrow">A LITTLE WORLD, JUST FOR HER</p>
        <h1>A Universe<br /><em>of Her Own.</em></h1>
        <p className="gate-copy">Somewhere between a daydream and a love note,<br className="desktop-break" /> there's a little universe waiting for you.</p>
        <div className="gate-divider"><span>✧</span></div>
        {configured ? (
          <form className="unlock-form" onSubmit={unlock}>
            <label htmlFor="universe-password">A little secret to come inside</label>
            <div className="password-wrap">
              <input
                id="universe-password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Enter the secret password"
                autoComplete="current-password"
                required
              />
              <button type="submit" disabled={busy || !password.trim()} aria-label="Unlock Eishaverse">
                {busy ? "…" : "→"}
              </button>
            </div>
            {error && <p className="form-error" role="alert">{error}</p>}
          </form>
        ) : (
          <div className="setup-note">
            <span>✧</span>
            <p>This universe is almost ready. Add the <code>EISHAVERSE_PASSWORD</code> environment variable in your hosting settings to open its private entrance.</p>
          </div>
        )}
        <p className="gate-foot">MADE OF LITTLE THINGS & A LOT OF LOVE <span>♡</span></p>
      </section>
      <p className="outside-note">Take a breath. You're right where you belong.</p>
    </main>
  );
}