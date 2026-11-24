import {
  IconCode,
  IconPalette,
  IconTool,
  IconGitBranch,
} from '@tabler/icons-react';

import './Skills.css';

const skillCategories = [
  {
    icon: IconCode,
    title: 'Frontend Development',
    description: 'Building responsive and interactive web applications.',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Vite'],
  },
  {
    icon: IconPalette,
    title: 'UI/UX Design',
    description: 'Creating intuitive interfaces and translating ideas into designs.',
    skills: ['Figma', 'Wireframing', 'Prototyping', 'Responsive Layouts'],
  },
  {
    icon: IconTool,
    title: 'Tools & Workflow',
    description: 'Using modern tools to build, manage and improve projects.',
    skills: ['Git', 'GitHub', 'VS Code', 'Mantine UI'],
  },
  {
    icon: IconGitBranch,
    title: 'Development Practices',
    description: 'Applying structured approaches to building digital products.',
    skills: [
      'Component-Based Development',
      'API Integration',
      'Responsive Design',
      'Version Control',
    ],
  },
];

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-heading">
        <span className="section-label">MY EXPERTISE</span>
        <h2>Skills & <span>Technologies</span></h2>
        <p>
          The technologies, tools and practices I use to bring
          digital ideas to life.
        </p>
      </div>

      <div className="skills-grid">
        {skillCategories.map((category) => {
          const Icon = category.icon;

          return (
            <article className="skill-card" key={category.title}>
              <div className="skill-card-icon">
                <Icon size={25} stroke={1.8} />
              </div>

              <h3>{category.title}</h3>

              <p className="skill-description">
                {category.description}
              </p>

              <div className="skill-tags">
                {category.skills.map((skill) => (
                  <span className="skill-tag" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Skills;
