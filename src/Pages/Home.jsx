import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {

  useEffect(() => {
    const particlesContainer = document.getElementById("particles");
    if (!particlesContainer) return;

    const particleCount = 30;

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div");
      particle.classList.add("particle");

      const size = Math.random() * 5 + 2;
      const left = Math.random() * 100;
      const duration = Math.random() * 20 + 10;
      const delay = Math.random() * 5;

      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${left}%`;
      particle.style.animationDuration = `${duration}s`;
      particle.style.animationDelay = `${delay}s`;

      particlesContainer.appendChild(particle);
    }

    // 🧹 CLEANUP when leaving Home
    return () => {
      particlesContainer.innerHTML = "";
    };
  }, []);

  return (
    <section className="hero home-section">
      <div id="particles"></div>

      <div className="hero-content">
        <h1>AT THE CENTER OF GROWTH</h1>
        <h2>Connecting talent with opportunities</h2>

        <p>
          At CENVORO, we believe growth happens when the right people meet
          the right opportunities.
        </p>

        <div className="hero-buttons">
          <button className="btn-primary">Find Jobs</button>
          <Link to="/hiretalent">
            <button className="btn-outline">Hire Talent</button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Home;
