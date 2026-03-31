import { useLocation } from 'react-router-dom';
import { sections } from '../data/sections';

export default function DashboardPage() {
  const { state } = useLocation();
  const role = state?.role || 'faculty';

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <h2>ReportFlow</h2>
        <p>{role} dashboard</p>
        <nav>
          <a href="#overview">Overview</a>
          <a href="#sections">Sections</a>
          <a href="#entries">Entries</a>
          <a href="#uploads">Uploads</a>
        </nav>
      </aside>
      <main className="main">
        <section id="overview" className="panel">
          <h1>Weekly Report Dashboard</h1>
          <p>Centralized weekly report workflow with database-ready MERN architecture.</p>
        </section>
        <section id="sections" className="panel">
          <h3>All 17 Sections</h3>
          <div className="grid">
            {sections.map((section) => <div className="tile" key={section}>{section}</div>)}
          </div>
        </section>
        <section id="entries" className="panel">
          <h3>Entry flow</h3>
          <p>Faculty creates entries, coordinator reviews them, and admin monitors system-wide status.</p>
        </section>
        <section id="uploads" className="panel">
          <h3>File uploads</h3>
          <p>Multer-backed upload API stores entry attachments and maps them to database records.</p>
        </section>
      </main>
    </div>
  );
}