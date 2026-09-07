import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import "./App.css";

const technologies = [
  "React",
  "JavaScript",
  "TypeScript",
  "Python",
  "Docker",
  "Git",
  "GitHub Actions",
  "Node.js",
];

const projects = [
  {
    number: "01",
    title: "DevOps Pipeline",
    category: "CI/CD · GitHub Actions",
  },
  {
    number: "02",
    title: "React Dashboard",
    category: "React · UI Development",
  },
  {
    number: "03",
    title: "Automation Project",
    category: "Python · Automation",
  },
];

function App() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="app">
      <div
        className="mouse-glow"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
        }}
      />

      <div className="background">
        <video
          className="background-video"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/background.mp4" type="video/mp4" />
        </video>
        <div className="background-grid" />
        <div className="orb orb-one" />
        <div className="orb orb-two" />
        <div className="orb orb-three" />

        <div className="floating-interface interface-one">
          <span className="interface-dot" />
          <span>deploy.production</span>
          <strong>success</strong>
        </div>

        <div className="floating-interface interface-two">
          <span>{"</>"}</span>
          <span>npm run build</span>
        </div>

        <div className="floating-interface interface-three">
          <span>42 commits</span>
          <span>↗</span>
        </div>
      </div>

      <header className="navbar">
        <a href="#" className="logo">
          Gabriel Munhoz<span>/</span>
        </a>

        <nav>
          <a href="#about">Sobre</a>
          <a href="#projects">Projetos</a>
          <a href="#contact">Contato</a>
        </nav>

        <a
          href="https://github.com/gaabrielmunhoz"
          target="_blank"
          rel="noreferrer"
          className="availability"
        >
          <span />
          disponível para projetos
        </a>
      </header>

      <main>
        <section className="hero">
          <motion.div
            className="hero-kicker"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span>✦</span>
            Software Developer
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            I build digital
            <span> experiences.</span>
          </motion.h1>

          <motion.div
            className="hero-bottom"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <p>
              Olá, eu sou <strong>Gabriel Munhoz</strong>. Desenvolvedor focado
              em construir interfaces modernas, aplicações web e experiências
              digitais que unem código e design.
            </p>

            <a href="#projects" className="explore-button">
              explorar projetos
              <span>↘</span>
            </a>
          </motion.div>

          <div className="hero-scroll">
            <span>scroll</span>
            <div />
          </div>
        </section>

        <section className="marquee">
          <div className="marquee-track">
            {[...technologies, ...technologies].map((technology, index) => (
              <div className="marquee-item" key={index}>
                {technology}
                <span>✦</span>
              </div>
            ))}
          </div>
        </section>

        <section className="about" id="about">
          <motion.div
            className="section-label"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <span>01</span>
            Sobre
          </motion.div>

          <div className="about-grid">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              Código é ferramenta.
              <span> Experiência é o resultado.</span>
            </motion.h2>

            <motion.div
              className="about-text"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p>
                Gosto de transformar ideias em produtos digitais funcionais,
                rápidos e visualmente interessantes.
              </p>

              <p>
                Atualmente trabalho e estudo tecnologias de desenvolvimento web,
                automação, DevOps e engenharia de software.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="projects" id="projects">
          <div className="section-label">
            <span>02</span>
            Projetos selecionados
          </div>

          <div className="project-list">
            {projects.map((project, index) => (
              <motion.article
                className="project"
                key={project.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.6,
                }}
              >
                <div className="project-number">{project.number}</div>

                <div>
                  <h3>{project.title}</h3>
                  <p>{project.category}</p>
                </div>

                <div className="project-arrow">
                  <span>↗</span>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="contact-glow" />

          <span className="section-label contact-label">
            <span>03</span>
            Contato
          </span>

          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Let's build
            <span> something.</span>
          </motion.h2>

          <div className="contact-links">
            <a
              href="https://github.com/gaabrielmunhoz"
              target="_blank"
              rel="noreferrer"
            >
              <span>GH</span>
              GitHub
            </a>

            <a href="#">
              <span>IN</span>
              LinkedIn
            </a>

            <a href="mailto:seuemail@email.com">
              <span>@</span>
              E-mail
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;