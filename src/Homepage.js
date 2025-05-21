// src/HomePage.js
import React from "react";

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Welcome to DevOps Training</h1>
      <p>Your one-stop destination for mastering DevOps skills and tools.</p>
      <section>
        <h2>Our Courses</h2>
        <ul>
          <li>Introduction to DevOps</li>
          <li>Continuous Integration/Continuous Deployment (CI/CD)</li>
          <li>Containerization with Docker</li>
          <li>Infrastructure as Code (IaC)</li>
          <li>Monitoring and Logging</li>
          <li>Security in DevOps</li>
        </ul>
      </section>
      <section>
        <h2>Why DevOps?</h2>
        <p>
          DevOps is a set of practices that combines software development (Dev)
          and IT operations (Ops). It aims to shorten the systems development
          life cycle and provide continuous delivery with high software quality.
        </p>
      </section>
    </div>
  );
};

export default HomePage;
