"use client"; // This is a client component

import styles from './Editor.module.css';
import Link from 'next/link';
import { ChevronRight, User, ChevronLeft, Plus, Play, RefreshCw, Terminal, File, Server, Cpu, MemoryStick, HardDrive, BrainCircuit, Book, Users, Repeat, FileText, Sliders, Camera, Filter } from 'lucide-react';

export default function Editor() {
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
          <div className={styles.codeEditorPanel}>
            <div className={styles.systemBrowserHeader}>
              <h2 className={styles.systemBrowserTitle}>plugins/my-plugin/main.js</h2>
            </div>
            <div className={styles.codeEditorContent}>
              {/* Code Editor/Previewer will go here */}
              <p>Code Editor</p>
            </div>
          </div>
          <div className={styles.serverStatsHeader}>
            <div className={styles.statItem}><Server size={14} /><span>IP: 192.168.1.1</span></div>
            <div className={styles.statItem}><Cpu size={14} /><span>CPU: 45%</span></div>
            <div className={styles.statItem}><MemoryStick size={14} /><span>MEM: 60%</span></div>
            <div className={styles.statItem}><HardDrive size={14} /><span>STO: 75%</span></div>
            <div className={styles.statItem}><BrainCircuit size={14} /><span>AI: 80%</span></div>
          </div>
          <div className={styles.serverManagementPanel}>
            <div className={styles.serverTerminal}>
              <p>&gt; Server starting...</p>
              <p>&gt; Loading world...</p>
            </div>
            <div className={styles.serverActions}>
              {/* All buttons are now in a single list for the grid */}
              <button className={styles.actionButton}><Play size={16} /> Start Server</button>
              <button className={styles.actionButton}><RefreshCw size={16} /> Restart Server</button>
              <button className={styles.actionButton}><FileText size={16} /> View Logs</button>
              <button className={styles.actionButton}><HardDrive size={16} /> Backup Server</button>
              <button className={styles.actionButton}><Users size={16} /> Manage Players</button>
              <button className={styles.actionButton}><Repeat size={16} /> Switch Server</button>
              <button className={styles.actionButton}><Book size={16} /> Reload Plugins</button>
              <button className={styles.actionButton}><Sliders size={16} /> TPS Monitor</button>
              <button className={styles.actionButton}><Terminal size={16} /> Crash Dump Viewer</button>
              <button className={styles.actionButton}><File size={16} /> Command Presets</button>
              <button className={styles.actionButton}><Camera size={16} /> World Snapshot / Restore</button>
              <button className={styles.actionButton}><Filter size={16} /> Plugin Console Filter</button>
            </div>
          </div>
        </main>
        <aside className={styles.systemBrowser}>
          <div className={styles.browserSection}>
            <div className={styles.systemBrowserHeader}>
              <h2 className={styles.systemBrowserTitle}>System Browser</h2>
            </div>
            <div className={styles.browserContent}>
              <div className={styles.systemBrowserNav}>
                <button className={styles.systemBrowserButton}>Plugin</button>
                <button className={styles.systemBrowserButton}>Server</button>
                <button className={styles.systemBrowserButton}>Logs</button>
              </div>
              <div className={styles.fileListContainer}>
                <div className={styles.fileItem}>
                  <File size={14} className={styles.fileIcon} />
                  <span className={styles.fileName}>essentials.jar</span>
                </div>
                <div className={styles.fileItem}>
                  <File size={14} className={styles.fileIcon} />
                  <span className={styles.fileName}>worldedit.jar</span>
                </div>
                <div className={styles.fileItem}>
                  <File size={14} className={styles.fileIcon} />
                  <span className={styles.fileName}>luckperms.jar</span>
                </div>
                <div className={styles.fileItem}>
                  <File size={14} className={styles.fileIcon} />
                  <span className={styles.fileName}>vault.jar</span>
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
