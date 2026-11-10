
import { useState } from "react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

import {
  ArrowUpRight,
  CheckCircle2,
  Clock3,
  Monitor,
  Sparkles,
  Battery,
  Thermometer,
  Gauge,
  Zap,
  AlertTriangle,
  Activity,
  Bike,
  MapPin,
  CalendarDays,
  Wrench,
  TrendingUp,
  Phone,
} from "lucide-react";

// VEHICLE DATABASE
// All performance figures and graph records are illustrative demo data.


const vehicles = {
  "Ather 450X": {
    battery: 94,
    temperature: 32,
    range: 118,
    consumption: 32,
    cycles: 186,
    status: "Healthy",
    charging: [22, 48, 35, 65, 42, 78, 55],
    distance: [18, 25, 32, 21, 38, 45, 29],
    efficiency: [34, 32, 33, 30, 31, 29, 32],
    service: {
      priority: "Upcoming",
      dateRange: "20 Nov – 05 Dec 2026",
      kmRange: "7,500 – 8,000 km",
      location: "Suggested Ather Service Location, Chetla",
      address: "25/24A, Station Road, Kolkata – 700027",
      phone: "+91 92400 83583",
    },
  },

  "Ather 450S": {
    battery: 91,
    temperature: 30,
    range: 105,
    consumption: 30,
    cycles: 154,
    status: "Healthy",
    charging: [30, 45, 25, 55, 40, 70, 48],
    distance: [15, 22, 28, 19, 35, 40, 26],
    efficiency: [32, 31, 30, 29, 31, 28, 30],
    service: {
      priority: "Normal",
      dateRange: "10–20 Dec 2026",
      kmRange: "8,000 – 8,500 km",
      location: "Suggested Ather Service Location, Chetla",
      address: "25/24A, Station Road, Kolkata – 700027",
      phone: "+91 92400 83583",
    },
  },

  "Ather 450 Apex": {
    battery: 97,
    temperature: 34,
    range: 125,
    consumption: 35,
    cycles: 98,
    status: "Excellent",
    charging: [18, 38, 52, 30, 65, 80, 45],
    distance: [22, 30, 36, 25, 42, 50, 33],
    efficiency: [37, 35, 36, 33, 34, 32, 35],
    service: {
      priority: "Normal",
      dateRange: "15–30 Dec 2026",
      kmRange: "8,500 – 9,000 km",
      location: "Suggested Ather Service Location, Chetla",
      address: "25/24A, Station Road, Kolkata – 700027",
      phone: "+91 92400 83583",
    },
  },

  "Ather Rizta S": {
    battery: 89,
    temperature: 33,
    range: 105,
    consumption: 31,
    cycles: 132,
    status: "Healthy",
    charging: [25, 40, 35, 60, 45, 72, 50],
    distance: [12, 18, 24, 20, 30, 35, 22],
    efficiency: [33, 32, 31, 30, 32, 29, 31],
    service: {
      priority: "Upcoming",
      dateRange: "18 Nov – 02 Dec 2026",
      kmRange: "7,000 – 7,500 km",
      location: "Suggested Ather Service Location, Chetla",
      address: "25/24A, Station Road, Kolkata – 700027",
      phone: "+91 92400 83583",
    },
  },

  "Ather Rizta Z": {
    battery: 68,
    temperature: 43,
    range: 72,
    consumption: 42,
    cycles: 385,
    status: "Attention Required",
    charging: [15, 28, 18, 42, 25, 55, 35],
    distance: [12, 18, 20, 15, 24, 30, 19],
    efficiency: [39, 42, 40, 44, 41, 43, 42],
    service: {
      priority: "Attention Required",
      dateRange: "08–15 Nov 2026",
      kmRange: "Within 250 km",
      location: "Suggested Ather Service Location, Chetla",
      address: "25/24A, Station Road, Kolkata – 700027",
      phone: "+91 92400 83583",
    },
  },
};


const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

// CREATE GRAPH DATA FOR EACH MODEL
const getGraphData = (vehicle) => ({
  charging: days.map((day, index) => ({
    day,
    charge: vehicle.charging[index],
  })),

  distance: days.map((day, index) => ({
    day,
    distance: vehicle.distance[index],
  })),

  efficiency: days.map((day, index) => ({
    day,
    efficiency: vehicle.efficiency[index],
  })),
});

// METRIC CARD
function Metric({ title, value, unit, icon: Icon, note }) {
  return (
    <div className="metric-card">
      <div className="metric-top">
        <span>{title}</span>
        <Icon size={20} />
      </div>

      <h3>
        {value}
        <small className="metric-unit"> {unit}</small>
      </h3>

      <p>{note}</p>
    </div>
  );
}

// GRAPH TOOLTIP STYLE
const tooltipStyle = {
  background: "#17211b",
  border: "1px solid #354532",
  borderRadius: 8,
  color: "#fff",
};

// MAIN COMPONENT
export default function VehicleIntelligence() {
  const [selectedVehicle, setSelectedVehicle] =
    useState("Ather 450X");

  const vehicle = vehicles[selectedVehicle];
  const graphData = getGraphData(vehicle);
  
  const [showCallbackForm, setShowCallbackForm] = useState(false);
  return (
    <div className="page-content">

      {/* PAGE HEADER */}
      <div className="welcome-section">
        <div>
          <p className="eyebrow">
            CONNECTED VEHICLE ANALYTICS
          </p>

          <h2>Vehicle Intelligence</h2>

          <p className="muted">
            Monitor vehicle health, battery performance and usage.
          </p>
        </div>

        <select
          className="vehicle-select"
          value={selectedVehicle}
          onChange={(event) =>
            setSelectedVehicle(event.target.value)
          }
        >
          {Object.keys(vehicles).map((name) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </select>
      </div>

      {/* SELECTED VEHICLE */}
      <div className="vehicle-selected-banner">
        <div className="vehicle-selected-icon">
          <Bike size={25} />
        </div>

        <div>
          <span>SELECTED VEHICLE</span>
          <h3>{selectedVehicle}</h3>
        </div>

        <div className="vehicle-health-badge">
          <span className="health-indicator" />
          {vehicle.status}
        </div>
      </div>

      {/* PERFORMANCE METRICS */}
      <div className="metrics-grid">

        <Metric
          title="Battery Health"
          value={vehicle.battery}
          unit="%"
          icon={Battery}
          note="Estimated battery condition"
        />

        <Metric
          title="Battery Temperature"
          value={vehicle.temperature}
          unit="°C"
          icon={Thermometer}
          note="Illustrative operating temperature"
        />

        <Metric
          title="Estimated Range"
          value={vehicle.range}
          unit="km"
          icon={Gauge}
          note="Estimated remaining range"
        />

        <Metric
          title="Energy Consumption"
          value={vehicle.consumption}
          unit="Wh/km"
          icon={Zap}
          note="Illustrative average consumption"
        />

      </div>

      {/* GRAPH 1: CHARGING ACTIVITY */}
      <div className="vehicle-analytics-grid">

        <section className="panel vehicle-chart-panel">

          <div className="panel-heading">
            <div>
              <h3>Charging Activity</h3>
              <p className="muted">
                Weekly energy added for {selectedVehicle}
              </p>
            </div>

            <span className="panel-tag">7 DAYS</span>
          </div>

          <div className="chart-area">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={graphData.charging}>

                <defs>
                  <linearGradient
                    id="chargeFill"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop
                      offset="0%"
                      stopColor="#b5f36b"
                      stopOpacity={0.35}
                    />

                    <stop
                      offset="95%"
                      stopColor="#b5f36b"
                      stopOpacity={0}
                    />
                  </linearGradient>
                </defs>

                <CartesianGrid
                  stroke="#29352e"
                  strokeDasharray="3 3"
                />

                <XAxis dataKey="day" stroke="#89978e" />
                <YAxis stroke="#89978e" />

                <Tooltip
                  contentStyle={tooltipStyle}
                  formatter={(value) => [`${value} kWh`, "Energy added"]}
                />

                <Area
                  type="monotone"
                  dataKey="charge"
                  stroke="#b5f36b"
                  fill="url(#chargeFill)"
                  strokeWidth={2.5}
                  activeDot={{ r: 5 }}
                />

              </AreaChart>
            </ResponsiveContainer>
          </div>
        </section>

        {/* GRAPH 2: DAILY RIDING DISTANCE */}
        <section className="panel vehicle-chart-panel">

          <div className="panel-heading">
            <div>
              <h3>Daily Riding Distance</h3>
              <p className="muted">
                Distance travelled each day
              </p>
            </div>

            <span className="panel-tag">KM</span>
          </div>

          <div className="chart-area">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={graphData.distance}>

                <CartesianGrid
                  stroke="#29352e"
                  strokeDasharray="3 3"
                  vertical={false}
                />

                <XAxis dataKey="day" stroke="#89978e" />
                <YAxis stroke="#89978e" />

                <Tooltip
                  contentStyle={tooltipStyle}
                  formatter={(value) => [`${value} km`, "Distance"]}
                />

                <Bar
                  dataKey="distance"
                  fill="#38bdf8"
                  radius={[5, 5, 0, 0]}
                  maxBarSize={38}
                />

              </BarChart>
            </ResponsiveContainer>
          </div>
        </section>

        {/* GRAPH 3: ENERGY EFFICIENCY */}
        <section className="panel vehicle-chart-panel">

          <div className="panel-heading">
            <div>
              <h3>Energy Efficiency Trend</h3>
              <p className="muted">
                Average energy consumption over the week
              </p>
            </div>

            <span className="panel-tag">Wh/km</span>
          </div>

          <div className="chart-area">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={graphData.efficiency}>

                <CartesianGrid
                  stroke="#29352e"
                  strokeDasharray="3 3"
                />

                <XAxis dataKey="day" stroke="#89978e" />
                <YAxis stroke="#89978e" />

                <Tooltip
                  contentStyle={tooltipStyle}
                  formatter={(value) => [`${value} Wh/km`, "Consumption"]}
                />

                <Line
                  type="monotone"
                  dataKey="efficiency"
                  stroke="#c084fc"
                  strokeWidth={3}
                  dot={{
                    fill: "#c084fc",
                    strokeWidth: 2,
                    r: 4,
                  }}
                  activeDot={{ r: 7 }}
                />

              </LineChart>
            </ResponsiveContainer>
          </div>
        </section>
        {/* SERVICE INTERVENTION */}
<section className="panel vehicle-chart-panel service-intervention-panel">

  <div className="panel-heading">
    <div>
      <h3>Service Intervention</h3>
      <p className="muted">
        Predictive maintenance recommendation
      </p>
    </div>

    <Wrench size={21} />
  </div>

  <div className={`service-priority ${
    vehicle.service.priority === "Attention Required"
      ? "priority-warning"
      : vehicle.service.priority === "Upcoming"
      ? "priority-upcoming"
      : "priority-normal"
  }`}>
    <span className="health-indicator" />
    {vehicle.service.priority}
  </div>

  <div className="service-detail">
    <div className="service-detail-icon">
      <CalendarDays size={19} />
    </div>

    <div>
      <span>Recommended service date</span>
      <strong>{vehicle.service.dateRange}</strong>
    </div>
  </div>

  <div className="service-detail">
    <div className="service-detail-icon">
      <Gauge size={19} />
    </div>

    <div>
      <span>Recommended odometer range</span>
      <strong>{vehicle.service.kmRange}</strong>
    </div>
  </div>

  <div className="service-location">
    <div className="service-location-heading">
      <MapPin size={19} />
      <strong>Suggested service location</strong>
    </div>

    <h4>{vehicle.service.location}</h4>

    <p>{vehicle.service.address}</p>

    <a href={`tel:${vehicle.service.phone}`}>
      <Phone size={15} />
      {vehicle.service.phone}
    </a>
  </div>

  <p className="service-disclaimer">
    Simulated predictive maintenance recommendation.
    Confirm service availability and schedule with Ather.
  </p>

</section>

      </div>

      {/* VEHICLE HEALTH */}
      <div className="vehicle-layout">

        <section className="panel">

          <div className="panel-heading">
            <div>
              <h3>Vehicle Health</h3>
              <p className="muted">
                Current demo assessment
              </p>
            </div>

            <Activity size={21} />
          </div>

          <div className="health-status">
            <span className="health-indicator" />
            <strong>{vehicle.status}</strong>
          </div>

          <div className="health-row">
            <span>Battery health</span>
            <strong>{vehicle.battery}%</strong>
          </div>

          <div className="progress-track">
            <div
              className="progress-fill"
              style={{ width: `${vehicle.battery}%` }}
            />
          </div>

          <div className="health-row">
            <span>Battery temperature</span>
            <strong>{vehicle.temperature}°C</strong>
          </div>

          <div className="health-row">
            <span>Charge cycles</span>
            <strong>{vehicle.cycles}</strong>
          </div>

          <div className="health-row">
            <span>Estimated range</span>
            <strong>{vehicle.range} km</strong>
          </div>

        </section>

        {/* VEHICLE INSIGHTS */}
        <section className="panel">

          <div className="panel-heading">
            <div>
              <h3>Performance Insights</h3>
              <p className="muted">
                Selected vehicle analytics
              </p>
            </div>

            <TrendingUp size={21} />
          </div>

          <div className="vehicle-insight-item">
            <span>Average weekly distance</span>
            <strong>
              {Math.round(
                vehicle.distance.reduce((a, b) => a + b, 0) / 7
              )} km/day
            </strong>
          </div>

          <div className="vehicle-insight-item">
            <span>Weekly energy added</span>
            <strong>
              {vehicle.charging.reduce((a, b) => a + b, 0)} kWh
            </strong>
          </div>

          <div className="vehicle-insight-item">
            <span>Average energy consumption</span>
            <strong>
              {(
                vehicle.efficiency.reduce((a, b) => a + b, 0) / 7
              ).toFixed(1)} Wh/km
            </strong>
          </div>

          <div className="alert-box">
            <AlertTriangle size={18} />

            <div>
              <strong>
  {vehicle.status === "Attention Required"
    ? "Service attention required"
    : "No active alerts"}
</strong>

<p>
  {vehicle.status === "Attention Required"
    ? "This vehicle requires a service inspection."
    : "No critical issues in the illustrative demo assessment."}
</p>
              <p>
                Illustrative demo data. Not a real vehicle diagnosis.
              </p>
            </div>
          </div>

        </section>

      </div>
      
      {/* SUBSCRIPTION & UI EXPERIENCE */}
      <section className="vehicle-subscription-section">

        {/* SUBSCRIPTION CARD */}
        <div className="vehicle-subscription-card">
          <div className="subscription-main">
            <div className="subscription-icon">
              <CheckCircle2 size={23} />
            </div>

            <div>
              <span className="subscription-eyebrow">
                VEHICLE INTELLIGENCE PLAN
              </span>
              <h3>Your subscription is active</h3>
              <p>
                Your subscription ends on{" "}
                <strong>30 November 2026</strong>
              </p>
            </div>
          </div>

          <a
            href="/subscription/renew"
            className="subscription-renew-link"
          >
            Renew Subscription
            <ArrowUpRight size={17} />
          </a>
        </div>

        {/* UI EXPERIENCE UPDATE */}
        <div className="ui-update-heading">
          <div>
            <span className="subscription-eyebrow">
              PRODUCT ROADMAP
            </span>
            <h3>UI Experience Update</h3>
            <p>
              Explore the current experience and what is coming next.
            </p>
          </div>

          <Sparkles size={22} />
        </div>

        <div className="ui-update-grid">

          {/* CURRENT UI */}
          <div className="ui-update-card current-ui">
            <div className="ui-update-card-heading">
              <div className="ui-update-icon">
                <Monitor size={19} />
              </div>

              <div>
                <span className="ui-version">CURRENT EXPERIENCE</span>
                <h4>Vehicle Intelligence 1.0</h4>
              </div>

              <span className="ui-status-live">LIVE</span>
            </div>

            <p className="ui-update-description">
              Your existing vehicle monitoring dashboard.
            </p>

            <ul className="ui-feature-list">
              <li>
                <CheckCircle2 size={15} />
                Battery health and temperature monitoring
              </li>
              <li>
                <CheckCircle2 size={15} />
                Charging and riding activity charts
              </li>
              <li>
                <CheckCircle2 size={15} />
                Energy efficiency insights
              </li>
              <li>
                <CheckCircle2 size={15} />
                Vehicle health and service recommendations
              </li>
              <li>
                <CheckCircle2 size={15} />
                Individual vehicle performance analytics
              </li>
            </ul>
          </div>

          {/* UPCOMING UI */}
          <div className="ui-update-card upcoming-ui">
            <div className="ui-update-card-heading">
              <div className="ui-update-icon upcoming-icon">
                <Sparkles size={19} />
              </div>

              <div>
                <span className="ui-version">UPCOMING EXPERIENCE</span>
                <h4>Vehicle Intelligence 2.0</h4>
              </div>

              <span className="ui-status-upcoming">COMING SOON</span>
            </div>

            <p className="ui-update-description">
              A smarter, more predictive vehicle intelligence experience.
            </p>

            <ul className="ui-feature-list upcoming-feature-list">
              <li>
                <Clock3 size={15} />
                Live vehicle telemetry and alerts
              </li>
              <li>
                <Clock3 size={15} />
                AI-powered predictive maintenance insights
              </li>
              <li>
                <Clock3 size={15} />
                Battery degradation and range forecasting
              </li>
              <li>
                <Clock3 size={15} />
                Multi-vehicle comparison dashboard
              </li>
              <li>
                <Clock3 size={15} />
                Downloadable vehicle performance reports
              </li>
            </ul>

            <div className="upcoming-ui-footer">
              <span className="upcoming-dot" />
              Planned features · Not yet available
            </div>
          </div>

        </div>
        
        {/* FAQ SECTION */}
        <div className="vehicle-faq-section">
          <div className="vehicle-faq-heading">
            <div>
              <h3>Quick Help & FAQs</h3>
              <p>Find answers to common questions.</p>
            </div>
            <span className="faq-count">HELP CENTRE</span>
          </div>

          <div className="vehicle-faq-list">
            <details>
              <summary>What does Vehicle Intelligence monitor?</summary>
              <p>
                It displays vehicle health, battery performance,
                charging activity, riding distance and efficiency insights.
              </p>
            </details>

            <details>
              <summary>Are the vehicle readings live?</summary>
              <p>
                The current prototype uses illustrative demo data.
                Live vehicle telemetry is a planned integration.
              </p>
            </details>

            <details>
              <summary>How can I renew my subscription?</summary>
              <p>
                Use the Renew Subscription option above.
                The renewal flow will be connected in a future update.
              </p>
            </details>

            <details>
              <summary>Can I get help with vehicle servicing?</summary>
              <p>
                Check the Service Intervention section for suggested
                maintenance information. Confirm availability with Ather.
              </p>
            </details>
          </div>

          <div className="faq-call-area">
            <div>
              <strong>Still need help?</strong>
              <p>Request a callback from our support team.</p>
            </div>

            <button
              className="faq-call-button"
              onClick={() => setShowCallbackForm(!showCallbackForm)}
            >
              {showCallbackForm ? "Close Form" : "Request a Call"}
              <span>↗</span>
            </button>
          </div>

          {showCallbackForm && (
            <form
              className="faq-callback-form"
              onSubmit={(event) => {
                event.preventDefault();
                alert(
                  "Callback request captured in this demo. Backend integration is required to send it."
                );
                setShowCallbackForm(false);
              }}
            >
              <input
                type="text"
                placeholder="Your name"
                required
              />

              <input
                type="tel"
                placeholder="Phone number"
                pattern="[0-9+\-\s]{10,15}"
                required
              />

              <button type="submit">
                Submit Callback Request
              </button>

              <p>
                Demo only: requests are not sent to a support team yet.
              </p>
            </form>
          )}
        </div>

      </section>
      
      {/* PARTNERS SECTION */}
      <section className="vehicle-partners-section">
        <div className="vehicle-partners-heading">
          <div>
            <span>OUR ECOSYSTEM</span>
            <h3>Partners & Network</h3>
          </div>
          <p>Building a smarter electric mobility ecosystem.</p>
        </div>

        <div className="vehicle-partners-grid">
          <div className="vehicle-partner-item">
            <span className="partner-symbol">⚡</span>
            <strong>Charging Network</strong>
            <small>Charging ecosystem</small>
          </div>

          <div className="vehicle-partner-item">
            <span className="partner-symbol">🔧</span>
            <strong>Service Network</strong>
            <small>Maintenance ecosystem</small>
          </div>

          <div className="vehicle-partner-item">
            <span className="partner-symbol">◈</span>
            <strong>Technology Partners</strong>
            <small>Connected mobility</small>
          </div>

          <div className="vehicle-partner-item">
            <span className="partner-symbol">🛡</span>
            <strong>Support Network</strong>
            <small>Rider assistance</small>
          </div>
        </div>

        <p className="partners-disclaimer">
          Partner categories shown for prototype illustration.
        </p>
      </section>



    </div>
  );
}
