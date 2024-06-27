const Contact = () => {
  return (
    <section id="contact">
      <h1>Contact Me</h1>
      <div className="contact-info">
        <p>
          If you would like to get in touch with me, feel free to reach out
          using the following methods:
        </p>
        <ul>
          <li>Email: john.doe@example.com</li>
          <li>Phone: +1234567890</li>
          <li>Address: 123 Web Developer Street, City, Country</li>
        </ul>
      </div>
      <form className="contact-form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="4" required></textarea>

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
