
import {
  IndianRupee,
  Bike,
  TrendingUp,
  Activity,
} from "lucide-react";

const metrics = [
  {
    title: "Total Income",
    value: "₹940.7 Cr",
    change: "Q2 FY26",
    icon: IndianRupee,
  },
  {
    title: "Vehicles Sold",
    value: "65,595",
    change: "Q2 FY26",
    icon: Bike,
  },
  {
    title: "Adjusted Gross Margin",
    value: "22%",
    change: "Q2 FY26",
    icon: TrendingUp,
  },
  {
    title: "EBITDA Margin",
    value: "-10%",
    change: "Q2 FY26",
    icon: Activity,
  },
];

export default function Overview() {
  return (
    <div className="page-content">
      <div className="welcome-section">
        <div>
          <p className="eyebrow">BUSINESS PERFORMANCE</p>
          <h2>Good morning, Administrator</h2>
          <p className="muted">
            Here's an overview of Ather's business performance.
          </p>
        </div>

        <span className="period-tag">Q2 FY26 · Historical data</span>
      </div>

      <div className="metrics-grid">
        {metrics.map((metric) => {
          const Icon = metric.icon;

          return (
            <div className="metric-card" key={metric.title}>
              <div className="metric-top">
                <span>{metric.title}</span>
                <Icon size={20} />
              </div>

              <h3>{metric.value}</h3>
              <p>{metric.change}</p>
            </div>
          );
        })}
      </div>

      <div className="section-heading">
        <div>
          <h2>Business Intelligence</h2>
          <p className="muted">
            Key areas of operational and strategic analysis
          </p>
        </div>
      </div>

      <div className="insight-grid">
        <div className="insight-card">
          <span className="insight-number">01</span>
          <h3>Revenue & Growth</h3>
          <p>Track financial performance and sales momentum.</p>
        </div>

        <div className="insight-card">
          <span className="insight-number">02</span>
          <h3>Vehicle Analytics</h3>
          <p>Monitor battery health, range and vehicle performance.</p>
        </div>

        <div className="insight-card">
          <span className="insight-number">03</span>
          <h3>Fleet Operations</h3>
          <p>Understand utilisation, uptime and maintenance needs.</p>
        </div>

        <div className="insight-card">
          <span className="insight-number">04</span>
          <h3>Charging Network</h3>
          <p>Analyse station utilisation and charging demand.</p>
        </div>
      </div>
    </div>
  );
}
