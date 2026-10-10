import React, { FormEvent, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './App.module.scss';

const projects = [
  { title: 'Pulsecraft', type: 'AI STUDIO', description: 'A local AI voice generation studio for reusable voice profiles, reference-audio transcription, and cloned voice clips.', stack: 'React · TypeScript · FastAPI · Python · Qwen TTS · Whisper', links: [{ label: 'Demo', url: 'https://pulsecraft-studio-client.vercel.app/' }] },
  { title: 'Barangay Management and Request System', type: 'PUBLIC SERVICE', description: 'A PERN application enabling residents to request barangay certificates and IDs online.', stack: 'PostgreSQL · Express.js · React · Node.js', links: [{ label: 'GitHub', url: 'https://github.com/pmcm4/brgy' }] },
  { title: 'UniLeather', type: 'COMMERCE', description: 'A MERN e-commerce experience with Stripe and PayPal payment systems.', stack: 'MongoDB · Express.js · React · Node.js', links: [{ label: 'GitHub', url: 'https://github.com/pmcm4/unileather-client-side' }, { label: 'Demo', url: 'https://unileather.netlify.app/' }] },
  { title: 'RiverCast', type: 'RESEARCH · 2ND PLACE', description: 'Forecasting Marikina River levels with a deep-learning model and a GPT + Kernel PCA research approach.', stack: 'Python · React · Flask · GPT · Transformer architectures', links: [{ label: 'GitHub', url: 'https://github.com/pmcm4/rivercast-tool-UI' }] },
  { title: 'LinkAlert', type: 'MOBILE SECURITY', description: 'An Android SMS application that detects malicious links using a Naive Bayes model.', stack: 'Java · Python · Android Studio · FastAPI', links: [{ label: 'GitHub', url: 'https://github.com/pmcm4/malicious-SMS-detector-FSM' }] },
];

const certifications = [
  {
    "title": "Claude Certified Architect - Professional",
    "url": "https://www.credly.com/badges/84b80d26-02cf-4e05-90b6-d27a5c850840"
  },
  {
    "title": "Claude Certified Architect - Foundations",
    "url": "https://www.credly.com/badges/d8b80f87-3ce1-4397-8634-3d309d6dcb21"
  },
  {
    "title": "Claude Certified Developer - Foundations",
    "url": "https://www.credly.com/badges/83c44b75-c095-43f0-bdf6-1cd7939e1799"
  },
  {
    "title": "Claude Certified Associate - Foundations",
    "url": "https://www.credly.com/badges/37a30bab-4406-41a3-9dd4-e8533f00cad3"
  }
];

function App() {
  const form = useRef<HTMLFormElement>(null);
  const sendEmail = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!form.current) return;
    emailjs.sendForm('service_abnh56n', 'template_b814afd', form.current, '5_XL6n53Jvn1oHMaP').then(() => {
      form.current?.reset(); toast.success('Message sent successfully.');
    }, () => toast.error('Could not send the message. Please email me directly.'));
  };
  return <div className={styles.page}>
    <header className={styles.nav}><a className={styles.logo} href="#top">PMCM / PORTFOLIO</a><nav><a href="#about">About</a><a href="#work">Projects</a><a href="#contact">Contact</a></nav></header>
    <main id="top">
      <section className={styles.hero}><div><p className={styles.eyebrow}>AI/ML ENGINEER · ACCENTURE · MANILA</p><h1>Paolo Miguel<br />Morato</h1><p className={styles.lede}>I build practical AI, automation, and web systems that make complex work clearer.</p><a className={`${styles.button} ${styles.downloadButton}`} href="/Morato%20-%20Resume%202026.pdf" download><span>Download CV</span><svg className={styles.downloadIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M12 3v12m-5-5 5 5 5-5M5 17v4h14v-4" /></svg></a></div><div className={styles.facts}><div><span>Currently</span><strong>AI/ML Engineer<br />Accenture</strong></div><div><span>Previously</span><strong>DocOps Engineer<br />ITRS Phils Inc.</strong></div><div><span>Based in</span><strong>Manila<br />Philippines</strong></div></div></section>
      <section id="about" className={styles.section}><div className={styles.sectionHeading}><h2>About</h2><span>01 / PROFILE</span></div><div className={styles.aboutGrid}><p className={styles.largeCopy}>I work at the intersection of software engineering, AI/ML, and developer experience. My focus is building useful systems, improving workflows, and shipping reliable products.</p><div className={styles.bodyCopy}><p>At Accenture, I work as an AI/ML Engineer in the AI/ML Computational Science practice, beginning August 2026.</p><p>Before that, I was a DocOps Engineer at ITRS Phils Inc. from September 2024 to August 2026. I led AI-driven initiatives, including a translation automation system that reduced translation costs by 95% while maintaining near-human quality.</p><p>My toolkit includes TypeScript, JavaScript, Python, React, Node.js, Docker, Jenkins, OpenAI APIs, RAG pipelines, PyTorch, Sentence Transformers, PostgreSQL, and cloud services.</p></div></div></section>
      <section id="work" className={styles.section}><div className={styles.sectionHeading}><h2>Selected work</h2><span>02 / PROJECTS</span></div><div className={styles.projects}>{projects.map((project) => <article className={styles.project} key={project.title}><div><p className={styles.projectType}>{project.type}</p><h3>{project.title}</h3><p className={styles.projectDescription}>{project.description}</p></div><div><p className={styles.stack}>{project.stack}</p><div className={styles.links}>{project.links.map((link) => <a key={link.label} href={link.url} target="_blank" rel="noreferrer">{link.label} ↗</a>)}</div></div></article>)}</div></section>
      <section className={styles.section}><div className={styles.sectionHeading}><h2>Experience</h2><span>03 / TIMELINE</span></div><div className={styles.timeline}><div><time>AUG 2026 — PRESENT</time><h3>AI/ML Engineer Senior Analyst · Accenture</h3><p>Serve as Pod AI Engineering Lead in an AI-driven software delivery environment, coordinating implementation and reviewing quality across AI Engineering and Quality Engineering resources. Apply Spec-Driven Development with Spec Kit and AI-assisted development using Claude Code and GitHub Copilot to build enterprise applications with Java, Spring Boot, and Angular. Collaborate on feature delivery and continuous improvement.</p></div><div><time>SEP 2024 — AUG 2026</time><h3>DocOps Engineer · ITRS Phils Inc.</h3><p>Built React/TypeScript applications and Hugo-powered web experiences; led AI translation automation, CI/CD, internal tooling, accessibility, technical SEO, and search quality improvements.</p></div><div><time>AUG — NOV 2023</time><h3>Full Stack Web Development Intern · iBuild.PH</h3><p>Developed and maintained the frontend and backend of an e-commerce website for a music ministry.</p></div><div><time>2020 — 2024</time><h3>BS Computer Science · PUP</h3><p>Graduated Cum Laude. RiverCast thesis project secured 2nd place in a research competition.</p></div></div></section>
      <section id="certifications" className={styles.section}><div className={styles.sectionHeading}><h2>Certifications</h2><span>04 / CREDENTIALS</span></div><div className={styles.timeline}>{certifications.map((certification) => <div key={certification.url}><p className={styles.projectType}>ANTHROPIC</p><h3>{certification.title}</h3><div className={styles.links}><a className={styles.credentialLink} href={certification.url} target="_blank" rel="noreferrer">View credential<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M7 17 17 7M7 7h10v10" /></svg></a></div></div>)}</div></section>
      <section id="contact" className={`${styles.section} ${styles.contact}`}><div><div className={styles.sectionHeading}><h2>Let’s talk.</h2><span>05 / CONTACT</span></div><p className={styles.largeCopy}>Have a question, opportunity, or useful problem to solve?</p><p className={styles.contactDetails}><a href="mailto:pmorato187@gmail.com">pmorato187@gmail.com</a></p><div className={styles.socials}><a href="https://github.com/pmcm4" target="_blank" rel="noreferrer">GitHub</a><a href="https://www.linkedin.com/in/paolo-miguel-morato/" target="_blank" rel="noreferrer">LinkedIn</a><a href="https://www.instagram.com/pao.lamb/" target="_blank" rel="noreferrer">Instagram</a></div></div><form ref={form} onSubmit={sendEmail} className={styles.form}><input name="from_name" placeholder="Name" required /><input name="from_email" type="email" placeholder="Email" required /><textarea name="message" rows={6} placeholder="Message" required /><button className={styles.button} type="submit">Send message ↗</button></form></section>
    </main><footer className={styles.footer}><span>PMCM / 2026</span></footer><ToastContainer toastStyle={{ backgroundColor: '#242321', color: '#f3f0eb', border: '1px solid #5a5145' }} />
  </div>;
}
export default App;
