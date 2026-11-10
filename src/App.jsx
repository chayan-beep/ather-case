
import { useState } from "react";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

import Overview from "./pages/Overview";
import VehicleIntelligence from "./pages/VehicleIntelligence";
import FleetManagement from "./pages/FleetManagement";
import SmartCharging from "./pages/SmartCharging";
import StrategySimulator from "./pages/StrategySimulator";
import CareLoop from "./pages/CareLoop";

export default function App() {
  const [activePage, setActivePage] = useState("Overview");

  const renderPage = () => {
    switch (activePage) {
      case "Overview":
        return <Overview />;

      case "Vehicle Intelligence":
        return <VehicleIntelligence />;

      case "Fleet Management":
        return <FleetManagement />;

      case "Smart Charging":
        return <SmartCharging />;

      case "Strategy Simulator":
        return <StrategySimulator />;

      case "CareLoop":
        return <CareLoop />;  

      default:
        return <Overview />;
    }
  };

  return (
    <div className="app-layout">
      <Sidebar
        activePage={activePage}
        setActivePage={setActivePage}
      />

      <main className="main-area">
        <Header activePage={activePage} />
        {renderPage()}
      </main>
    </div>
  );
}
