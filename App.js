
import React, { useEffect, useState } from "react";
import "./App.css";

import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  // Base path untuk GitHub Pages
  const assetPath = (path) => `${process.env.PUBLIC_URL}${path}`;

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const skills = [
    "python",
    "html",
    "css",
    "javascript",
    "postgresql",
    "react",
    "figma",
    "php",
    "tensorflow",
    "java",
    "gcp",
    "c",
    "excel",
    "mysql",
  ];

  const projects = [
    {
      image: "/projects/scancare.jpg",
      title: "TB Dashboard",
      link: "https://github.com/ScanCareApp/.github.git",
    },
    {
      image: "/projects/sentimen.jpg",
      title: "Sentiment Analysis Saham",
      link: "https://github.com/kristina/sentiment-analysis",
    },
    {
      image: "/projects/deepl.jpg",
      title: "Predictive App with Streamlit",
      link: "https://github.com/AnggitaGayatri/Copywriting-Otomatis-Produk-Fashion-Menggunakan-T5.git",
    },
    {
      image: "/projects/dashboard.png",
      title: "Personal Portfolio Website",
      link: "https://github.com/AnggitaGayatri/TB-Dashboard.git",
    },
  ];

  const certificates = [
    {
      image: "/certificates/tfdc.jpg",
      title: "Tensorflow Developer Certificate",
      link: "https://drive.google.com/file/d/1Sn0SYVVBgiYg1NPzgA18wWfY9AX0i-Il/view?usp=sharing",
    },
    {
      image: "/certificates/Bangkit.jpg",
      title: "Machine Learning Cohort",
      link: "https://drive.google.com/file/d/1RBzP8Us5i6xk4z_y16g0i2ToQ1-J4cNY/view?usp=sharing",
    },
    {
      image: "/certificates/cube.jpg",
      title: "Teacher Coding CUBE",
      link: "https://drive.google.com/file/d/1JwLzsGEE8ngSA6ViWf4p2vsptx-nM8ag/view?usp=sharing",
    },
    {
      image: "/certificates/poster.jpg",
      title: "UI/UX Design – Coursera",
      link: "https://drive.google.com/file/d/1iZPsyW4hsgWAtmo7z1ZdxwatI79sa55M/view?usp=sharing",
    },
    {
      image: "/certificates/CourseraData.jpg",
      title: "Data Science – DQLab",
      link: "https://drive.google.com/file/d/1MTlmIz7Zcv7uoxCuwxYoE0c_1KRUKos8/view?usp=sharing",
    },
    {
      image: "/certificates/CourseraMath.jpg",
      title: "Deep Learning – Kaggle",
      link: "https://drive.google.com/file/d/1aJYeifqhsaZzMUHfV-yNb1lf51lDQAzU/view?usp=sharing",
    },
    {
      image: "/certificates/CourseraTfdev.jpg",
      title: "Database – Oracle Academy",
      link: "https://drive.google.com/file/d/1994vPFZYzbZvZbDYOLE1B0v2bL0ygXbz/view?usp=sharing",
    },
    {
      image: "/certificates/CourseraML.jpg",
      title: "Java Basics – Sololearn",
      link: "https://drive.google.com/file/d/1RVG0lcmu__uQ1kmh5FJ_dQ8pBfeypUVP/view?usp=sharing",
    },
  ];

  return (
    <div className="App">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-container">
          <div className="logo">Kristina's Portfolio</div>
          <ul className="nav-links">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#certificates">Certificates</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero / Landing */}
      <header className="hero green-dark">
        <div className="hero-content">
          <h1>
            Hello, I'm <span>Kristina</span>
          </h1>
          <p>Data Enthusiast | UI/UX Learner</p>
        </div>
      </header>

      {/* About Me */}
      <section
        id="about"
        className="section green-light"
        data-aos="fade-up"
      >
        <div className="about-container">
          <img
            src={assetPath("/Foto Profile Kristina.jpeg")}
            alt="Foto Kristina"
            className="profile-img"
          />

          <div className="about-text">
            <h2>About Me</h2>
            <p>
              I am a fresh graduate of Information Technology at Udayana
              University with a strong interest in data and technology. I'm
              passionate about learning new things, especially in the
              ever-evolving world of tech. I've worked on various projects
              involving data processing, analysis, modeling, and mobile/web app
              development.
            </p>

            <a
              href={assetPath("/CV KRISTINA.pdf")}
              download
              className="custom-button"
            >
              📄 Download CV
            </a>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="experience-section"
        data-aos="fade-up"
      >
        <h2>Projects</h2>

        <div className="experience-grid">
          {projects.map((project, index) => (
            <div
              className="experience-card certificate-card"
              key={index}
            >
              <img
                src={assetPath(project.image)}
                alt={project.title}
                className="certificate-img"
              />

              <h3>{project.title}</h3>

              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="custom-button"
              >
                🔗 View Project
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Certificates */}
      <section id="certificates" className="experience-section">
        <h2>Certificates</h2>

        <div className="experience-grid">
          {certificates.map((cert, index) => (
            <div
              className="experience-card certificate-card"
              key={index}
            >
              <img
                src={assetPath(cert.image)}
                alt={cert.title}
                className="certificate-img"
                onClick={() => setSelectedCertificate(cert.image)}
                style={{ cursor: "pointer" }}
              />

              <h3>{cert.title}</h3>

              <a
                href={cert.link}
                target="_blank"
                rel="noreferrer"
                className="custom-button"
              >
                👁 View Certificate
              </a>
            </div>
          ))}
        </div>

        {/* Certificate image preview */}
        {selectedCertificate && (
          <div
            onClick={() => setSelectedCertificate(null)}
            role="button"
            tabIndex={0}
            onKeyDown={(event) => {
              if (event.key === "Escape" || event.key === "Enter") {
                setSelectedCertificate(null);
              }
            }}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0, 0, 0, 0.85)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 9999,
              padding: "20px",
              cursor: "pointer",
            }}
          >
            <img
              src={assetPath(selectedCertificate)}
              alt="Certificate preview"
              style={{
                maxWidth: "90%",
                maxHeight: "90%",
                objectFit: "contain",
              }}
            />
          </div>
        )}
      </section>

      {/* Skills */}
      <section id="skills" className="skills-section experience-section">
        <h2>Skills</h2>

        <div className="skills-slider">
          <div className="skills-track">
            {[...skills, ...skills].map((tech, index) => (
              <div className="skill-icon-wrapper" key={`${tech}-${index}`}>
                <img
                  src={assetPath(`/icons/logo ${tech}.png`)}
                  alt={tech}
                  className="skill-icon"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="experience-section">
        <h2>Experience</h2>

        <div className="experience-grid-2">
          <div className="experience-card">
            <img
              src={assetPath("/experience-bangkit.jpg")}
              alt="Bangkit Academy"
              className="experience-img"
            />

            <h3>
              Machine Learning Cohort
              <br />
              <span>Bangkit Academy</span>
            </h3>

            <p>📅 August 2023 – Januari 2024</p>

            <ul>
              <li>
                Gained in-depth knowledge in machine learning and data
                analysis.
              </li>
              <li>Top 50 out of 500+ teams in final project performance.</li>
              <li>Distinction Award (Top 10% of 4,500 participants).</li>
            </ul>
          </div>

          <div className="experience-card">
            <img
              src={assetPath("/experience-cube.jpg")}
              alt="Coding Teacher at CUBE"
              className="experience-img"
            />

            <h3>
              Coding Teacher
              <br />
              <span>CUBE</span>
            </h3>

            <p>📅 July 2023 – November 2023</p>

            <ul>
              <li>
                Taught fundamental to advanced coding concepts to kids.
              </li>
              <li>
                Mentored 12 students into Kids Programming competition.
              </li>
              <li>All students ranked in Top 100 nationally.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="section green-dark"
        data-aos="fade-up"
      >
        <h2>Contact</h2>
        <p>Email: kristinaasnprwork@gmail.com</p>

        <p>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/kristinaasnpr"
            target="_blank"
            rel="noreferrer"
          >
            linkedin.com/in/kristinaasnpr
          </a>
        </p>

        <p>
          GitHub:{" "}
          <a
            href="https://github.com/kristinaasnpr"
            target="_blank"
            rel="noreferrer"
          >
            github.com/kristinaasnpr
          </a>
        </p>
      </section>

      {/* Footer */}
      <footer className="footer">
        <center>&copy; 2025 Kristina. Dibuat dengan 💚 React.js</center>
      </footer>
    </div>
  );
}

export default App;
