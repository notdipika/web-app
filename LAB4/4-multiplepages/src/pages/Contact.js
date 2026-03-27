export default function Contact() 
{
  return (
    <div className="page">

      <section className="hero small">
        <h1>Contact</h1>
        <p>Get in touch for collaboration or project inquiries.</p>
      </section>

      <div className="contact">
        <input className="input" placeholder="Name" />
        <input className="input" placeholder="Email" />
        <textarea className="textarea" placeholder="Message" />
        <button className="btn">Send Message</button>
      </div>

    </div>
  );
}
