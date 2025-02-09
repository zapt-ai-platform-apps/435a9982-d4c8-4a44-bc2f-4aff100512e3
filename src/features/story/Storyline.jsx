import React from 'react';

export default function Storyline({ onBack }) {
  return (
    <div className="flex flex-col items-center justify-center h-full p-4">
      <h2 className="text-2xl font-bold mb-4">Mission Briefing</h2>
      <div className="bg-gray-800 p-4 rounded w-full max-w-md overflow-y-auto" style={{ maxHeight: '300px' }}>
        <p>
          You are an elite sniper working for a secret task force known as "The Shadows". Your mission is to penetrate hostile territory under the cover of darkness, neutralize high-value targets, and dismantle a shadowy organization. Every shot counts, and the weight of the mission rests on your precision, stealth, and resolve.
        </p>
        <p className="mt-2">
          Proceed with caution and be prepared for unexpected challenges. Adapt your strategy as the battlefield evolves, and remember, one moment of hesitation could cost you everything.
        </p>
      </div>
      <button className="mt-4 px-4 py-2 bg-red-600 rounded cursor-pointer" onClick={onBack}>
        Back to Menu
      </button>
    </div>
  );
}