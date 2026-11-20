
import {
  IconCode,
  IconPalette,
  IconSchool,
  IconRocket,
} from '@tabler/icons-react';

import './About.css';

const highlights = [
  {
    icon: IconCode,
    title: 'Frontend Development',
    description:
      'Building responsive and functional web interfaces using modern frontend technologies.',
  },
  {
    icon: IconPalette,
    title: 'UI/UX Design',
    description:
      'Designing intuitive interfaces and translating ideas into structured visual experiences.',
  },
  {
    icon: IconSchool,
    title: 'Computer Science',
    description:
      'Applying technical knowledge to understand problems and develop practical solutions.',
  },
  {
    icon: IconRocket,
    title: 'Continuous Learning',
    description:
      'Exploring new technologies, improving my skills and growing through practical projects.',
  },
];

function About() {
  return (
    <section className="about-section" id="about">
      <div className="section-heading">
        <span className="section-label">GET TO KNOW ME</span>
        <h2>About <span>Me</span></h2>
        <p>A little about my background and what drives me.</p>
      </div>

      <div className="about-content">
        <div className="about-description">
          <h3>Turning ideas into meaningful digital experiences.</h3>

          <p>
            I'm Manzi Alex, a Frontend Developer and UI/UX Designer
            with a background in Computer Science and a passion
            for building practical digital solutions.
          </p>

          <p>
            I enjoy combining design and development to create
            interfaces that are visually engaging, accessible
            and easy to use.
          </p>

          <p>
            I'm continuously developing my technical and creative
            skills through hands-on projects, collaboration and
            learning new technologies.
          </p>
        </div>

        <div className="about-highlights">
          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <article className="highlight-card" key={item.title}>
                <div className="highlight-icon">
                  <Icon size={23} stroke={1.8} />
                </div>

                <div>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default About;
