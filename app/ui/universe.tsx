"use client";

import { useState } from "react";

const places = [
  { number: "01", icon: "♡", title: "Her Little World", note: "The little things that make her, her.", tone: "rose", detail: "Favourite things, tiny habits, comfort rituals and all the lovely little details that make Eisha unmistakably Eisha." },
  { number: "02", icon: "☾", title: "Dreamland", note: "All the places her heart wants to go.", tone: "lilac", detail: "Her dreams, ambitions, plans and the future she's quietly (or loudly) imagining." },
  { number: "03", icon: "✿", title: "The Eisha Department", note: "A very serious institution. Obviously.", tone: "butter", detail: "Masters in Loveology. PhD in Anger. Professional Bossing. Department policies are subject to her mood." },
  { number: "04", icon: "✧", title: "Hidden Corners", note: "Psst… not everything is on the map.", tone: "mint", detail: "Little Easter eggs, secret notes and unexpected surprises. Some things are better discovered." }
];

export function Universe() {
  const [active, setActive] = useState<number | null>(null);

  async function lock() {
    await fetch("/api/lock", { method: "POST" });
    window.location.reload();
  }

  return (
    <main className="universe">
      <header className="site-header">
        <a className="wordmark" href="#top">eishaverse<span>♡</span></a>
        <nav aria-label="Main navigation">
          <a href="#explore">Explore</a>
          <a href="#little-note">A little note</a>
        </nav>
        <button className="lock-button" onClick={lock}>Lock the door <span>↗</span></button>
      </header>

      <section className="hero" id="top">
        <div className="hero-orbit orbit-one" />
        <div className="hero-orbit orbit-two" />
        <span className="hero-star star-a">✦</span>
        <span className="hero-star star-b">✧</span>
        <span className="hero-star star-c">·</span>
        <div className="hero-content">
          <p className="eyebrow">A LITTLE WORLD, JUST FOR HER</p>
          <h1>There is a whole<br /><em>universe</em> in being you.</h1>
          <p className="hero-copy">A collection of little things, big dreams, silly moments<br className="desktop-break" /> and everything that makes Eisha, Eisha.</p>
          <a className="primary-link" href="#explore">Wander around <span>↓</span></a>
        </div>
        <div className="hero-caption"><span>✧</span> EST. WITH LOVE <span>✧</span></div>
      </section>

      <section className="intro" id="explore">
        <p className="eyebrow">A MAP OF HER UNIVERSE</p>
        <h2>Every little thing<br />has <em>its own place.</em></h2>
        <p className="intro-copy">Some corners are dreamy. Some are a little chaotic.<br />All of them belong here.</p>
      </section>

      <section className="world-grid" aria-label="Explore Eishaverse">
        {places.map((place, index) => (
          <button
            className={`world-card ${place.tone} ${active === index ? "selected" : ""}`}
            key={place.number}
            onClick={() => setActive(active === index ? null : index)}
            aria-expanded={active === index}
          >
            <span className="card-top"><span>THE COLLECTION</span><span>{place.number}</span></span>
            <span className="card-icon">{place.icon}</span>
            <span className="card-title">{place.title}</span>
            <span className="card-note">{place.note}</span>
            <span className="card-bottom">{active === index ? "CLOSE THIS CORNER" : "PEEK INSIDE"} <span>↗</span></span>
          </button>
        ))}
      </section>

      {active !== null && (
        <section className="detail-panel" aria-live="polite">
          <p className="eyebrow">A LITTLE MORE ABOUT THIS CORNER</p>
          <h3>{places[active].title}</h3>
          <p>{places[active].detail}</p>
          <span className="detail-flower">✿</span>
        </section>
      )}

      <section className="note-section" id="little-note">
        <div className="note-card">
          <span className="note-sparkle">✧</span>
          <p className="eyebrow">A NOTE FOR THE MAIN CHARACTER</p>
          <h2>Never forget how<br /><em>lovely it is to be you.</em></h2>
          <p>This little universe is a reminder that the smallest details can mean the most. There's no need to be anyone else here. Just be you.</p>
          <span className="note-heart">♡</span>
        </div>
      </section>

      <footer className="site-footer">
        <a className="wordmark" href="#top">eishaverse<span>♡</span></a>
        <p>A universe of her own.</p>
        <span>MADE WITH A LITTLE EXTRA LOVE ✧</span>
      </footer>
    </main>
  );
}