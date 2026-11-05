"use client";

export function Universe() {
  async function lock() {
    await fetch("/api/lock", { method: "POST" });
    window.location.reload();
  }

  return (
    <main className="universe">
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Eishaverse home">eishaverse<span>✳</span></a>
        <nav aria-label="Main navigation">
          <a href="#world">The world</a>
          <a href="#chapters">Inside her world</a>
          <a href="#note">A note</a>
        </nav>
        <button className="lock-button" onClick={lock}>Close the door <span>↗</span></button>
      </header>

      <section className="hero" id="top">
        <div className="hero-grain" />
        <div className="hero-visual" aria-hidden="true">
          <div className="hero-disc" />
          <span className="hero-orbit hero-orbit-one" />
          <span className="hero-orbit hero-orbit-two" />
          <span className="hero-spark hero-spark-one">✳</span>
          <span className="hero-spark hero-spark-two">✧</span>
        </div>
        <div className="hero-content">
          <p className="eyebrow">A PRIVATE WORLD · MADE WITH LOVE</p>
          <h1>A universe<br />of <em>her own.</em></h1>
          <p className="hero-copy">A little more of everything that makes her,<br className="desktop-break" /> wonderfully and entirely herself.</p>
          <a className="primary-link" href="#world">ENTER EISHAVERSE <span>↓</span></a>
        </div>
        <div className="hero-index"><span>01</span><i /> A WORLD DEDICATED TO EISHA</div>
        <div className="hero-side-note">SOMEWHERE BETWEEN A DREAM & REALITY</div>
      </section>

      <section className="manifesto" id="world">
        <div className="manifesto-kicker"><span>THE IDEA</span><span>EST. WITH LOVE</span></div>
        <div className="manifesto-body">
          <p className="eyebrow">NOT JUST A WEBSITE</p>
          <h2>Some people deserve<br />a world <em>of their own.</em></h2>
          <p className="manifesto-copy">So this one is hers. A place for the details, the daydreams, the memories and the little things that deserve more than a passing mention.</p>
        </div>
        <div className="manifesto-mark" aria-hidden="true">E.</div>
      </section>

      <section className="chapters" id="chapters">
        <div className="section-heading">
          <div><p className="eyebrow">A FEW OF HER MANY SIDES</p><h2>All the things<br /><em>that make her.</em></h2></div>
          <p className="section-aside">Not a checklist. Not a collection of boxes to open.<br />Just little windows into a world that is uniquely hers.</p>
        </div>

        <article className="chapter chapter-feature">
          <div className="chapter-art art-portrait" aria-hidden="true"><span className="art-letter">Her.</span><span className="art-caption">ONE OF ONE · ALWAYS</span><i className="art-ring" /></div>
          <div className="chapter-copy"><span className="chapter-number">01 / THE PERSON</span><h3>Her little<br /><em>universe.</em></h3><p>The details that make her who she is. The things she loves, the habits that are so her, the little quirks that could never belong to anyone else.</p><span className="chapter-foot">THE BEAUTY IS IN THE DETAILS</span></div>
        </article>

        <article className="chapter chapter-reverse">
          <div className="chapter-art art-dreams" aria-hidden="true"><span className="dream-word">somewhere<br /><em>in the stars</em></span><span className="art-caption">A FUTURE OF HER OWN</span><i className="dream-moon" /></div>
          <div className="chapter-copy"><span className="chapter-number">02 / THE DAYDREAMS</span><h3>Things she's<br /><em>yet to become.</em></h3><p>Her ambitions, her plans, the places she hopes to see and the future she's still writing. There's room here for every version of her that's on the way.</p><span className="chapter-foot">TO BE CONTINUED…</span></div>
        </article>

        <article className="chapter">
          <div className="chapter-art art-moments" aria-hidden="true"><span className="moments-word">little<br />things<span> matter.</span></span><span className="art-caption">THE ORDINARY, MADE EXTRAORDINARY</span><i className="moment-star">✳</i></div>
          <div className="chapter-copy"><span className="chapter-number">03 / THE IN-BETWEEN</span><h3>Moments worth<br /><em>keeping.</em></h3><p>Snapshots, memories, conversations and tiny moments that might seem ordinary to everyone else — but mean something here.</p><span className="chapter-foot">A PLACE FOR THE GOOD STUFF</span></div>
        </article>

        <article className="chapter chapter-reverse">
          <div className="chapter-art art-notes" aria-hidden="true"><span className="note-art-mark">♡</span><span className="note-art-text">for the days<br />she needs a<br /><em>little reminder.</em></span><span className="art-caption">OPEN WHENEVER</span></div>
          <div className="chapter-copy"><span className="chapter-number">04 / THE LOVE NOTES</span><h3>A few words<br /><em>for her.</em></h3><p>Little reminders, words she can come back to, and messages written for no particular reason other than she deserves them.</p><span className="chapter-foot">ALWAYS WORTH SAYING</span></div>
        </article>
      </section>

      <section className="cinema" aria-label="A universe of her own">
        <div className="cinema-inner"><p className="eyebrow">AND IF THE WORLD GETS LOUD…</p><h2>May this always feel<br />like a place <em>to exhale.</em></h2><span className="cinema-star">✳</span><p>A little corner of the internet that asks nothing of her.<br />Just a reminder that being herself is more than enough.</p></div>
      </section>

      <section className="note-section" id="note">
        <div className="note-card">
          <span className="note-overline">A NOTE FOR EISHA</span>
          <h2>There is no one<br />quite like <em>you.</em></h2>
          <p>This universe doesn't need you to be anything other than exactly who you are. Every chapter, every little detail, every unfinished dream — they all belong.</p>
          <span className="note-signoff">With love, always <b>♡</b></span>
        </div>
      </section>

      <footer className="site-footer">
        <a className="wordmark" href="#top">eishaverse<span>✳</span></a>
        <p>A universe of her own.</p>
        <span>MADE WITH LOVE · FOR EISHA</span>
      </footer>
    </main>
  );
}
