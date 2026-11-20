import {
  IconHome,
  IconUser,
  IconCode,
  IconBriefcase,
  IconPalette,
  IconTimeline,
  IconMail,
} from '@tabler/icons-react';
import './Sidebar.css';

const navigationItems = [
  { label: 'Home', icon: IconHome, href: '#home' },
  { label: 'About', icon: IconUser, href: '#about' },
  { label: 'Skills', icon: IconCode, href: '#skills' },
  { label: 'Projects', icon: IconBriefcase, href: '#projects' },
  { label: 'UI/UX Design', icon: IconPalette, href: '#design' },
  { label: 'Experience', icon: IconTimeline, href: '#experience' },
  { label: 'Contact', icon: IconMail, href: '#contact' },
];

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-profile">
        <img
          src="/profile-img.jpeg"
          alt="Manzi Alex"
          className="profile-image"
        />

        <h2>Manzi Alex</h2>
        <p>Frontend Developer & UI/UX Designer</p>
      </div>

      <nav className="sidebar-navigation">
        {navigationItems.map((item) => {
          const Icon = item.icon;

          return (
            <a
              href={item.href}
              className="nav-link"
              key={item.label}
            >
              <Icon size={19} stroke={1.8} />
              <span>{item.label}</span>
            </a>
          );
        })}
      </nav>

      <div className="sidebar-footer">
        <p>© 2026 Manzi Alex</p>
      </div>
    </aside>
  );
}

export default Sidebar;