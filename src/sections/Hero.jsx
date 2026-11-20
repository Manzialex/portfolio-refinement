import { Button } from "@mantine/core";
import { IconArrowUpRight, IconMail } from "@tabler/icons-react";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-content">
        <div className="availability">
          <span className="status-dot"></span>
          Available for opportunities
        </div>

        <p className="hero-intro">HELLO, I'M MANZI ALEX</p>

        <h1>
          I build digital experiences
          <span> that make a difference.</span>
        </h1>

        <p className="hero-description">
          I'm a Frontend Developer and UI/UX Designer passionate about creating
          beautiful, functional and user-friendly digital experiences.
        </p>

        <div className="hero-actions">
          <Button
            component="a"
            href="#projects"
            color="teal"
            rightSection={<IconArrowUpRight size={18} />}
          >
            Explore My Work
          </Button>

          <Button
            component="a"
            href="#contact"
            variant="outline"
            color="gray"
            leftSection={<IconMail size={18} />}
          >
            Get In Touch
          </Button>
        </div>

        <div className="hero-technologies">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>React</span>
          <span>Figma</span>
        </div>
      </div>

      <div className="hero-visual">
        <div className="visual-card">
          <div className="visual-top">
            <span>MY PROFILE</span>
            <span className="online-dot"></span>
          </div>
          <div className="hero-avatar">
            <img src="/profile-img.jpeg" alt="Manzi Alex" />
          </div>
          <h3>Manzi Alex</h3>
          <p>Frontend Developer</p>

          <div className="visual-divider"></div>

          <div className="visual-info">
            <span>Location</span>
            <strong>Uganda</strong>
          </div>

          <div className="visual-info">
            <span>Focus</span>
            <strong>Web Development</strong>
          </div>

          <div className="visual-info">
            <span>Interest</span>
            <strong>UI/UX & Technology</strong>
          </div>
        </div>
        <div className="floating-tag">&lt;/&gt; Building with code</div>
      </div>
    </section>
  );
}

export default Hero;
