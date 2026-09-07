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
  "https://novatrade.shamshtabrez.com";
const resumeUrl = "/resume/Shamsh_Tabrez_RecruiterStory_Data_BI_Analyst_OnePage.pdf";
const manufacturingUrl =
  "https://github.com/tabrez-source/manufacturing-intelligence-fabric";

const careerJourney = [
  { year: "2019", title: "Operational data & reporting", detail: "Attendance records, validation, and client support" },
  { year: "2021", title: "Sales & market analytics", detail: "Sales, inventory, and management reporting" },
  { year: "2023–24", title: "Canadian data education", detail: "Databases, reporting systems, and data architecture" },
  { year: "2025", title: "Manufacturing context", detail: "Production, quality, and material flow" },
  { year: "2026", title: "BI & manufacturing analytics", detail: "NovaTrade delivery and operational KPI exposure" },
  { year: "Next", title: "Fabric & data engineering", detail: "Developing through Manufacturing Intelligence" },
];

const navItems = [
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

const profileSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  name: "Shamsh Tabrez Shaikh - BI & Data Analyst Portfolio",
  url: "https://shamshtabrez.com",
  dateModified: "2026-09-07",
  mainEntity: {
    "@type": "Person",
    name: "Shamsh Tabrez Shaikh",
    jobTitle: "BI & Data Analyst",
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
      "Data Warehousing",
      "Manufacturing Analytics",
    ],
  },
  hasPart: [
    {
      "@type": "SoftwareSourceCode",
      name: "NovaTrade Sales & Inventory Analytics",
      description: "Released independent Business Intelligence project using synthetic distribution data.",
      url: showcaseUrl,
      codeRepository: repositoryUrl,
      creator: { "@type": "Person", name: "Shamsh Tabrez Shaikh" },
    },
    {
      "@type": "SoftwareSourceCode",
      name: "Manufacturing Intelligence with Microsoft Fabric",
      description: "Independent synthetic manufacturing analytics project in development. Current work covers Bronze ingestion; Silver, Gold, and Power BI reporting are planned.",
      url: manufacturingUrl,
      codeRepository: manufacturingUrl,
      creativeWorkStatus: "In development",
      creator: { "@type": "Person", name: "Shamsh Tabrez Shaikh" },
    },
  ],
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
              <small>BI &amp; Data Analyst</small>
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
          <p className="eyebrow">Business Intelligence · Ontario, Canada</p>
          <h1>BI &amp; Data Analyst building reliable data products.</h1>
          <p className="hero-lead">
            I use Power BI, SQL Server, DAX, and data warehousing to turn business
            questions into validated models and useful reporting. My background
            spans operational data, sales analytics, and Canadian manufacturing.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#work">
              View projects <Arrow />
            </a>
            <a className="button secondary" href={resumeUrl} target="_blank" rel="noreferrer">
              View resume <Arrow />
            </a>
            <a className="text-link" href={linkedinUrl} target="_blank" rel="noreferrer">
              LinkedIn <Arrow />
            </a>
            <a className="text-link" href={githubUrl} target="_blank" rel="noreferrer">
              GitHub <Arrow />
            </a>
          </div>
          <div className="availability">
            <span aria-hidden="true" /> Actively seeking Data Analyst, BI Analyst,
            Reporting Analyst, and Power BI opportunities
          </div>
        </div>

        <a className="hero-proof" href={showcaseUrl} target="_blank" rel="noreferrer" aria-label="Open the NovaTrade showcase website">
          <div className="proof-topline">
            <span>Flagship BI project</span>
            <strong>NovaTrade v1.0.0</strong>
          </div>
          <Image
            src="/novatrade/release-2026-08-10/01-executive-overview-2025-all.png"
            alt="NovaTrade Power BI Executive Overview with sales, orders, units, distributor reach, trends, and regional performance"
            width="4800"
            height="2734"
            unoptimized
            priority
          />
          <div className="proof-caption">
            <span>SQL Server → Star Schema → Power BI Service</span>
            <span>Open case study <Arrow /></span>
          </div>
        </a>
      </section>

      <section className="proof-strip" aria-label="NovaTrade project facts, using synthetic data">
        <article><strong>1.35M+</strong><span>NovaTrade synthetic fact records</span></article>
        <article><strong>81</strong><span>documented DAX measures</span></article>
        <article><strong>5</strong><span>analytical report pages</span></article>
        <article><strong>12</strong><span>automated repository checks</span></article>
      </section>

      <section className="section work-section" id="work">
        <div className="section-heading">
          <div>
            <span className="section-label">01 · Selected work</span>
            <h2>Business Intelligence.<br />Manufacturing Intelligence.</h2>
          </div>
          <p>
            A released SQL Server and Power BI platform, followed by a Microsoft
            Fabric project in development. Both are independent projects built
            with synthetic data.
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
              <span>Power BI Service</span>
            </div>

            <ul className="project-proof">
              <li><strong>Business:</strong> executive, sales, product, inventory, and management decisions</li>
              <li><strong>Engineering:</strong> PBIP/TMDL, dynamic branch-level RLS, 12 automated validators, and CI</li>
              <li><strong>Security:</strong> branch RLS checked in Desktop and with a synthetic Mumbai persona in Power BI Service</li>
              <li><strong>Decision:</strong> inventory reporting measures net movement and replenishment pressure; closing stock needs an opening balance</li>
            </ul>

            <div className="evidence-links" aria-label="NovaTrade technical evidence">
              <a className="text-link" href={`${repositoryUrl}/blob/main/docs/04-data-model/README.md`} target="_blank" rel="noreferrer">Inspect star schema <Arrow /></a>
              <a className="text-link" href={`${repositoryUrl}/blob/main/docs/08-validation-and-accessibility/README.md`} target="_blank" rel="noreferrer">Inspect validation checks <Arrow /></a>
            </div>

            <div className="project-actions">
              <a className="button primary" href={showcaseUrl} target="_blank" rel="noreferrer">View showcase <Arrow /></a>
              <a className="button secondary" href={repositoryUrl} target="_blank" rel="noreferrer">GitHub repository <Arrow /></a>
              <a className="text-link" href={releaseUrl} target="_blank" rel="noreferrer">Release evidence <Arrow /></a>
            </div>
          </div>

          <figure className="project-image">
            <Image
              src="/novatrade/release-2026-08-10/05-management-insights-2025-all.png"
              alt="NovaTrade Management Insights report showing performance exceptions and management actions"
              width="4800"
              height="2734"
              unoptimized
            />
            <figcaption>Management Insights · one of five released report pages</figcaption>
          </figure>
        </article>

        <article className="project-card manufacturing-card">
          <div className="project-copy">
            <div className="project-title">
              <span>In development · Synthetic data</span>
              <h3>Manufacturing Intelligence</h3>
            </div>
            <p className="project-lead">
              Where did production loss begin, how did it affect the next process,
              and which constraint puts customer delivery at risk?
            </p>
            <p>
              I am developing a Fabric analytics platform for a fictional
              automotive manufacturer, connecting production, downtime, quality,
              inventory, and material-flow events.
            </p>
            <ul className="project-proof">
              <li><strong>Current work:</strong> SQL source contracts, Fabric Data Factory ingestion, and a OneLake Bronze lakehouse</li>
              <li><strong>Public evidence:</strong> architecture, ingestion designs, SQL, and a reproducible QMS source review</li>
              <li><strong>Roadmap:</strong> PySpark, Delta Silver and Gold layers, a semantic model, and Power BI loss analysis</li>
            </ul>
            <p className="project-boundary">
              Independent portfolio work. No employer systems, confidential data,
              or official company performance results are represented.
            </p>
            <div className="project-actions">
              <a className="button primary" href={manufacturingUrl} target="_blank" rel="noreferrer">View GitHub project <Arrow /></a>
              <a className="text-link" href={`${manufacturingUrl}/blob/main/docs/project-state.md`} target="_blank" rel="noreferrer">Checkpoint &amp; roadmap <Arrow /></a>
            </div>
          </div>

          <aside className="manufacturing-evidence" aria-label="Manufacturing project architecture and evidence">
            <span className="section-label">Microsoft Fabric · Production Loss Intelligence</span>
            <h4>From source events to loss analysis.</h4>
            <ol className="pipeline-stages">
              <li><span className="stage-state">Current focus</span><strong>SQL sources → Fabric Data Factory</strong><p>Source contracts, full loads, append ingestion, and SQL control state.</p></li>
              <li><span className="stage-state">In progress</span><strong>OneLake → Bronze lakehouse</strong><p>Raw Parquet batches preserve source history. The repository checkpoint reports 36 of 51 source objects covered.</p></li>
              <li><span className="stage-state planned">Planned</span><strong>PySpark / Delta → Power BI</strong><p>Trusted Silver and Gold data, reusable measures, and production-loss reporting.</p></li>
            </ol>
            <p className="checkpoint-note">Repository checkpoint: 5 September 2026. QMS source profiling passed 44 of 44 checks; Fabric ingestion is a separate milestone.</p>
            <div className="evidence-links">
              <a className="text-link" href={`${manufacturingUrl}/blob/main/docs/architecture.md`} target="_blank" rel="noreferrer">Architecture <Arrow /></a>
              <a className="text-link" href={`${manufacturingUrl}/tree/main/data-contracts/qms`} target="_blank" rel="noreferrer">QMS validation evidence <Arrow /></a>
            </div>
          </aside>
        </article>
      </section>

      <section className="about-section" id="about">
        <div className="section about-inner">
          <div className="section-heading light">
            <div>
              <span className="section-label">02 · About</span>
              <h2>From operational reporting to analytical systems.</h2>
            </div>
            <p>
              Reporting experience, Canadian data education, and firsthand
              manufacturing context shape the questions I ask and the systems I build.
            </p>
          </div>

          <div className="about-grid">
            <div className="about-story">
              <p className="about-lead">
                My career started with attendance records and the people who
                depended on accurate reports.
              </p>
              <p>
                At PowerStudent, I maintained biometric attendance data, investigated
                record issues, and supported college users. At Super Collection / Akari,
                I moved into sales, market, and inventory analysis for management teams.
              </p>
              <p>
                Two postgraduate certificates at Conestoga expanded my database and
                architecture skills. Canadian manufacturing experience then added
                practical understanding of production, quality, and material flow.
                I currently work as a Full-Time Team Member in Paint Assembly at
                TG Minto, with exposure to production dashboards and operational KPIs.
              </p>
              <p>
                I am now targeting Canadian Data Analyst, BI Analyst, Reporting
                Analyst, and Power BI Developer roles where reliability and clear
                communication matter as much as visual polish.
              </p>
            </div>

            <aside className="credentials" aria-label="Education and career context">
              <article><span>2024</span><div><strong>Reporting Systems &amp; Database Development</strong><p>Postgraduate Certificate · Conestoga College</p></div></article>
              <article><span>2023–24</span><div><strong>Big Data Solutions &amp; Architecture</strong><p>Postgraduate Certificate · Conestoga College</p></div></article>
              <article><span>2019</span><div><strong>BSc Information Technology</strong><p>Vidyalankar School of Information Technology</p></div></article>
              <article><span>Learning</span><div><strong>Microsoft Power BI coursework</strong><p>Completed Microsoft / Coursera coursework</p></div></article>
              <article><span>PL-300</span><div><strong>Exam scheduled · 12 September 2026</strong><p>Certification pending exam result</p></div></article>
            </aside>
          </div>

          <ol className="career-journey" aria-label="Career progression">
            {careerJourney.map(({ year, title, detail }) => (
              <li key={year}>
                <span>{year}</span>
                <strong>{title}</strong>
                <p>{detail}</p>
              </li>
            ))}
          </ol>
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
              <li>ETL, staging, and OLTP design</li>
              <li>Star-schema modeling</li>
              <li>Data warehousing and analytical queries</li>
              <li>Data quality validation</li>
            </ul>
            <a className="text-link skill-evidence" href={`${repositoryUrl}/blob/main/docs/04-data-model/README.md`} target="_blank" rel="noreferrer">Inspect data model <Arrow /></a>
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
            <a className="text-link skill-evidence" href={showcaseUrl} target="_blank" rel="noreferrer">Explore report pages <Arrow /></a>
          </article>
          <article>
            <span className="skill-index">03</span>
            <h3>Business Analysis</h3>
            <p>Connecting data work to the decision behind it.</p>
            <ul>
              <li>KPI definition</li>
              <li>Requirements translation</li>
              <li>Operational reporting and Excel</li>
              <li>Trend and variance analysis</li>
              <li>Insight communication</li>
            </ul>
            <a className="text-link skill-evidence" href={`${repositoryUrl}/blob/main/docs/11-portfolio-case-study/README.md`} target="_blank" rel="noreferrer">Read business decisions <Arrow /></a>
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
            <a className="text-link skill-evidence" href={`${repositoryUrl}/blob/main/docs/09-deployment-and-cicd/README.md`} target="_blank" rel="noreferrer">Inspect delivery evidence <Arrow /></a>
          </article>
        </div>
        <p className="developing-note">
          <strong>Developing:</strong> Microsoft Fabric, OneLake, Lakehouse architecture,
          Delta, PySpark, and data pipelines through Manufacturing Intelligence.
          <a className="text-link" href={`${manufacturingUrl}/blob/main/docs/project-state.md`} target="_blank" rel="noreferrer"> Follow current progress <Arrow /></a>
        </p>
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
          <span>Shamsh Tabrez Shaikh<small>BI &amp; Data Analyst</small></span>
        </a>
        <div className="footer-links">
          <a href={githubUrl} target="_blank" rel="noreferrer">GitHub</a>
          <a href={linkedinUrl} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={showcaseUrl} target="_blank" rel="noreferrer">NovaTrade</a>
          <a href={manufacturingUrl} target="_blank" rel="noreferrer">Manufacturing Intelligence</a>
        </div>
        <p>Business Intelligence · Data Architecture · Manufacturing Analytics · Ontario, Canada</p>
      </footer>
    </main>
  );
}
