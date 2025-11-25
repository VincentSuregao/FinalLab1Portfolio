import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="page">

      {/* ───── NAVBAR ───── */}
      <header className="nav">
        <div className="logo">My Portfolio</div>
        <nav className="menu">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* ───── HERO SECTION ───── */}
      <section id="home" className="hero">
        <div className="hero-left">
          <h3>Hello, It's Me</h3>
          <h1>Reagan Gabutelo</h1>
          <h2>
            And I'm a <span className="accent">Frontend Developer</span>
          </h2>
          <p>
            I build fast, accessible user experiences with React. I focus on clean UI,
            performance and accessibility.
          </p>

          <div className="socials">
            <a href="https://www.facebook.com/reagan.delatorre.10">FB</a>
            <a href="#">IG</a>
          </div>

          <a className="btn-primary" href="/resume.pdf" target="_blank">
            Download CV
          </a>
        </div>

        <div className="hero-right">
          <div className="image-glow">
            <img src="/profile.jpg" alt="Profile" />
          </div>
        </div>
      </section>

      {/* ───── ABOUT SECTION ───── */}
      <section id="about" className="about">
        <div className="about-img">
          <div className="image-glow">
            <img src="/profile.jpg" alt="About" />
          </div>
        </div>

        <div className="about-text">
          <h2>
            About <span className="accent">Me</span>
          </h2>
          <h3>Frontend Developer!</h3>
          <p>
            I'm a frontend developer who loves turning ideas into accessible,
            responsive interfaces. My stack: React, Vite, modern CSS.
          </p>
          <a className="btn-secondary" href="#projects">
            Read More
          </a>
        </div>
      </section>

      {/* ───── SERVICES ───── */}
      <section id="services" className="services">
        <h2>
          My <span className="accent">Skills</span>
        </h2>

        <div className="service-grid">
          <div className="service-card">
            <h3>Web Development</h3>
            <p>Building modern, responsive UIs with React.</p>
            <a href="#">Learn More</a>
          </div>

          <div className="service-card">
            <h3>Graphic Design</h3>
            <p>Clean & modern designs for brands and websites.</p>
            <a href="#">Learn More</a>
          </div>

          <div className="service-card">
            <h3>Digital Marketing</h3>
            <p>Helping brands grow through digital strategies.</p>
            <a href="#">Learn More</a>
          </div>
        </div>
      </section>

      {/* ───── PROJECTS ───── */}
      <section id="projects" className="projects">
        <h2>
          Latest <span className="accent">Project</span>
        </h2>

        <div className="project-grid">
          <img src="/p1.jpg" alt="Project 1" />
          <img src="/p2.jpg" alt="Project 2" />
          <img src="/p3.jpg" alt="Project 3" />
          <img src="/p4.jpg" alt="Project 4" />
          <img src="/p5.jpg" alt="Project 5" />
          <img src="/p6.jpg" alt="Project 6" />
        </div>
      </section>

      {/* ───── CONTACT ───── */}
      <section id="contact" className="contact">
        <h2>
          Contact <span className="accent">Me!</span>
        </h2>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <input type="text" placeholder="Subject" />
          <textarea placeholder="Your Message"></textarea>
          <button className="btn-primary">Send Message</button>
        </form>
      </section>

      {/* ───── FOOTER ───── */}
      <footer className="footer">
        © {new Date().getFullYear()} Reagan Gabutelo — All Rights Reserved.
      </footer>
    </div>
  );
}
