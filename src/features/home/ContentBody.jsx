import React from 'react';

export default function ContentBody({ isStarting, handleStartMission }) {
  return (
    <main className="flex-grow px-4 md:px-20">
      <section className="my-8">
        <h2 className="text-2xl font-semibold mb-2">Mission Overview</h2>
        <p>
          You are an elite sniper tasked with covert operations in hostile territories.
          Employ stealth, precision, and tactical prowess as you navigate through high‐risk missions.
        </p>
      </section>
      <section className="my-8">
        <h2 className="text-2xl font-semibold mb-2">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-gray-800 rounded">
            <h3 className="text-xl font-bold">Stealth Mechanics</h3>
            <p>Blend into the shadows to outsmart your enemies.</p>
          </div>
          <div className="p-4 bg-gray-800 rounded">
            <h3 className="text-xl font-bold">Realistic Physics</h3>
            <p>
              Experience true-to-life bullet drop, wind effects, and trajectory calculations.
            </p>
          </div>
          <div className="p-4 bg-gray-800 rounded">
            <h3 className="text-xl font-bold">Diverse Missions</h3>
            <p>
              Engage in hostage rescue, sabotage, long-range assassination, and more.
            </p>
          </div>
          <div className="p-4 bg-gray-800 rounded">
            <h3 className="text-xl font-bold">Customization</h3>
            <p>
              Upgrade your weapons, gear, and skills to suit your unique play style.
            </p>
          </div>
        </div>
      </section>
      <section className="my-8 text-center">
        <button
          onClick={handleStartMission}
          disabled={isStarting}
          className="cursor-pointer bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded disabled:opacity-50"
        >
          {isStarting ? 'Preparing Mission...' : 'Start Mission'}
        </button>
      </section>
    </main>
  );
}