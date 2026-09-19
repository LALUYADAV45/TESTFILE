
import { useState } from "react";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleStart = () => {
    document
      .getElementById("contact")
      .scrollIntoView({ behavior: "smooth" });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setMessage("Please fill in all fields.");
      return;
    }

    setMessage(
      `Thanks, ${formData.name}! Your message has been received.`
    );

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className={darkMode ? "app dark" : "app light"}>
      {/* Navbar */}
      <nav className="navbar">
        <a href="#" className="logo">
          NEXORA<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="nav-actions">
          <button
            className="theme-btn"
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle theme"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          <button className="nav-button" onClick={handleStart}>
            Get Started ↗
          </button>
        </div>
      </nav>

      {/* Hero */}
      <main className="hero" id="home">
        <div className="hero-content">
          <p className="eyebrow">✦ THE FUTURE IS HERE</p>

          <h1>
            Build something
            <br />
            <span>extraordinary.</span>
          </h1>

          <p className="description">
            Turn your boldest ideas into reality with powerful,
            simple, and intelligent digital experiences.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn" onClick={handleStart}>
              Start Building ↗
            </button>

            <a href="#features" className="secondary-btn">
              Explore More ↓
            </a>
          </div>

          <p className="hero-note">
            ✦ Designed for creators, innovators and dreamers.
          </p>
        </div>

        <div className="hero-visual">
          <div className="glow"></div>

          <div className="orb">
            <div className="orb-inner">
              <span>✦</span>
            </div>
          </div>

          <div className="floating-card card-one">
            ✦ Innovation
          </div>

          <div className="floating-card card-two">
            ◈ Creativity
          </div>

          <div className="floating-card card-three">
            ⚡ Future Ready
          </div>
        </div>
      </main>

      {/* Stats */}
      <section className="stats">
        <div>
          <h2>10K+</h2>
          <p>Creative Minds</p>
        </div>

        <div>
          <h2>99.9%</h2>
          <p>Reliability</p>
        </div>

        <div>
          <h2>24/7</h2>
          <p>Support</p>
        </div>
      </section>

      {/* Features */}
      <section className="features section" id="features">
        <p className="eyebrow">✦ WHY NEXORA</p>
        <h2>Designed for your next big idea.</h2>

        <div className="feature-grid">
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Lightning Fast</h3>
            <p>
              Optimized experiences that keep your workflow moving.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">◈</div>
            <h3>Modern Design</h3>
            <p>
              Beautiful interfaces crafted for the modern web.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">∞</div>
            <h3>Built to Scale</h3>
            <p>
              Flexible foundations that grow with your ambitions.
            </p>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="about section" id="about">
        <div className="about-visual">
          <div className="code-window">
            <div className="window-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <p>
              <span className="code-purple">const</span> idea ={" "}
              <span className="code-green">"Your Vision"</span>;
            </p>
            <p>
              <span className="code-purple">const</span> future ={" "}
              <span className="code-blue">build</span>(idea);
            </p>
            <p className="code-comment">// Make it extraordinary.</p>
          </div>
        </div>

        <div className="about-content">
          <p className="eyebrow">✦ OUR VISION</p>
          <h2>Ideas deserve a better digital home.</h2>
          <p>
            NEXORA is a creative concept designed to help people
            turn ambitious ideas into meaningful digital experiences.
          </p>

          <button className="primary-btn" onClick={handleStart}>
            Let's Connect ↗
          </button>
        </div>
      </section>

      {/* Contact */}
      <section className="contact section" id="contact">
        <div className="contact-intro">
          <p className="eyebrow">✦ GET IN TOUCH</p>
          <h2>
            Let's build something
            <span> together.</span>
          </h2>
          <p>
            Have a question, idea or just want to say hello?
            Send us a message.
          </p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange}
          />

          <textarea
            name="message"
            placeholder="Tell us about your idea..."
            rows="5"
            value={formData.message}
            onChange={handleChange}
          ></textarea>

          <button type="submit" className="primary-btn submit-btn">
            Send Message ↗
          </button>

          {message && <p className="form-message">{message}</p>}
        </form>
      </section>

      {/* Footer */}
      <footer>
        <div className="logo">
          NEXORA<span>.</span>
        </div>

        <p>© 2026 NEXORA. Crafted with React. 💜</p>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#contact">Contact</a>
        </div>
      </footer>
    </div>
  );
}

export default App;