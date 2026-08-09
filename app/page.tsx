"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const linkedinUrl =
  "https://www.linkedin.com/in/shamsh-tabrez-shaikh-7652ba176";
const githubUrl = "https://github.com/tabrez-source";
const repositoryUrl =
  "https://github.com/tabrez-source/NovaTrade-Sales-Inventory-Analytics";
const releaseUrl = `${repositoryUrl}/releases/tag/v1.0.0`;
const showcaseUrl =
  "https://novatrade-analytics.shaikhtabrez56.chatgpt.site";
const resumeUrl = "/resume/Shamsh_Tabrez_Shaikh_Data_BI_Resume.pdf";

const navItems = [
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

const profileSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  name: "Shamsh Tabrez Shaikh - Data & BI Portfolio",
  url: "https://shamsh-tabrez-portfolio.shaikhtabrez56.chatgpt.site",
  mainEntity: {
    "@type": "Person",
    name: "Shamsh Tabrez Shaikh",
    jobTitle: "Data Analyst and Power BI Developer",
    address: {
      "@type": "PostalAddress",
      addressRegion: "Ontario",
      addressCountry: "CA",
    },
    sameAs: [linkedinUrl, githubUrl],
    alumniOf: [
      { "@type": "CollegeOrUniversity", name: "Conestoga College" },
      {
        "@type": "CollegeOrUniversity",
        name: "Vidyalankar School of Information Technology",
      },
    ],
    knowsAbout: [
      "Power BI",
      "DAX",
      "Power Query",
      "SQL Server",
      "Business Intelligence",
      "Dimensional Modeling",
      "Data Validation",
    ],
  },
  hasPart: {
    "@type": "CreativeWork",
    name: "NovaTrade Sales & Inventory Analytics",
    url: showcaseUrl,
    codeRepository: repositoryUrl,
    creator: { "@type": "Person", name: "Shamsh Tabrez Shaikh" },
  },
};

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  const [activeSection, setActiveSection] = useState("work");

  useEffect(() => {
    const sections = navItems
      .map(({ id }) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActiveSection(visible.target.id);
      },
      { rootMargin: "-28% 0px -60%", threshold: [0.05, 0.2, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <main id="top">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profileSchema) }}
      />

      <a className="skip-link" href="#main-content">Skip to content</a>

      <header className="site-header">
        <div className="header-inner">
          <a className="brand" href="#top" aria-label="Shamsh Tabrez Shaikh, home">
            <span className="brand-mark" aria-hidden="true">STS</span>
            <span>
              Shamsh Tabrez Shaikh
              <small>Data &amp; BI</small>
            </span>
          </a>

          <nav aria-label="Primary navigation">
            {navItems.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                className={activeSection === id ? "active" : ""}
                aria-current={activeSection === id ? "location" : undefined}
              >
                {label}
              </a>
            ))}
          </nav>

          <a className="resume-cta" href={resumeUrl} target="_blank" rel="noreferrer">
            Resume <Arrow />
          </a>
        </div>
      </header>

      <section className="hero" id="main-content">
        <div className="hero-copy">
          <p className="eyebrow">Data Analyst · Power BI Developer · Ontario</p>
          <h1>Turning operational data into trusted business decisions.</h1>
          <p className="hero-lead">
            I combine SQL Server, dimensional modeling, DAX, and Power BI with
            firsthand manufacturing and data-operations context to build reporting
            that is clear, validated, and useful.
          </p>
          <div className="hero-actions">
            <a className="button primary" href={showcaseUrl} target="_blank" rel="noreferrer">
              Explore NovaTrade <Arrow />
            </a>
            <a className="button secondary" href={resumeUrl} target="_blank" rel="noreferrer">
              View resume <Arrow />
            </a>
            <a className="text-link" href={linkedinUrl} target="_blank" rel="noreferrer">
              LinkedIn <Arrow />
            </a>
          </div>
          <div className="availability">
            <span aria-hidden="true" /> Open to Data Analyst, BI Analyst, Reporting
            Analyst, and Power BI opportunities
          </div>
        </div>

        <a className="hero-proof" href={showcaseUrl} target="_blank" rel="noreferrer" aria-label="Open the NovaTrade showcase website">
          <div className="proof-topline">
            <span>Featured release</span>
            <strong>NovaTrade v1.0.0</strong>
          </div>
          <Image
            src="/novatrade/01-executive-overview.png"
            alt="NovaTrade Power BI Executive Overview with sales, orders, units, distributor reach, trends, and regional performance"
            width="1317"
            height="732"
            unoptimized
            priority
          />
          <div className="proof-caption">
            <span>SQL Server → Star Schema → Power BI</span>
            <span>Open case study <Arrow /></span>
          </div>
        </a>
      </section>

      <section className="proof-strip" aria-label="Portfolio proof points">
        <article><strong>1.35M+</strong><span>validated fact records</span></article>
        <article><strong>81</strong><span>documented DAX measures</span></article>
        <article><strong>5</strong><span>decision-focused report pages</span></article>
        <article><strong>11 / 11</strong><span>release checks passed</span></article>
      </section>

      <section className="section work-section" id="work">
        <div className="section-heading">
          <div>
            <span className="section-label">01 · Selected work</span>
            <h2>One project, shown with enough depth to prove the work.</h2>
          </div>
          <p>
            NovaTrade is a synthetic, independently built portfolio case study. It
            demonstrates technical delivery and analytical thinking without being
            presented as employer work.
          </p>
        </div>

        <article className="project-card">
          <div className="project-copy">
            <div className="project-title">
              <span>Released · v1.0.0</span>
              <h3>NovaTrade Sales &amp; Inventory Analytics</h3>
            </div>
            <p className="project-lead">
              A multi-branch distribution business needs one trusted view of sales,
              products, distributors, ownership, and inventory movement.
            </p>
            <p>
              I built the analytical path from generated operational files through
              SQL Server staging, normalized OLTP, a dimensional warehouse, and a
              governed Power BI semantic model.
            </p>

            <div className="architecture" aria-label="NovaTrade data architecture">
              <span>Source files</span><i>→</i><span>SQL Server</span><i>→</i>
              <span>Star schema</span><i>→</i><span>DAX + RLS</span><i>→</i>
              <span>Power BI</span>
            </div>

            <ul className="project-proof">
              <li><strong>Business:</strong> executive, sales, product, inventory, and management decisions</li>
              <li><strong>Engineering:</strong> PBIP/TMDL, dynamic branch-level RLS, validation, and CI</li>
              <li><strong>Evidence:</strong> public repository, release package, documentation, and case-study site</li>
            </ul>

            <div className="project-actions">
              <a className="button primary" href={showcaseUrl} target="_blank" rel="noreferrer">View showcase <Arrow /></a>
              <a className="button secondary" href={repositoryUrl} target="_blank" rel="noreferrer">GitHub repository <Arrow /></a>
              <a className="text-link" href={releaseUrl} target="_blank" rel="noreferrer">Release evidence <Arrow /></a>
            </div>
          </div>

          <figure className="project-image">
            <Image
              src="/novatrade/05-management-insights.png"
              alt="NovaTrade Management Insights report showing performance exceptions and management actions"
              width="1310"
              height="728"
              unoptimized
            />
            <figcaption>Management Insights · one of five released report pages</figcaption>
          </figure>
        </article>
      </section>

      <section className="about-section" id="about">
        <div className="section about-inner">
          <div className="section-heading light">
            <div>
              <span className="section-label">02 · About</span>
              <h2>Technical training, grounded in real operations.</h2>
            </div>
            <p>
              My profile is built honestly: project work proves my BI capability;
              employment experience gives me practical business context.
            </p>
          </div>

          <div className="about-grid">
            <div className="about-story">
              <p className="about-lead">
                I know the difference between understanding a business process and
                claiming analytics work that was never performed.
              </p>
              <p>
                My manufacturing roles exposed me to production flow, target-versus-
                actual output, defects, rework, bottlenecks, inventory movement, and
                quality checkpoints. My data education and NovaTrade work show how I
                translate that context into models, measures, and decision-ready
                reporting.
              </p>
              <p>
                I am now targeting Canadian Data Analyst, BI Analyst, Reporting
                Analyst, and Power BI Developer roles where reliability and clear
                communication matter as much as visual polish.
              </p>
            </div>

            <aside className="credentials" aria-label="Education and career context">
              <article><span>2024</span><div><strong>Reporting Systems &amp; Database Development</strong><p>Postgraduate Certificate · Conestoga College</p></div></article>
              <article><span>2024</span><div><strong>Big Data Solutions Architecture</strong><p>Postgraduate Certificate · Conestoga College</p></div></article>
              <article><span>2019</span><div><strong>BSc Information Technology</strong><p>Vidyalankar School of Information Technology</p></div></article>
              <article><span>Now</span><div><strong>Ontario manufacturing operations</strong><p>Production, quality, flow, and KPI context</p></div></article>
            </aside>
          </div>
        </div>
      </section>

      <section className="section skills-section" id="skills">
        <div className="section-heading">
          <div>
            <span className="section-label">03 · Capabilities</span>
            <h2>A practical Business Intelligence toolkit.</h2>
          </div>
          <p>
            Core strengths in SQL Server and Power BI, supported by business analysis
            and reliable delivery practices demonstrated through NovaTrade.
          </p>
        </div>

        <div className="skill-grid">
          <article>
            <span className="skill-index">01</span>
            <h3>SQL &amp; Data Systems</h3>
            <p>Designing reliable structures from operational data.</p>
            <ul>
              <li>T-SQL and SQL Server</li>
              <li>Staging and OLTP design</li>
              <li>Star-schema modeling</li>
              <li>Views and analytical queries</li>
              <li>Data quality validation</li>
            </ul>
          </article>
          <article>
            <span className="skill-index">02</span>
            <h3>Power BI &amp; DAX</h3>
            <p>Building governed models and usable reporting experiences.</p>
            <ul>
              <li>Power Query and data shaping</li>
              <li>Relationships and filter context</li>
              <li>DAX measures and time intelligence</li>
              <li>KPI and report design</li>
              <li>Navigation and accessibility</li>
            </ul>
          </article>
          <article>
            <span className="skill-index">03</span>
            <h3>Business Analysis</h3>
            <p>Connecting data work to the decision behind it.</p>
            <ul>
              <li>KPI definition</li>
              <li>Requirements translation</li>
              <li>Operational reporting</li>
              <li>Trend and variance analysis</li>
              <li>Insight communication</li>
            </ul>
          </article>
          <article className="delivery-card">
            <span className="skill-index">04</span>
            <h3>Delivery &amp; Governance</h3>
            <p>Making analytical work secure, testable, and ready to share.</p>
            <ul>
              <li>PBIP and TMDL source structure</li>
              <li>Dynamic row-level security</li>
              <li>Git and GitHub workflows</li>
              <li>Documentation and release checks</li>
              <li>CI validation fundamentals</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div>
          <span className="section-label">04 · Contact</span>
          <h2>Looking for a Data &amp; BI professional who understands operations?</h2>
          <p>
            I am based in Ontario, authorized to work in Canada, and open to onsite,
            hybrid, and remote-friendly opportunities.
          </p>
        </div>
        <div className="contact-actions">
          <a className="button dark" href="mailto:shaikhtabrez56@gmail.com">Email me <Arrow /></a>
          <a className="button light-button" href={linkedinUrl} target="_blank" rel="noreferrer">Connect on LinkedIn <Arrow /></a>
          <a className="button light-button" href={resumeUrl} target="_blank" rel="noreferrer">Open resume <Arrow /></a>
        </div>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top">
          <span className="brand-mark" aria-hidden="true">STS</span>
          <span>Shamsh Tabrez Shaikh<small>Data Analyst · Power BI Developer</small></span>
        </a>
        <div className="footer-links">
          <a href={githubUrl} target="_blank" rel="noreferrer">GitHub</a>
          <a href={linkedinUrl} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={showcaseUrl} target="_blank" rel="noreferrer">NovaTrade</a>
        </div>
        <p>Independent project evidence · honest employment context · Ontario, Canada</p>
      </footer>
    </main>
  );
}
