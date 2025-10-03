import styles from './Home.module.css';
import Link from 'next/link';
import { BrainCircuit, ChevronRight, Users, User, ChevronLeft, Plus } from 'lucide-react';

// Define a type for the project prop for better type safety
type Project = {
  name: string;
  created: string;
  aiUsage: number;
  status: string;
  statusClass: string;
  teamSize: number;
};

// Reusable ProjectCard component
const ProjectCard = ({ project }: { project: Project }) => (
  <div className={styles.projectCard}>
    <div className={styles.projectInfo}>
      <h3 className={styles.projectName}>{project.name}</h3>
      <p className={styles.creationDate}>Created on {project.created}</p>
    </div>
    <div className={styles.projectMeta}>
      <div className={styles.projectDetails}>
        <div className={styles.detailItem}>
          <BrainCircuit size={16} />
          <span>{project.aiUsage}% AI Usage</span>
        </div>
        <div className={styles.status}>
          <div className={`${styles.statusIndicator} ${styles[project.statusClass]}`} />
          <span>{project.status}</span>
        </div>
        <div className={styles.detailItem}>
          <Users size={16} />
          <span>{project.teamSize} Team Members</span>
        </div>
      </div>
      <div className={styles.projectActions}>
        <button className={styles.manageButton}>Manage</button>
        <ChevronRight size={20} className={styles.accessIcon} />
      </div>
    </div>
  </div>
);

export default function Home() {
  const projects = [
    { name: 'Project Alpha', created: 'Oct 2, 2025', aiUsage: 75, status: 'Live', statusClass: 'statusLive', teamSize: 5 },
    { name: 'Project Beta', created: 'Sep 15, 2025', aiUsage: 30, status: 'In Development', statusClass: 'statusDev', teamSize: 8 },
    { name: 'Project Gamma', created: 'Aug 1, 2025', aiUsage: 95, status: 'Archived', statusClass: 'statusArchived', teamSize: 12 },
  ];

  return (
    <div className={styles.pageContainer}>
      <nav className={styles.topNavbar}>
        <div className={styles.logoText}>Pegasus Labs</div>
        <User size={24} className={styles.profileIcon} />
      </nav>
      <div className={styles.subNavbar}>
        <Link href="/" className={styles.navLink}>Dashboard</Link>
        <Link href="/editor" className={styles.navLink}>Editor</Link>
        <Link href="#" className={styles.navLink}>Settings</Link>
        <Link href="#" className={styles.navLink}>Billing</Link>
        <Link href="#" className={styles.navLink}>Integrations</Link>
      </div>
      <div className={styles.mainArea}>
        <aside className={styles.aiAssistant}>
          <div className={styles.aiHeader}>
            <h2 className={styles.aiTitle}>AI Assistant</h2>
          </div>
          <div className={styles.aiMessages}>
            {/* Messages will go here */}
          </div>
          <div className={styles.aiInputArea}>
            <div className={styles.aiInputWrapper}>
              <input
                type="text"
                placeholder="Type a message..."
                className={styles.aiTextInput}
              />
              <button className={styles.aiSendButton}>Send</button>
            </div>
          </div>
        </aside>
        <main className={styles.mainContent}>
          <div className={styles.contentHeader}>
            <h2 className={styles.contentTitle}></h2>
          </div>
          <div className={styles.cardContainer}>
            {projects.map(p => <ProjectCard key={p.name} project={p} />)}
          </div>
        </main>
        <aside className={styles.systemBrowser}>
          <div className={styles.browserSection}>
            <div className={styles.systemBrowserHeader}>
              <h2 className={styles.systemBrowserTitle}>Support Tickets</h2>
              <div className={styles.headerIcons}>
                <ChevronLeft size={16} />
                <ChevronRight size={16} />
                <Plus size={16} />
              </div>
            </div>
            <div className={styles.browserContent}>
              <div className={styles.ticketToggleContainer}>
                <button className={`${styles.toggleButton} ${styles.toggleButtonActive}`}>Active</button>
                <button className={styles.toggleButton}>Closed</button>
              </div>
              <div className={styles.ticketList}>
                <div className={styles.ticketItem}>
                  <div>
                    <p className={styles.ticketId}>#TKT-001</p>
                    <p className={styles.ticketSubject}>Server Offline</p>
                  </div>
                  <ChevronRight size={16} />
                </div>
                <div className={styles.ticketItem}>
                  <div>
                    <p className={styles.ticketId}>#TKT-002</p>
                    <p className={styles.ticketSubject}>Plugin Installation Failed</p>
                  </div>
                  <ChevronRight size={16} />
                </div>
                <div className={styles.ticketItem}>
                  <div>
                    <p className={styles.ticketId}>#TKT-004</p>
                    <p className={styles.ticketSubject}>Server Crashing on Start</p>
                  </div>
                  <ChevronRight size={16} />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.browserSection}>
            <div className={styles.systemBrowserHeader}>
              <h2 className={styles.systemBrowserTitle}>Notes & Reminders</h2>
              <div className={styles.headerIcons}>
                <ChevronLeft size={16} />
                <ChevronRight size={16} />
                <Plus size={16} />
              </div>
            </div>
            <div className={styles.browserContent}>
              <div className={styles.noteList}>
                <div className={styles.noteItem}>
                  <div>
                    <p>User &apos;xX_Miner_Xx&apos; was banned for x-raying.</p>
                    <p className={styles.noteMeta}>By Automatic Logger - Oct 3, 2025</p>
                  </div>
                  <ChevronRight size={16} />
                </div>
                <div className={styles.noteItem}>
                  <div>
                    <p>Player &apos;Steve&apos; purchased the Diamond Rank package.</p>
                    <p className={styles.noteMeta}>By Automatic Logger - Oct 2, 2025</p>
                  </div>
                  <ChevronRight size={16} />
                </div>
                <div className={styles.noteItem}>
                  <div>
                    <p>Remember to backup the world file tonight.</p>
                    <p className={styles.noteMeta}>By scarx - Oct 1, 2025</p>
                  </div>
                  <ChevronRight size={16} />
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
