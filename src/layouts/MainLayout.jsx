import Sidebar from './Sidebar';
import './MainLayout.css';

function MainLayout({ children }) {
  return (
    <div className="portfolio-layout">
      <Sidebar />

      <main className="main-content">
        {children}
      </main>
    </div>
  );
}

export default MainLayout;