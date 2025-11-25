import React from 'react'


export default function App() {
return (
<div className="page">
<header className="header">
<div className="brand">YourName</div>
<nav className="nav">
<a href="#about">About</a>
<a href="#projects">Projects</a>
<a href="#skills">Skills</a>
<a className="btn" href="#contact">Contact</a>
</nav>
</header>

<section className="hero">
<div className="hero-left">
<h1>Hi — I'm <span className="accent">YourName</span></h1>
<p className="lead">I build fast, accessible user experiences with React. I focus on clean UI, performance and accessibility.</p>
<div className="actions">
<a className="primary" href="#projects">See my work</a>
<a className="ghost" href="/resume.pdf" target="_blank" rel="noreferrer">Download CV</a>
</div>
</div>
<aside className="hero-right">
<img src="/profile.jpg" alt="Your profile" className="avatar" />
<div className="meta">Location • Manila, PH</div>
</aside>
</section>

<main className="container">
<section id="about" className="card">
<h2>About</h2>
<p>I'm a frontend developer who loves turning ideas into accessible, responsive interfaces. My stack: React, Vite, modern CSS.</p>
</section>

<section id="projects" className="card">
<h2>Selected Projects</h2>
<div className="grid">
<article className="project">
<h3>Project Alpha</h3>
<p>React app with Vite, built with attention to performance.</p>
<div className="links"><a href="#">Live</a> · <a href="#">Repo</a></div>
</article>


<article className="project">
<h3>Project Beta</h3>
<p>E‑commerce UI with accessibility-first approach.</p>
<div className="links"><a href="#">Live</a> · <a href="#">Repo</a></div>
</article>


<article className="project">
<h3>Project Gamma</h3>
<p>Mobile-first, responsive web application.</p>
<div className="links"><a href="#">Live</a> · <a href="#">Repo</a></div>
</article>
</div>
</section>


<section id="skills" className="card">
<h2>Skills</h2>
<ul className="skills">
<li>React + Vite</li>
<li>JavaScript / TypeScript</li>
<li>HTML & CSS (Tailwind optional)</li>
<li>Accessibility (a11y)</li>
<li>Git & CI / Deployment</li>
</ul>
</section>


<section id="contact" className="card">
<h2>Contact</h2>
<p>Send an email: <a href="mailto:hello@yourname.com">hello@yourname.com</a></p>
</section>
</main>


<footer className="footer">© {new Date().getFullYear()} YourName — Built with React + Vite</footer>
</div>
)
}