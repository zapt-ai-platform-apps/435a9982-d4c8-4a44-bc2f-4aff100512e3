import React, { useState } from 'react';

export default function SniperSimulator() {
  console.log("SniperSimulator component rendered");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleSimulation = () => {
    console.log("Simulation started");
    setLoading(true);
    setResult(null);
    setTimeout(() => {
      const windSpeed = (Math.random() * 20).toFixed(1);
      const bulletDrop = (Math.random() * 5).toFixed(2);
      const distance = (Math.random() * 1000 + 500).toFixed(0);
      const simulationResult = { windSpeed, bulletDrop, distance };
      console.log("Simulation completed", simulationResult);
      setResult(simulationResult);
      setLoading(false);
    }, 3000);
  };

  return (
    <section className="p-4 border border-light rounded">
      <h2 className="text-2xl font-bold font-tactical mb-2">Sniper Simulation</h2>
      {result && (
        <div className="mb-4">
          <p>Wind Speed: {result.windSpeed} km/h</p>
          <p>Bullet Drop: {result.bulletDrop} m</p>
          <p>Distance: {result.distance} m</p>
        </div>
      )}
      <button
        className="bg-accent text-light px-4 py-2 rounded cursor-pointer"
        onClick={handleSimulation}
        disabled={loading}
      >
        {loading ? "Simulating..." : "Engage Simulation"}
      </button>
    </section>
  );
}