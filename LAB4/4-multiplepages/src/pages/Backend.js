export default function Backend()
 {
  return (
    <div className="page">

      <section className="hero small">
        <h1>Backend Development</h1>
        <p>Powering applications with secure and scalable server logic.</p>
      </section>

      <section className="grid-3">
        <div className="card">
          <h3>Node.js</h3>
          <p>JavaScript runtime for backend systems.</p>
        </div>

        <div className="card">
          <h3>Express.js</h3>
          <p>Lightweight framework for APIs and routing.</p>
        </div>

        <div className="card">
          <h3>Authentication</h3>
          <p>JWT, sessions, OAuth, and secure login systems.</p>
        </div>

        <div className="card">
          <h3>REST APIs</h3>
          <p>Communication between frontend and backend systems.</p>
        </div>

        <div className="card">
          <h3>Databases</h3>
          <p>MongoDB, PostgreSQL, data modeling and queries.</p>
        </div>

        <div className="card">
          <h3>Security</h3>
          <p>Encryption, validation, and secure server architecture.</p>
        </div>
      </section>

      <section className="banner">
        <h2>Request → Process → Response</h2>
        <p>
          Client sends request → server processes logic → database queried → response returned.
        </p>
      </section>

    </div>
  );
}
