export default function Frontend() 
{
  return (
    <div className="page">

      <section className="hero small">
        <h1>Frontend Engineering</h1>
        <p>Everything you need to build modern user interfaces.</p>
      </section>

      <section className="grid-2">
        <div className="card">
          <h3>HTML5</h3>
          <p>Semantic structure, accessibility, and SEO-friendly markup.</p>
        </div>

        <div className="card">
          <h3>CSS3</h3>
          <p>Flexbox, Grid, animations, responsive layouts, and UI design systems.</p>
        </div>

        <div className="card">
          <h3>JavaScript ES6+</h3>
          <p>Functions, promises, async/await, modules, and event handling.</p>
        </div>

        <div className="card">
          <h3>React</h3>
          <p>Hooks, props, state management, routing, and component architecture.</p>
        </div>
      </section>

      <section className="wide">
        <h2>Frontend Workflow</h2>
        <p>
          Design → Component breakdown → Styling → State management → API integration → Optimization
        </p>
      </section>

    </div>
  );
}
