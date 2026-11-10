
import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
} from "recharts";

export default function StrategySimulator() {
  const [units, setUnits] = useState(300000);
  const [price, setPrice] = useState(140000);
  const [cost, setCost] = useState(115000);
  const [growth, setGrowth] = useState(15);

  const projectedUnits = Math.round(units * (1 + growth / 100));
  const revenue = projectedUnits * price;
  const variableCost = projectedUnits * cost;
  const grossProfit = revenue - variableCost;
  const margin = revenue ? (grossProfit / revenue) * 100 : 0;

  const formatCr = (value) =>
    `₹${(value / 10000000).toFixed(1)} Cr`;

  const chartData = [
    {
      name: "Current baseline",
      Revenue: (units * price) / 10000000,
      Cost: (units * cost) / 10000000,
    },
    {
      name: "Scenario",
      Revenue: revenue / 10000000,
      Cost: variableCost / 10000000,
    },
  ];

  return (
    <div className="strategy-page">
      <div className="strategy-heading">
        <div>
          <p className="strategy-eyebrow">BUSINESS INTELLIGENCE</p>
          <h1>Strategy Simulator</h1>
          <p>Explore how business assumptions affect Ather's performance.</p>
        </div>
        <span className="demo-label">ILLUSTRATIVE SCENARIO</span>
      </div>

      <div className="strategy-layout">
        <section className="strategy-panel">
          <h2>Scenario assumptions</h2>
          <p className="strategy-muted">
            Adjust the inputs to simulate a business outcome.
          </p>

          <div className="strategy-control">
            <label>Current annual vehicle sales</label>
            <strong>{units.toLocaleString("en-IN")} units</strong>
            <input
              type="range"
              min="100000"
              max="500000"
              step="10000"
              value={units}
              onChange={(e) => setUnits(Number(e.target.value))}
            />
          </div>

          <div className="strategy-control">
            <label>Average selling price</label>
            <strong>₹{price.toLocaleString("en-IN")}</strong>
            <input
              type="range"
              min="80000"
              max="200000"
              step="5000"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
            />
          </div>

          <div className="strategy-control">
            <label>Estimated cost per vehicle</label>
            <strong>₹{cost.toLocaleString("en-IN")}</strong>
            <input
              type="range"
              min="60000"
              max="180000"
              step="5000"
              value={cost}
              onChange={(e) => setCost(Number(e.target.value))}
            />
          </div>

          <div className="strategy-control">
            <label>Sales growth assumption</label>
            <strong>{growth}%</strong>
            <input
              type="range"
              min="-20"
              max="60"
              step="5"
              value={growth}
              onChange={(e) => setGrowth(Number(e.target.value))}
            />
          </div>
        </section>

        <section className="strategy-results">
          <h2>Projected business outcome</h2>

          <div className="strategy-kpi-grid">
            <div className="strategy-kpi">
              <span>Projected sales</span>
              <strong>{projectedUnits.toLocaleString("en-IN")}</strong>
            </div>
            <div className="strategy-kpi">
              <span>Projected revenue</span>
              <strong>{formatCr(revenue)}</strong>
            </div>
            <div className="strategy-kpi">
              <span>Estimated gross profit</span>
              <strong>{formatCr(grossProfit)}</strong>
            </div>
            <div className="strategy-kpi">
              <span>Gross margin</span>
              <strong>{margin.toFixed(1)}%</strong>
            </div>
          </div>

          <div className="strategy-panel strategy-chart-panel">
            <h2>Revenue vs estimated cost</h2>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#294137" />
                <XAxis dataKey="name" stroke="#9aafa5" />
                <YAxis stroke="#9aafa5" />
                <Tooltip
                  formatter={(value) => `₹${value.toFixed(1)} Cr`}
                />
                <Legend />
                <Bar dataKey="Revenue" fill="#42d6a4" radius={[5, 5, 0, 0]} />
                <Bar dataKey="Cost" fill="#e4a45e" radius={[5, 5, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="strategy-insight">
            <strong>Scenario insight</strong>
            <p>
              At the selected assumptions, projected sales are{" "}
              {projectedUnits.toLocaleString("en-IN")} units, with an estimated
              gross margin of {margin.toFixed(1)}%.
              {grossProfit < 0
                ? " Estimated vehicle costs exceed revenue. Review pricing or cost assumptions."
                : " Estimated revenue exceeds the selected vehicle costs."}
            </p>
          </div>
        </section>
      </div>

      <p className="strategy-disclaimer">
        Demo model only. Assumptions are user-controlled and do not represent
        Ather's actual forecasts, audited results, or management guidance.
      </p>
    </div>
  );
}
