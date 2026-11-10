
import { useState } from "react";

import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import {
  BatteryCharging,
  Zap,
  Activity,
  MapPin,
  Clock3,
  TrendingUp,
} from "lucide-react";

// Illustrative energy data
const energyData = [
  { day: "Mon", energy: 420 },
  { day: "Tue", energy: 510 },
  { day: "Wed", energy: 465 },
  { day: "Thu", energy: 590 },
  { day: "Fri", energy: 550 },
  { day: "Sat", energy: 680 },
  { day: "Sun", energy: 620 },
];

const monthlyEnergyData = [
  { day: "Week 1", energy: 2850 },
  { day: "Week 2", energy: 3120 },
  { day: "Week 3", energy: 2980 },
  { day: "Week 4", energy: 3540 },
];

const demandData = [
  { time: "6 AM", sessions: 18 },
  { time: "8 AM", sessions: 42 },
  { time: "10 AM", sessions: 30 },
  { time: "12 PM", sessions: 25 },
  { time: "2 PM", sessions: 35 },
  { time: "4 PM", sessions: 48 },
  { time: "6 PM", sessions: 72 },
  { time: "8 PM", sessions: 58 },
  { time: "10 PM", sessions: 24 },
];

const stations = [
  {
    id: "ST-001",
    name: "Bengaluru Central",
    location: "Indiranagar",
    power: "60 kW",
    sessions: 284,
    utilisation: 86,
    status: "Operational",
  },
  {
    id: "ST-002",
    name: "Whitefield Hub",
    location: "Whitefield",
    power: "30 kW",
    sessions: 196,
    utilisation: 72,
    status: "Operational",
  },
  {
    id: "ST-003",
    name: "Koramangala Point",
    location: "Koramangala",
    power: "60 kW",
    sessions: 241,
    utilisation: 91,
    status: "Operational",
  },
  {
    id: "ST-004",
    name: "Electronic City",
    location: "Electronic City",
    power: "30 kW",
    sessions: 108,
    utilisation: 38,
    status: "Maintenance",
  },
  {
    id: "ST-005",
    name: "HSR Layout Hub",
    location: "HSR Layout",
    power: "60 kW",
    sessions: 173,
    utilisation: 64,
    status: "Operational",
  },
];

function ChargingStat({ title, value, subtitle, icon: Icon }) {
  return (
    <div className="charging-stat-card">
      <div className="charging-stat-top">
        <span>{title}</span>
        <div className="charging-stat-icon">
          <Icon size={19} />
        </div>
      </div>

      <h2>{value}</h2>
      <p>{subtitle}</p>
    </div>
  );
}

export default function SmartCharging() {
  const [energyPeriod, setEnergyPeriod] = useState("7 days");

  const chartData =
    energyPeriod === "7 days"
      ? energyData
      : monthlyEnergyData;

  return (
    <div className="page-content charging-page">

      {/* PAGE HEADER */}
      <div className="charging-heading">
        <div>
          <span className="charging-eyebrow">
            ENERGY INFRASTRUCTURE
          </span>

          <h1>Smart Charging</h1>

          <p>
            Monitor charging demand, energy consumption and station
            performance across the network.
          </p>
        </div>

        
      </div>

      {/* KPI CARDS */}
      <div className="charging-stats-grid">
        <ChargingStat
          title="Total Energy Delivered"
          value="3,835 kWh"
          subtitle="Illustrative weekly consumption"
          icon={Zap}
        />

        <ChargingStat
          title="Charging Sessions"
          value="1,002"
          subtitle="Illustrative weekly sessions"
          icon={BatteryCharging}
        />

        <ChargingStat
          title="Average Utilisation"
          value="70.2%"
          subtitle="Across demo stations"
          icon={Activity}
        />

        <ChargingStat
          title="Active Stations"
          value="4 / 5"
          subtitle="One station under maintenance"
          icon={MapPin}
        />
      </div>

      {/* CHARTS */}
      <div className="charging-charts-grid">

        {/* ENERGY CHART */}
        <section className="charging-panel">
          <div className="charging-panel-heading">
            <div>
              <h3>Energy Consumption</h3>

              <p>
                {energyPeriod === "7 days"
                  ? "Daily energy delivered (kWh)"
                  : "Weekly energy delivered (kWh)"}
              </p>
            </div>

            <select
              className="charging-period-select"
              value={energyPeriod}
              onChange={(e) => setEnergyPeriod(e.target.value)}
            >
              <option value="7 days">Last 7 days</option>
              <option value="4 weeks">Last 4 weeks</option>
            </select>
          </div>

          <div className="charging-chart">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient
                    id="energyGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop
                      offset="0%"
                      stopColor="#42d6a4"
                      stopOpacity={0.35}
                    />

                    <stop
                      offset="100%"
                      stopColor="#42d6a4"
                      stopOpacity={0.02}
                    />
                  </linearGradient>
                </defs>

                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="#263b34"
                />

                <XAxis
                  dataKey="day"
                  stroke="#8a9c94"
                  tickLine={false}
                  axisLine={false}
                />

                <YAxis
                  stroke="#8a9c94"
                  tickLine={false}
                  axisLine={false}
                />

                <Tooltip
                  contentStyle={{
                    background: "#14251f",
                    border: "1px solid #345247",
                    borderRadius: "10px",
                    color: "#ffffff",
                  }}
                />

                <Area
                  type="monotone"
                  dataKey="energy"
                  stroke="#42d6a4"
                  strokeWidth={3}
                  fill="url(#energyGradient)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </section>

        {/* DEMAND CHART */}
        <section className="charging-panel">
          <div className="charging-panel-heading">
            <div>
              <h3>Charging Demand</h3>
              <p>Sessions by time of day</p>
            </div>

            <Clock3 size={20} />
          </div>

          <div className="charging-chart">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={demandData}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="#263b34"
                />

                <XAxis
                  dataKey="time"
                  stroke="#8a9c94"
                  tickLine={false}
                  axisLine={false}
                />

                <YAxis
                  stroke="#8a9c94"
                  tickLine={false}
                  axisLine={false}
                />

                <Tooltip
                  contentStyle={{
                    background: "#14251f",
                    border: "1px solid #345247",
                    borderRadius: "10px",
                    color: "#ffffff",
                  }}
                />

                <Bar
                  dataKey="sessions"
                  fill="#42d6a4"
                  radius={[5, 5, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </section>
      </div>

      {/* STATION TABLE */}
      <section className="charging-panel station-panel">
        <div className="charging-panel-heading">
          <div>
            <h3>Charging Station Performance</h3>
            <p>Illustrative station-level operating metrics</p>
          </div>

          <span className="station-count">
            5 Stations
          </span>
        </div>

        <div className="charging-table-wrapper">
          <table className="charging-table">
            <thead>
              <tr>
                <th>Station</th>
                <th>Location</th>
                <th>Power</th>
                <th>Sessions</th>
                <th>Utilisation</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {stations.map((station) => (
                <tr key={station.id}>
                  <td>
                    <strong>{station.name}</strong>
                    <small>{station.id}</small>
                  </td>

                  <td>{station.location}</td>
                  <td>{station.power}</td>
                  <td>{station.sessions}</td>

                  <td>
                    <div className="utilisation-cell">
                      <span>{station.utilisation}%</span>

                      <div className="utilisation-track">
                        <div
                          className="utilisation-fill"
                          style={{
                            width: `${station.utilisation}%`,
                          }}
                        ></div>
                      </div>
                    </div>
                  </td>

                  <td>
                    <span
                      className={`station-status ${
                        station.status === "Operational"
                          ? "status-operational"
                          : "status-maintenance"
                      }`}
                    >
                      {station.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <p className="charging-data-note">
        Note: All station names, energy figures, sessions and
        utilisation metrics on this prototype screen are
        illustrative demo data, not live Ather network data.
      </p>

    </div>
  );
}
