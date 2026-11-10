
import {
  LayoutDashboard,
  Bike,
  Truck,
  Zap,
  SlidersHorizontal,
  Activity,
  Headset,
} from "lucide-react";

const menuItems = [
  { name: "Overview", icon: LayoutDashboard },
  { name: "Vehicle Intelligence", icon: Bike },
  { name: "Fleet Management", icon: Truck },
  { name: "Smart Charging", icon: Zap },
  { name: "Strategy Simulator", icon: SlidersHorizontal },
  { name: "CareLoop", icon: Headset },
];

export default function Sidebar({ activePage, setActivePage }) {
  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-icon">
          <Activity size={23} />
        </div>
        <div>
          <h2>ATHER</h2>
          <p>INTELLIGENCE</p>
        </div>
      </div>

      <p className="menu-label">WORKSPACE</p>

      <nav>
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.name}
              onClick={() => setActivePage(item.name)}
              className={`nav-item ${
                activePage === item.name ? "active" : ""
              }`}
            >
              <Icon size={19} />
              <span>{item.name}</span>
            </button>
          );
        })}
      </nav>

      <div className="sidebar-footer">
        <div className="status-dot" />
        <span>Analytics system online</span>
      </div>
    </aside>
  );
}
