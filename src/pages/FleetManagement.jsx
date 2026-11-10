import { useState } from "react";
import {
  Truck,
  Activity,
  Wrench,
  AlertTriangle,
  Search,
  Battery,
} from "lucide-react";

const fleetData = [
  { id: "ATH-1001", model: "Ather 450X", location: "Bengaluru", battery: 92, usage: 86, status: "Active" },
  { id: "ATH-1002", model: "Ather Rizta", location: "Chennai", battery: 78, usage: 72, status: "Active" },
  { id: "ATH-1003", model: "Ather 450 Apex", location: "Hyderabad", battery: 24, usage: 91, status: "Maintenance" },
  { id: "ATH-1004", model: "Ather 450X", location: "Pune", battery: 65, usage: 58, status: "Active" },
  { id: "ATH-1005", model: "Ather Rizta", location: "Mumbai", battery: 18, usage: 43, status: "Attention" },
  { id: "ATH-1006", model: "Ather 450X", location: "Delhi", battery: 88, usage: 79, status: "Active" },
  { id: "ATH-1007", model: "Ather Rizta", location: "Bengaluru", battery: 96, usage: 94, status: "Active" },
];

export default function FleetManagement() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const filteredVehicles = fleetData.filter((vehicle) => {
    const searchTerm = search.toLowerCase();

    const matchesSearch =
      vehicle.id.toLowerCase().includes(searchTerm) ||
      vehicle.model.toLowerCase().includes(searchTerm) ||
      vehicle.location.toLowerCase().includes(searchTerm);

    const matchesFilter =
      filter === "All" || vehicle.status === filter;

    return matchesSearch && matchesFilter;
  });

  const stats = [
    {
      title: "Total Vehicles",
      value: "1,248",
      detail: "Fleet size",
      icon: Truck,
    },
    {
      title: "Active Vehicles",
      value: "1,086",
      detail: "87% of total fleet",
      icon: Activity,
    },
    {
      title: "Under Maintenance",
      value: "42",
      detail: "3.4% of total fleet",
      icon: Wrench,
    },
    {
      title: "Attention Required",
      value: "18",
      detail: "Requires inspection",
      icon: AlertTriangle,
    },
  ];

  return (
    <div className="fleet-page">
      {/* PAGE HEADER */}
      <div className="fleet-heading">
        <div>
          <p className="fleet-eyebrow">OPERATIONS & PERFORMANCE</p>
          <h1>Fleet Management</h1>
          <p className="fleet-subtitle">
            Monitor vehicle utilisation, availability and maintenance.
          </p>
        </div>

        <span className="fleet-demo-tag">
          DEMO DATA · SIMULATED
        </span>
      </div>

      {/* FLEET METRICS */}
      <div className="fleet-metrics-grid">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div className="fleet-metric-card" key={stat.title}>
              <div className="fleet-metric-top">
                <span>{stat.title}</span>
                <div className="fleet-metric-icon">
                  <Icon size={19} />
                </div>
              </div>

              <h2>{stat.value}</h2>
              <p>{stat.detail}</p>
            </div>
          );
        })}
      </div>

      {/* FLEET INSIGHTS */}
      <div className="fleet-insights">
        <div className="fleet-panel">
          <div className="fleet-panel-heading">
            <div>
              <h3>Fleet Utilisation</h3>
              <p>Average daily vehicle utilisation</p>
            </div>

            <span className="fleet-panel-tag">THIS WEEK</span>
          </div>

          <div className="fleet-utilisation-value">78.4%</div>

          <div
            className="fleet-progress-track"
            role="progressbar"
            aria-valuenow={78.4}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label="Fleet utilisation"
          >
            <div
              className="fleet-progress-fill"
              style={{ width: "78.4%" }}
            />
          </div>

          <p className="fleet-note">
            Illustrative utilisation across the monitored fleet.
          </p>
        </div>

        <div className="fleet-panel">
          <div className="fleet-panel-heading">
            <div>
              <h3>Operational Health</h3>
              <p>Vehicle status distribution</p>
            </div>
          </div>

          <div className="fleet-status-breakdown">
            <div className="fleet-status-row">
              <span>
                <i className="fleet-status-dot active" />
                Active
              </span>
              <strong>87%</strong>
            </div>

            <div className="fleet-status-row">
              <span>
                <i className="fleet-status-dot maintenance" />
                Maintenance
              </span>
              <strong>9%</strong>
            </div>

            <div className="fleet-status-row">
              <span>
                <i className="fleet-status-dot attention" />
                Attention
              </span>
              <strong>4%</strong>
            </div>
          </div>
        </div>
      </div>

      {/* VEHICLE DIRECTORY */}
      <div className="fleet-panel fleet-table-panel">
        <div className="fleet-table-heading">
          <div>
            <h3>Vehicle Fleet Directory</h3>
            <p>Search and monitor individual vehicles</p>
          </div>

          <div className="fleet-controls">
            <div className="fleet-search">
              <Search size={16} />

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search vehicle..."
                aria-label="Search vehicles"
              />
            </div>

            <select
              className="fleet-filter"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              aria-label="Filter vehicles by status"
            >
              <option value="All">All Status</option>
              <option value="Active">Active</option>
              <option value="Maintenance">Maintenance</option>
              <option value="Attention">Attention</option>
            </select>
          </div>
        </div>

        <div className="fleet-table-scroll">
          <table className="fleet-table">
            <thead>
              <tr>
                <th>Vehicle ID</th>
                <th>Model</th>
                <th>Location</th>
                <th>
                  <span className="fleet-battery-heading">
                    <Battery size={14} />
                    Battery
                  </span>
                </th>
                <th>Utilisation</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {filteredVehicles.map((vehicle) => (
                <tr key={vehicle.id}>
                  <td className="fleet-vehicle-id">{vehicle.id}</td>

                  <td>{vehicle.model}</td>

                  <td>{vehicle.location}</td>

                  <td>
                    <div className="fleet-battery-cell">
                      <span>{vehicle.battery}%</span>

                      <div className="fleet-mini-progress">
                        <div
                          className={`fleet-mini-progress-fill ${
                            vehicle.battery < 25 ? "low-battery" : ""
                          }`}
                          style={{ width: `${vehicle.battery}%` }}
                        />
                      </div>
                    </div>
                  </td>

                  <td>{vehicle.usage}%</td>

                  <td>
                    <span
                      className={`fleet-status-badge ${vehicle.status.toLowerCase()}`}
                    >
                      {vehicle.status}
                    </span>
                  </td>
                </tr>
              ))}

              {filteredVehicles.length === 0 && (
                <tr>
                  <td colSpan={6} className="fleet-empty-state">
                    No vehicles match your search.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <p className="fleet-table-footnote">
          Sample vehicle records for prototype demonstration.
          Fleet totals are illustrative.
        </p>
      </div>
    </div>
  );
}