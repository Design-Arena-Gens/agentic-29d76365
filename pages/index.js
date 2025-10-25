import Head from "next/head";
import Accordion from "@/components/Accordion";
import styles from "@/styles/Home.module.css";

const accordionItems = [
  {
    title: "Launch instant experiences",
    content:
      "Spin up polished product education tours with a few clicks. Pick from designer-crafted templates and tailor them to your brand in real-time.",
  },
  {
    title: "Collect deep customer insight",
    content:
      "Trigger contextual surveys across your funnel and capture voice-of-customer data. Segment by persona, conversion stage, or activation milestone.",
  },
  {
    title: "Automate lifecycle messaging",
    content:
      "Wire up self-serve onboarding flows that react to user behavior. Ship high-signal nudges without engineering handoffs or lengthy sprint cycles.",
  },
  {
    title: "Track impact effortlessly",
    content:
      "Measure uplift with conversion dashboards built to highlight what changed. Tie experiments to revenue moments and share wins with stakeholders.",
  },
];

export default function Home() {
  return (
    <div className={styles.page}>
      <Head>
        <title>Pulsewave — Interactive Product Storytelling</title>
        <meta
          name="description"
          content="Pulsewave helps growth teams craft immersive product storytelling through interactive accordions and guided narratives."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section className={styles.hero}>
          <div className={styles.heroText}>
            <span className={styles.heroBadge}>Product Storytelling</span>
            <h1 className={styles.heroTitle}>
              Animate your launch moments with interactive accordions.
            </h1>
            <p className={styles.heroSubtitle}>
              Pulsewave gives growth teams a no-code canvas for crafting
              high-impact landing pages. Guide prospects through big ideas using
              engaging accordion narratives that stay on brand.
            </p>
            <div className={styles.heroCtaGroup}>
              <button className={styles.primaryCta}>Start Free Trial</button>
              <button className={styles.secondaryCta}>View Demo</button>
            </div>
          </div>

          <Accordion items={accordionItems} />
        </section>
      </main>

      <section className={styles.logos}>
        <div className={styles.logosTrack}>
          <span>Acme Co</span>
          <span>Nova Labs</span>
          <span>Astrofy</span>
          <span>Stratus</span>
          <span>Hyperlane</span>
        </div>
      </section>

      <footer className={styles.footer}>
        <div>© {new Date().getFullYear()} Pulsewave Labs. All rights reserved.</div>
        <nav className={styles.footerNav}>
          <a href="#">Product</a>
          <a href="#">Solutions</a>
          <a href="#">Pricing</a>
          <a href="#">Docs</a>
          <a href="#">Support</a>
        </nav>
      </footer>
    </div>
  );
}
