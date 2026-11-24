import {
  IconLayoutDashboard,
  IconSitemap,
  IconMouse,
  IconBrandFigma,
} from '@tabler/icons-react';

import './Design.css';

const designServices = [
  {
    icon: IconLayoutDashboard,
    title: 'UI Design',
    description:
      'Designing clean, modern and visually consistent interfaces that make digital products engaging and easy to navigate.',
  },
  {
    icon: IconSitemap,
    title: 'UX & Wireframing',
    description:
      'Planning page structures, organizing content and creating wireframes to establish clear user experiences.',
  },
  {
    icon: IconMouse,
    title: 'Prototyping',
    description:
      'Transforming design concepts into interactive prototypes to explore layouts, interactions and user flows.',
  },
];

function Design() {
  return (
    <section className="design-section" id="design">
      <div className="design-heading">
        <span className="section-label">DESIGN & CREATIVITY</span>
        <h2>UI/UX <span>Design</span></h2>
        <p>
          Combining creativity and user-centered thinking
          to design meaningful digital experiences.
        </p>
      </div>

      <div className="design-grid">
        {designServices.map((service) => {
          const Icon = service.icon;

          return (
            <article className="design-card" key={service.title}>
              <div className="design-icon">
                <Icon size={26} stroke={1.8} />
              </div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>
            </article>
          );
        })}
      </div>

      <div className="design-tools">
        <div className="figma-icon">
          <IconBrandFigma size={28} />
        </div>

        <div>
          <h3>My Design Tool</h3>
          <p>
            Figma — for interface design, wireframing
            and interactive prototyping.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Design;
