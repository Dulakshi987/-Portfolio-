import { useState, useEffect } from "react";
import DulakshiImg from "./dulakshi.jpg";

const NAV_LINKS = ["Home", "About", "Skills", "Projects", "Blogs", "Contact"];

const TYPEWRITER_ROLES = [
  "Associate Software Engineer",
  "Full Stack Developer",
  "Web Developer",
  "Backend Developer",
  "Frontend Developer",
  "UI/UX Developer",
  "Data Engineer",
];

function useTypewriter(words, speed = 80, pause = 1500) {
  const [display, setDisplay] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  useEffect(() => {
    const current = words[wordIdx];
    let timeout;
    if (!deleting && charIdx <= current.length) {
      timeout = setTimeout(() => { setDisplay(current.slice(0, charIdx)); setCharIdx(c => c + 1); }, speed);
    } else if (!deleting && charIdx > current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx >= 0) {
      timeout = setTimeout(() => { setDisplay(current.slice(0, charIdx)); setCharIdx(c => c - 1); }, speed / 2);
    } else {
      setDeleting(false);
      setWordIdx(i => (i + 1) % words.length);
    }
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);
  return display;
}

// ── SVG Icons ──
const IconLinkedIn = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const IconGitHub = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
);

const IconMedium = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
  </svg>
);

const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/dulakshi-keshani-4a9558294/", icon: <IconLinkedIn /> },
  { label: "GitHub",   href: "https://github.com/Dulakshi987", icon: <IconGitHub /> },
  { label: "Medium",   href: "https://medium.com/@dulakshikeshani288", icon: <IconMedium /> },
];

function Preloader({ done }) {
  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 9999, background: "#0d1b12",
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
      transition: "opacity 0.7s ease", opacity: done ? 0 : 1, pointerEvents: done ? "none" : "all",
    }}>
      <div style={{ position: "relative", width: 80, height: 80, marginBottom: 24 }}>
        <svg width="80" height="80" viewBox="0 0 80 80">
          <circle cx="40" cy="40" r="34" fill="none" stroke="#1a3d25" strokeWidth="4" />
          <circle cx="40" cy="40" r="34" fill="none" stroke="#4ade80" strokeWidth="4"
            strokeDasharray="213" strokeDashoffset="53" strokeLinecap="round">
            <animateTransform attributeName="transform" type="rotate" from="0 40 40" to="360 40 40" dur="1s" repeatCount="indefinite" />
          </circle>
        </svg>
      </div>
      <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 700, color: "#4ade80", letterSpacing: "0.08em" }}>Dulakshi</div>
      <div style={{ fontSize: 13, color: "#6b9e7a", marginTop: 8, letterSpacing: "0.15em" }}>PORTFOLIO</div>
    </div>
  );
}

function Navbar({ active, setActive }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setActive(id);
  };
  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? "rgba(10,22,14,0.96)" : "transparent",
      backdropFilter: scrolled ? "blur(12px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(74,222,128,0.12)" : "none",
      transition: "all 0.3s ease", padding: "0 2rem",
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>

        {/* Nav links — left/center */}
        <div style={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
          {NAV_LINKS.map(l => (
            <button key={l} onClick={() => scrollTo(l)} style={{
              background: "none", border: "none", cursor: "pointer",
              color: active === l ? "#4ade80" : "#9ca3af",
              fontSize: 13, fontWeight: active === l ? 600 : 400,
              padding: "6px 12px",
              borderBottom: active === l ? "2px solid #4ade80" : "2px solid transparent",
              transition: "all 0.2s", letterSpacing: "0.04em",
            }}>{l}</button>
          ))}
        </div>

        {/* Social icons — right */}
        <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
          {SOCIAL_LINKS.map(s => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
              title={s.label}
              style={{
                color: "#6b7280", display: "flex", alignItems: "center", justifyContent: "center",
                width: 34, height: 34, borderRadius: 8,
                transition: "color 0.2s, background 0.2s",
                textDecoration: "none",
              }}
              onMouseEnter={e => { e.currentTarget.style.color = "#4ade80"; e.currentTarget.style.background = "rgba(74,222,128,0.08)"; }}
              onMouseLeave={e => { e.currentTarget.style.color = "#6b7280"; e.currentTarget.style.background = "transparent"; }}
            >{s.icon}</a>
          ))}
        </div>
      </div>
    </nav>
  );
}

function SectionTitle({ title, sub }) {
  return (
    <div>
      <div style={{ fontSize: 12, color: "#4ade80", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 8 }}>{sub}</div>
      <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 700, color: "#f0fdf4", margin: 0 }}>{title}</h2>
      <div style={{ width: 48, height: 3, background: "#4ade80", borderRadius: 2, marginTop: 12 }} />
    </div>
  );
}

function Home() {
  const role = useTypewriter(TYPEWRITER_ROLES);
  return (
    <section id="home" style={{
      minHeight: "100vh", background: "linear-gradient(135deg, #0a160e 0%, #0d2318 50%, #071510 100%)",
      display: "flex", alignItems: "center", padding: "0 2rem", position: "relative", overflow: "hidden",
    }}>
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", backgroundImage: "radial-gradient(circle at 20% 50%, rgba(74,222,128,0.06) 0%, transparent 60%), radial-gradient(circle at 80% 20%, rgba(134,239,172,0.04) 0%, transparent 50%)" }} />
      <div style={{ maxWidth: 1100, margin: "0 auto", width: "100%", display: "flex", alignItems: "center", gap: "4rem", flexWrap: "wrap", paddingTop: 80 }}>
        <div style={{ flex: "1 1 340px" }}>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 5vw, 3.6rem)", fontWeight: 700, color: "#f0fdf4", lineHeight: 1.15, marginBottom: 8 }}>
            Hi, I'm <span style={{ color: "#4ade80" }}>Dulakshi Keshani</span>
          </h1>
          <div style={{ height: 56, display: "flex", alignItems: "center", marginBottom: 20 }}>
            <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1rem, 3vw, 1.5rem)", color: "#86efac", fontStyle: "italic" }}>
              {role}
              <span style={{ display: "inline-block", width: 2, height: "1em", background: "#4ade80", marginLeft: 3, animation: "blink 1s step-end infinite", verticalAlign: "text-bottom" }} />
            </span>
          </div>
          <p style={{ fontSize: 16, color: "#9ca3af", lineHeight: 1.8, maxWidth: 500, marginBottom: 32 }}>
            A responsible, self-motivated Software Engineering enthusiast with solid leadership qualities and a strong team spirit. Passionate about taking on new challenges and applying creative thinking to make valuable contributions to the IT industry.
          </p>
          
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 32 }}>
            <button
  onClick={() => {
    const link = document.createElement("a");
    link.href = `${process.env.PUBLIC_URL}/Dulakshi Keshani CV.pdf`;
    link.download = "Dulakshi_Keshani_CV.pdf";
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }}
  style={{
    background: "#4ade80", color: "#0a160e",
    border: "none", borderRadius: 8, padding: "12px 28px",
    fontWeight: 700, fontSize: 15, cursor: "pointer",
    display: "inline-flex", alignItems: "center", gap: 8,
  }}
>⬇ Download CV</button>
            <button onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })} style={{
              background: "transparent", border: "1.5px solid rgba(74,222,128,0.4)", borderRadius: 8, color: "#86efac",
              padding: "12px 28px", fontWeight: 600, fontSize: 15, cursor: "pointer",
            }}>About Me</button>
          </div>
          {/* Social icons below buttons */}
          {/* <div style={{ display: "flex", gap: 10 }}>
            {SOCIAL_LINKS.map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                title={s.label}
                style={{
                  color: "#4ade80", display: "flex", alignItems: "center", justifyContent: "center",
                  width: 40, height: 40, borderRadius: 10,
                  border: "1px solid rgba(74,222,128,0.25)",
                  background: "rgba(74,222,128,0.06)",
                  transition: "all 0.2s", textDecoration: "none",
                }}
                onMouseEnter={e => { e.currentTarget.style.background = "rgba(74,222,128,0.15)"; e.currentTarget.style.borderColor = "rgba(74,222,128,0.5)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "rgba(74,222,128,0.06)"; e.currentTarget.style.borderColor = "rgba(74,222,128,0.25)"; }}
              >{s.icon}</a>
            ))}
          </div> */}
        </div>
        <div style={{ flex: "0 0 auto" }}>
          <div style={{
              width: 240, height: 240, borderRadius: "50%",
              background: "linear-gradient(135deg, rgba(74,222,128,0.15), rgba(34,197,94,0.05))",
              border: "2px solid rgba(74,222,128,0.3)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 80, boxShadow: "0 0 60px rgba(74,222,128,0.1)",
              overflow: "hidden",
}}>
            <img
               src={DulakshiImg}
              alt="Dulakshi"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
</div>
        </div>
      </div>
      <style>{`@keyframes blink{0%,100%{opacity:1}50%{opacity:0}}`}</style>
    </section>
  );
}

const ABOUT_POINTS = [
  {  title: "Education", desc: <>BSc (Hons) Software Engineering — ICBT Campus, Colombo (Cardiff Metropolitan University, UK). Fully graduated May 2026 with <strong style={{ color: "white" }}>Second Upper (2.1) Class Honours Division.</strong></> },
  {  title: "Internship Experience", desc: "Over 1 year of internship experience across 2 software companies  KeenRabbits Pvt Ltd (Gampaha) and IT Signature (Colombo) — working on real-world software projects." },
  { title: "Real-Time Projects", desc: "Experienced with real-time projects across web, mobile and ML domains gained through internship periods and academic life at University." },
  {  title: "Passion & Values", desc: "Passionate about clean code, scalable architectures and great UX. Committed to continuous learning and adapting to emerging technologies." },
];

function About() {
  return (
    <section id="about" style={{ minHeight: "100vh", background: "#0a160e", padding: "100px 2rem" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <SectionTitle title="About Me" sub="Who I am" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20, marginTop: 48 }}>
          {ABOUT_POINTS.map(p => (
            <div key={p.title} style={{
              background: "rgba(255,255,255,0.03)", border: "1px solid rgba(74,222,128,0.12)",
              borderRadius: 16, padding: "1.5rem", transition: "border-color 0.2s, background 0.2s",
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(74,222,128,0.35)"; e.currentTarget.style.background = "rgba(74,222,128,0.05)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(74,222,128,0.12)"; e.currentTarget.style.background = "rgba(255,255,255,0.03)"; }}
            >
              <div style={{ fontSize: 32, marginBottom: 12 }}>{p.icon}</div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, color: "#86efac", marginBottom: 8 }}>{p.title}</h3>
              <p style={{ fontSize: 14, color: "#9ca3af", lineHeight: 1.75, margin: 0 }}>{p.desc}</p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 48 }}>
          <SectionTitle title="Experience" sub="My journey" />
          <div style={{ marginTop: 36, position: "relative" }}>
            <div style={{ position: "absolute", left: 20, top: 0, bottom: 0, width: 2, background: "linear-gradient(to bottom, #4ade80, rgba(74,222,128,0.1))" }} />
            {[
              {
                company: "KeenRabbits Pvt Ltd", location: "Gampaha, Sri Lanka", role: "Software Engineer Intern",
                period: "Feb 2025 – Aug 2025", color: "#4ade80",
                points: [
                  "Team Collaboration — Worked closely with talented teams, fostering effective communication to deliver high-quality projects.",
                  "Problem-Solving — Tackled complex challenges in web development, applying critical thinking to devise innovative solutions.",
                  "Technical Skills — Strengthened expertise in React.js, Laravel, PHP, HTML, CSS, Bootstrap, Tailwind CSS, jQuery and version control.",
                  "Quality Assurance — Hands-on experience in manual testing ensuring robust and reliable software deliverables.",
                  "Project Coordination — Managed tasks, timelines and resources effectively to drive project success.",
                ],
              },
              {
                company: "IT Signature", location: "Colombo, Sri Lanka", role: "Web Developer Intern",
                period: "Sep 2024 – Dec 2024", color: "#86efac",
                points: [
                  "Team Collaboration — Honed ability to communicate, coordinate and contribute to shared goals for seamless project execution.",
                  "Problem-Solving — Tackled web development challenges by analysing issues and devising creative, efficient solutions.",
                  "Technical Skills — Strengthened expertise in  PHP, HTML, CSS, Bootstrap, Tailwind CSS, jQuery and version control.",
                  "Version Control — Gained hands-on experience managing codebases effectively and maintaining project integrity.",
                  "New Technologies — Engaged in discussions about innovative solutions and expanded knowledge in modern software development.",
                  "Personal Growth — Built mental resilience and teamwork skills through collaborative team activities.",
                ],
              },
            ].map((exp, i) => (
              <div key={i} style={{ paddingLeft: 56, marginBottom: 40, position: "relative" }}>
                <div style={{ position: "absolute", left: 12, top: 8, width: 18, height: 18, borderRadius: "50%", background: exp.color, border: "3px solid #0a160e", boxShadow: `0 0 12px ${exp.color}80` }} />
                <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(74,222,128,0.12)", borderRadius: 16, padding: "1.5rem" }}>
                  <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                    <div>
                      <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, color: exp.color, margin: 0 }}>{exp.role}</h3>
                      <div style={{ fontSize: 14, color: "#d1fae5", marginTop: 4, fontWeight: 600 }}>{exp.company}</div>
                      <div style={{ fontSize: 13, color: "#6b7280" }}>{exp.location}</div>
                    </div>
                    <div style={{ background: "rgba(74,222,128,0.1)", border: "1px solid rgba(74,222,128,0.2)", borderRadius: 20, padding: "4px 12px", fontSize: 12, color: "#4ade80", whiteSpace: "nowrap" }}>{exp.period}</div>
                  </div>
                  <ul style={{ margin: "12px 0 0 0", padding: 0, listStyle: "none" }}>
                    {exp.points.map((pt, j) => (
                      <li key={j} style={{ fontSize: 13, color: "#9ca3af", lineHeight: 1.7, marginBottom: 7, paddingLeft: 16, position: "relative" }}>
                        <span style={{ position: "absolute", left: 0, top: 8, width: 6, height: 6, borderRadius: "50%", background: exp.color, opacity: 0.7 }} />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const SKILLS_DATA = {
  "Web Development": ["HTML5", "CSS3", "JavaScript", "TypeScript", "React.js", "Next.js"],
  "Frontend Technologies": ["Tailwind CSS", "Bootstrap", "jQuery", "Responsive Design"],
  "Backend Technologies": ["Spring Boot", "Laravel", "PHP", "Node.js", "Express.js"],
  "Database": ["MySQL", "MongoDB", "SQLite", "FireBase"],
  "Version Control": ["Git", "GitHub"],
  "Collaboration & Tools": ["Jira", "Postman", "Figma", "VS Code", "Canva"],
  "Testing": ["Selenium", "Manual Testing", "JUnit"],
  "Soft Skills": ["Team Collaboration", "Problem-Solving", "Communication", "Leadership", "Adaptability"],
};

function Skills() {
  return (
    <section id="skills" style={{ minHeight: "80vh", background: "linear-gradient(180deg, #0a160e 0%, #0d2318 100%)", padding: "10px 2rem" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <SectionTitle title="Skills" sub="What I work with" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20, marginTop: 48 }}>
          {Object.entries(SKILLS_DATA).map(([cat, items]) => (
            <div key={cat} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(74,222,128,0.12)", borderRadius: 16, padding: "1.25rem" }}>
              <h4 style={{ fontSize: 12, color: "#4ade80", letterSpacing: "0.1em", textTransform: "uppercase", margin: "0 0 14px 0", fontWeight: 600 }}>{cat}</h4>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {items.map(skill => (
                  <span key={skill} style={{ background: "rgba(74,222,128,0.08)", border: "1px solid rgba(74,222,128,0.18)", borderRadius: 20, padding: "4px 11px", fontSize: 12, color: "#86efac" }}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const PROJECTS = [
  { id: 1, title: "Warehouse Time Accuracy Tracker", period: "2026 Apr – Ongoing", desc: "Developed for Hayleys Advantis idea catalyst competition, proposed as HAZARD implementation. Tracks warehouse time accuracy with CI/CD pipelines.", tech: ["Spring Boot", "TypeScript", "Tailwind CSS", "MySQL", "CI/CD", "Git"], github: "https://github.com/Dulakshi987/Time-Tracker-System", tag: "Web App", color: "#4ade80" },
  { id: 2, title: "Climate Migration Risk Analysis", period: "2026 Mar – Ongoing", desc: "Travel planner integrating weather data and travel advisories. Features user authentication, real-time API aggregation, and Firebase storage with strong SEO.", tech: ["Next.js", "Firebase", "REST API", "User Auth"], github: "https://github.com/Dulakshi987/Climate-Migration-Risk-Analyze", tag: "Web App", color: "#60a5fa" },
  { id: 3, title: "EventSense — AI Event Planner", period: "2025 Sep – 2026 Mar", desc: "Intelligent AI-powered web platform helping Sri Lankan users plan events with accurate budget predictions and smart vendor recommendations using ML models.", tech: ["TypeScript", "Node.js", "Express.js", "Python", "Flask", "ML", "MongoDB"], github: "https://github.com/Dulakshi987/EventSense-AI-Powered-Event-Budget-Predictor-with-Smart-Cost-Optimization", tag: "AI / ML", color: "#a78bfa" },
  { id: 4, title: "PhanaEdu Book Shop System", period: "2025 Jun – 2025 Aug", desc: "Book shop web system where cashiers generate customer bills and admins manage users, items, customers and billing. Includes automation and manual test cases.", tech: ["Java", "MySQL", "Automation Testing", "Manual Testing"], github: "https://github.com/Dulakshi987/CRM_PahanaEdu", tag: "Web App", color: "#f59e0b" },
  { id: 5, title: "User Management System", period: "Self Study", desc: "Comprehensive web application for administrators to manage user information efficiently — add, view, update and delete records with RESTful APIs.", tech: ["React.JS", "Node.JS", "Express.JS", "MongoDB"], github: "https://github.com/Dulakshi987/User-Management-System", tag: "Web App", color: "#34d399" },
  { id: 6, title: "Car Crash Severity Prediction", period: "Self Study", desc: "End-to-end ML system predicting car crash severity (Minor, Severe, Fatal). Best model: XGBoost with weighted F1-score 0.799 and accuracy 0.801.", tech: ["HTML", "CSS", "ML", "Python", "JS"], github: "https://github.com/Dulakshi987/Machine-Learning-Based-Car-Crash-Severity-Prediction-System", tag: "ML", color: "#f87171" },
  { id: 7, title: "Graphic Post Management System", period: "2025 Jun – 2025 Aug", desc: "Web application with separate admin and user interfaces for content creation and scheduling. Features Post Creation, User Management, Email OTP Auth and CRUD.", tech: ["React.js", "Laravel", "PHP", "OTP Auth"], github: "https://github.com/Dulakshi987/Graphic", tag: "Web App", color: "#fb923c" },
  { id: 8, title: "Inventory Management System", period: "Academic", desc: "Techfix computer shop inventory system with admin and supplier roles. Handles stock management, inventory requests, quotations and orders with discounts.", tech: ["C#", "ASP.NET", "MySQL"], github: "https://github.com/Dulakshi987/Inventory-Management-System", tag: "Academic", color: "#38bdf8" },
  { id: 9, title: "Pet Food Mobile App", period: "Academic", desc: "Mobile app for a pet food shop. Customers add items to cart, place orders, make payments and view nutrition details. Admin handles product management.", tech: ["Java", "SQLite", "Mobile"], github: "https://github.com/Dulakshi987/Pet-food-MobileApp", tag: "Mobile", color: "#f472b6" },
  { id: 10, title: "Inventory & HR Management", period: "2025 Apr – 2025 Jun", desc: "Comprehensive HR & Inventory system with company management, file/document handling, OTP-based user authentication, and dynamic content rendering.", tech: ["React.js", "Node.js", "OTP Auth", "Inventory"], github: "https://github.com/Dulakshi987/Inventory-and-HR", tag: "Web App", color: "#4ade80" },
  { id: 11, title: "Investment Calculator", period: "Self Study", desc: "Investment calculator for computing total interest and invested capital based on initial investment, annual investment, duration and annual interest rate.", tech: ["JavaScript", "HTML", "CSS"], github: "https://github.com/Dulakshi987/Investment-Calculator", tag: "Mobile", color: "#a3e635" },
  { id: 12, title: "Employee Automated System", period: "Academic", desc: "Employee management system where admin manages HR roles and employees. Supports designation/department management and EPF number-based search.", tech: ["Java", "MySQL"], github: "https://github.com/Dulakshi987/Employee-Automated-System", tag: "Academic", color: "#818cf8" },
  { id: 13, title: "Food Cafe System", period: "Academic", desc: "Full-featured cafe system with menu management, order processing, payment and reservations. Three user roles: Admin, Customer and Staff with separate logins.", tech: ["HTML", "CSS", "JavaScript", "PHP"], github: "https://github.com/Dulakshi987/Food-Cafe--System", tag: "Academic", color: "#fb7185" },
  { id: 14, title: "Bakery Management System", period: "Academic", desc: "Bakery management system handling available items, pricing, order processing and bill generation for a bakery business.", tech: ["C++"], github: "https://github.com/Dulakshi987/Bakery-System", tag: "Academic", color: "#fbbf24" },
];

const TAG_COLORS = {
  "Web App": "#34d399", "ML": "#f87171", "AI / ML": "#a78bfa",
  "Internship": "#fb923c", "Desktop App": "#38bdf8", "Mobile": "#f472b6",
  "Tool": "#a3e635", "Academic": "#818cf8",
};

const INITIAL_SHOW = 6;

function Projects() {
  const [filter, setFilter] = useState("All");
  const [showAll, setShowAll] = useState(false);
  const tags = ["All", ...Array.from(new Set(PROJECTS.map(p => p.tag)))];
  const filtered = filter === "All" ? PROJECTS : PROJECTS.filter(p => p.tag === filter);
  const visible = showAll ? filtered : filtered.slice(0, INITIAL_SHOW);
  const hasMore = filtered.length > INITIAL_SHOW;
  const handleFilter = (t) => { setFilter(t); setShowAll(false); };

  return (
    <section id="projects" style={{ minHeight: "100vh", background: "#0a160e", padding: "100px 2rem" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <SectionTitle title="Projects" sub="What I've built" />
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 32 }}>
          {tags.map(t => (
            <button key={t} onClick={() => handleFilter(t)} style={{
              background: filter === t ? "#4ade80" : "rgba(74,222,128,0.08)",
              border: "1px solid rgba(74,222,128,0.25)", borderRadius: 20, padding: "5px 14px",
              fontSize: 12, color: filter === t ? "#0a160e" : "#86efac",
              cursor: "pointer", fontWeight: filter === t ? 700 : 400, transition: "all 0.2s",
            }}>{t}</button>
          ))}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 20, marginTop: 32 }}>
          {visible.map(p => (
            <div key={p.id} style={{
              background: "rgba(255,255,255,0.03)", border: "1px solid rgba(74,222,128,0.1)",
              borderRadius: 16, padding: "1.4rem", display: "flex", flexDirection: "column",
              transition: "border-color 0.2s, transform 0.2s",
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(74,222,128,0.3)"; e.currentTarget.style.transform = "translateY(-3px)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(74,222,128,0.1)"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12, flexWrap: "wrap", gap: 6 }}>
                <span style={{ background: `${TAG_COLORS[p.tag] ?? "#4ade80"}22`, border: `1px solid ${TAG_COLORS[p.tag] ?? "#4ade80"}55`, borderRadius: 20, padding: "3px 11px", fontSize: 11, color: TAG_COLORS[p.tag] ?? "#4ade80", fontWeight: 600 }}>{p.tag}</span>
                <span style={{ fontSize: 11, color: "#4ade80", opacity: 0.75, background: "rgba(74,222,128,0.07)", border: "1px solid rgba(74,222,128,0.15)", borderRadius: 20, padding: "3px 10px" }}>🕐 {p.period}</span>
              </div>
              <h3 style={{ fontSize: 15, color: "#f0fdf4", fontWeight: 600, marginBottom: 10, lineHeight: 1.4 }}>{p.title}</h3>
              <p style={{ fontSize: 13, color: "#9ca3af", lineHeight: 1.65, flex: 1, marginBottom: 14 }}>{p.desc}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 14 }}>
                {p.tech.map(t => (
                  <span key={t} style={{ background: "rgba(74,222,128,0.06)", border: "1px solid rgba(74,222,128,0.15)", borderRadius: 12, padding: "2px 9px", fontSize: 11, color: "#86efac" }}>{t}</span>
                ))}
              </div>
              {p.github && p.github !== "#" && (
                <a href={p.github} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 5, color: "#4ade80", fontSize: 12, textDecoration: "none", fontWeight: 600, background: "rgba(74,222,128,0.08)", border: "1px solid rgba(74,222,128,0.2)", borderRadius: 8, padding: "5px 12px", width: "fit-content" }}>
                  <IconGitHub /> View Project →
                </a>
              )}
            </div>
          ))}
        </div>
        {hasMore && (
          <div style={{ textAlign: "center", marginTop: 36 }}>
            <button onClick={() => setShowAll(v => !v)} style={{
              background: "transparent", border: "1.5px solid rgba(74,222,128,0.4)",
              borderRadius: 25, padding: "10px 32px", color: "#4ade80", fontSize: 14,
              fontWeight: 600, cursor: "pointer", transition: "all 0.2s",
            }}
              onMouseEnter={e => e.currentTarget.style.background = "rgba(74,222,128,0.1)"}
              onMouseLeave={e => e.currentTarget.style.background = "transparent"}
            >
              {showAll ? "⬆ Show Less" : `⬇ See More Projects (${filtered.length - INITIAL_SHOW} more)`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

const BLOGS = [
  { title: "How to Choose the Right Web Development Framework", url: "https://medium.com/@dulakshikeshani288/how-to-choose-the-right-web-development-framework-b49ad3d71c40", desc: "A practical guide to evaluating and selecting the best web development framework for your next project based on use case, team size and scalability.", tag: "Web Development"},
  { title: "Continuous Innovation in Software Development — CI/CD Pipelines", url: "https://medium.com/@dulakshikeshani288/continuous-innovation-in-software-development-of-ci-cd-pipelines-437828818b24", desc: "Exploring how CI/CD pipelines drive continuous delivery, reduce deployment risks and accelerate software development innovation in modern teams.", tag: "DevOps" },
  { title: "Software Design Patterns", url: "https://medium.com/@dulakshikeshani288/software-design-patterns-19cec1b10233", desc: "A deep dive into essential software design patterns — Creational, Structural and Behavioural — with real-world examples and when to apply each.", tag: "Engineering" },
  { title: "How AI Coding Assistants Are Changing Software Development Workflows", url: "https://medium.com/@dulakshikeshani288/how-ai-coding-assistants-are-changing-software-development-workflows-b7f673406749", desc: "An insightful look at how AI-powered coding assistants are transforming the way developers write, review and ship code — and what it means for the future of software engineering.", tag: "AI / Tech"},
];

function Blogs() {
  return (
    <section id="blogs" style={{ minHeight: "70vh", background: "linear-gradient(180deg, #0a160e 0%, #0d2318 100%)", padding: "100px 2rem" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <SectionTitle title="Blogs" sub="My writings on Medium" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20, marginTop: 48 }}>
          {BLOGS.map((b, i) => (
            <a key={i} href={b.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
              <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(74,222,128,0.12)", borderRadius: 16, padding: "1.5rem", height: "100%", boxSizing: "border-box", transition: "border-color 0.2s, transform 0.2s", display: "flex", flexDirection: "column" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(74,222,128,0.35)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(74,222,128,0.12)"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                  <span style={{ fontSize: 28 }}>{b.icon}</span>
                  <span style={{ background: "rgba(74,222,128,0.1)", border: "1px solid rgba(74,222,128,0.2)", borderRadius: 20, padding: "3px 10px", fontSize: 11, color: "#4ade80" }}>{b.tag}</span>
                </div>
                <h3 style={{ fontSize: 15, color: "#f0fdf4", fontWeight: 600, lineHeight: 1.45, marginBottom: 10, flex: 0 }}>{b.title}</h3>
                <p style={{ fontSize: 13, color: "#9ca3af", lineHeight: 1.65, flex: 1, marginBottom: 16 }}>{b.desc}</p>
                <div style={{ color: "#4ade80", fontSize: 13, fontWeight: 600, display: "flex", alignItems: "center", gap: 6 }}>
                  <IconMedium /> Read on Medium →
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

const EMAILJS_SERVICE_ID  = "service_t0tmozn";
const EMAILJS_TEMPLATE_ID = "template_nzucye7";
const EMAILJS_PUBLIC_KEY  = "1sALB1KpvvmrAITNy";

function Contact() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  useEffect(() => {
    if (window.emailjs) return;
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js";
    script.onload = () => window.emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
    document.head.appendChild(script);
  }, []);

  const handleSend = async () => {
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) { setError("Please fill in all fields."); return; }
    if (!window.emailjs) { setError("Email service not loaded yet. Try again."); return; }
    setSending(true); setError("");
    try {
      await window.emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, { from_name: form.name, from_email: form.email, message: form.message, to_email: "dulakshikeshani288@gmail.com" });
      setSent(true);
    } catch (err) {
      setError("Failed to send. Please try again or email me directly.");
    } finally { setSending(false); }
  };

  return (
    <section id="contact" style={{ minHeight: "70vh", background: "linear-gradient(180deg, #0d2318 0%, #060f09 100%)", padding: "100px 2rem" }}>
      <div style={{ maxWidth: 640, margin: "0 auto" }}>
        <SectionTitle title="Contact" sub="Let's connect" />
        <div style={{ marginTop: 48, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(74,222,128,0.15)", borderRadius: 20, padding: "2rem" }}>
          {sent ? (
            <div style={{ textAlign: "center", padding: "2rem 0" }}>
              <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
              <p style={{ color: "#86efac", fontSize: 18, fontWeight: 600 }}>Message sent!</p>
              <p style={{ color: "#9ca3af", fontSize: 14 }}>Thank you for reaching out. I'll get back to you soon.</p>
            </div>
          ) : (
            <div>
              {[{ label: "Your Name", key: "name", type: "text", placeholder: "Your Name" }, { label: "Email Address", key: "email", type: "email", placeholder: "you@example.com" }].map(({ label, key, type, placeholder }) => (
                <div key={key} style={{ marginBottom: 20 }}>
                  <label style={{ fontSize: 13, color: "#4ade80", display: "block", marginBottom: 6 }}>{label}</label>
                  <input type={type} placeholder={placeholder} value={form[key]}
                    onChange={e => { setForm(f => ({ ...f, [key]: e.target.value })); setError(""); }}
                    style={{ width: "100%", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(74,222,128,0.2)", borderRadius: 8, padding: "10px 14px", color: "#f0fdf4", fontSize: 14, outline: "none", boxSizing: "border-box" }} />
                </div>
              ))}
              <div style={{ marginBottom: 24 }}>
                <label style={{ fontSize: 13, color: "#4ade80", display: "block", marginBottom: 6 }}>Message</label>
                <textarea placeholder="Hello Dulakshi, I'd love to connect..." rows={5} value={form.message}
                  onChange={e => { setForm(f => ({ ...f, message: e.target.value })); setError(""); }}
                  style={{ width: "100%", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(74,222,128,0.2)", borderRadius: 8, padding: "10px 14px", color: "#f0fdf4", fontSize: 14, outline: "none", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              {error && <p style={{ color: "#f87171", fontSize: 13, marginBottom: 14 }}>⚠ {error}</p>}
              <button onClick={handleSend} disabled={sending} style={{ width: "100%", background: sending ? "#166534" : "#4ade80", color: sending ? "#4ade80" : "#0a160e", border: sending ? "1px solid #4ade80" : "none", borderRadius: 8, padding: "13px", fontWeight: 700, fontSize: 15, cursor: sending ? "not-allowed" : "pointer", transition: "all 0.2s" }}>
                {sending ? " Sending..." : "Send Message →"}
              </button>
            </div>
          )}

          {/* Social icons at bottom of contact card */}
          <div style={{ display: "flex", justifyContent: "center", gap: 12, marginTop: 28, paddingTop: 20, borderTop: "1px solid rgba(74,222,128,0.1)" }}>
            {SOCIAL_LINKS.map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                title={s.label}
                style={{
                  color: "#4ade80", display: "flex", alignItems: "center", justifyContent: "center",
                  width: 42, height: 42, borderRadius: 10,
                  border: "1px solid rgba(74,222,128,0.25)",
                  background: "rgba(74,222,128,0.06)",
                  textDecoration: "none", transition: "all 0.2s",
                }}
                onMouseEnter={e => { e.currentTarget.style.background = "rgba(74,222,128,0.15)"; e.currentTarget.style.borderColor = "rgba(74,222,128,0.5)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "rgba(74,222,128,0.06)"; e.currentTarget.style.borderColor = "rgba(74,222,128,0.25)"; }}
              >{s.icon}</a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  const [preloaderDone, setPreloaderDone] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const t = setTimeout(() => setPreloaderDone(true), 3000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap";
    document.head.appendChild(link);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const id = e.target.id;
          setActive(id.charAt(0).toUpperCase() + id.slice(1));
        }
      });
    }, { threshold: 0.3 });
    NAV_LINKS.forEach(id => {
      const el = document.getElementById(id.toLowerCase());
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", background: "#0a160e", color: "#f0fdf4", margin: 0 }}>
      <Preloader done={preloaderDone} />
      <Navbar active={active} setActive={setActive} />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Blogs />
      <Contact />
    </div>
  );
}