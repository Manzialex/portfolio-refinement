import {
  IconExternalLink,
  IconBrandGithub,
} from '@tabler/icons-react';

import './Projects.css';

const projects = [
  {
    title: 'Perfume Delivery App',
    category: 'E-Commerce',
    description:
      'A perfume delivery application designed to make browsing, discovering and ordering fragrances easier.',
    technologies: ['React', 'Vite', 'CSS'],
    liveLink: '',
    githubLink: '',
  },
  {
    title: 'LearnLito – Course Search',
    category: 'Web Application',
    description:
      'A course discovery interface featuring API-powered search, filtering, pagination and a course details drawer.',
    technologies: ['React', 'Mantine UI', 'REST API'],
    liveLink: '',
    githubLink: '',
  },
  {
    title: 'BizFlow',
    category: 'Business Management',
    description:
      'A business management project concept focused on helping small retail businesses track inventory and daily sales.',
    technologies: ['React', 'JavaScript', 'CSS'],
    liveLink: '',
    githubLink: '',
  },
];

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-heading">
        <span className="section-label">MY RECENT WORK</span>
        <h2>Featured <span>Projects</span></h2>
        <p>
          A selection of projects that reflect my skills,
          creativity and approach to solving problems.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <div className="project-preview">
              <span>{project.category}</span>
            </div>

            <div className="project-details">
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project-technologies">
                {project.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>

              <div className="project-links">
                {project.liveLink && (
                  <a href={project.liveLink} target="_blank" rel="noreferrer">
                    <IconExternalLink size={17} />
                    Live Demo
                  </a>
                )}

                {project.githubLink && (
                  <a href={project.githubLink} target="_blank" rel="noreferrer">
                    <IconBrandGithub size={17} />
                    Source Code
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
