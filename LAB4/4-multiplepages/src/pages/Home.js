export default function Home() 
{
  return (
    <div className="page">

      <section className="hero">
        <h1>Master Modern Web Programming</h1>
        <p>
          Learn frontend, backend, databases, APIs, deployment, and real-world
          software engineering practices in a structured way.
        </p>

        <div className="hero-buttons">
          <button className="btn">Start Learning</button>
          <button className="btn-outline">Explore Docs</button>
        </div>
      </section>

      <section className="stats">
        <div className="stat">
          <h2>120+</h2>
          <p>Lessons</p>
        </div>
        <div className="stat">
          <h2>40+</h2>
          <p>Projects</p>
        </div>
        <div className="stat">
          <h2>10+</h2>
          <p>Technologies</p>
        </div>
      </section>

      <section className="grid-3">
        <div className="card">
          <h3>HTML & CSS</h3>
          <p>Structure and design modern responsive websites.</p>
        </div>

        <div className="card">
          <h3>JavaScript</h3>
          <p>Core programming logic, DOM, APIs, and async programming.</p>
        </div>

        <div className="card">
          <h3>React</h3>
          <p>Component-based UI development for scalable applications.</p>
        </div>

        <div className="card">
          <h3>Node.js</h3>
          <p>Backend runtime for building scalable server applications.</p>
        </div>

        <div className="card">
          <h3>Databases</h3>
          <p>MongoDB and SQL data modeling and queries.</p>
        </div>

        <div className="card">
          <h3>Deployment</h3>
          <p>Deploy apps using cloud platforms and CI/CD pipelines.</p>
        </div>
      </section>

      <section className="banner">
        <h2>Build Real-World Projects</h2>
        <p>
          From simple websites to full-stack applications with authentication,
          APIs, dashboards, and database integration.
        </p>
      </section>

    </div>
  );
}
