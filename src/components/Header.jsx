
import { Bell, Search } from "lucide-react";

export default function Header({ activePage }) {
  return (
    <header className="topbar">
      <div>
        <p className="breadcrumb">ATHER INTELLIGENCE / WORKSPACE</p>
        <h1>{activePage}</h1>
      </div>

      <div className="header-actions">
        <div className="search-box">
          <Search size={17} />
          <input placeholder="Search analytics..." />
        </div>

        <button className="icon-button" aria-label="Notifications">
          <Bell size={19} />
          <span className="notification-dot" />
        </button>

       <img
  src="/cwu-logo.png"
  alt="CWU Logo"
  className="header-logo"
/>
      </div>
    </header>
  );
}
