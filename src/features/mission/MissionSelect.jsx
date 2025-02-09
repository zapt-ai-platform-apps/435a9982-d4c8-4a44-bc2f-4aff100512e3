import React from 'react';

const missions = [
  {
    id: 1,
    name: 'Operation Silent Strike',
    description: 'Infiltrate enemy territory and eliminate the target silently.',
  },
  {
    id: 2,
    name: 'Longshot Assassination',
    description: 'Take a long-range shot in a high-stakes environment.',
  },
  {
    id: 3,
    name: 'Urban Infiltration',
    description: 'Navigate a dense urban area to complete your objective.',
  },
];

export default function MissionSelect({ onNavigate }) {
  const handleStartMission = (mission) => {
    console.log(`Mission selected: ${mission.name}`);
    onNavigate('snipingView');
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4 text-center">Select Your Mission</h2>
      <div className="space-y-4">
        {missions.map((mission) => (
          <div key={mission.id} className="p-4 bg-gray-800 rounded shadow">
            <h3 className="text-xl font-semibold">{mission.name}</h3>
            <p className="text-sm mb-2">{mission.description}</p>
            <button
              className="px-4 py-2 bg-red-600 hover:bg-red-700 transition duration-300 rounded cursor-pointer"
              onClick={() => handleStartMission(mission)}
            >
              Start Mission
            </button>
          </div>
        ))}
      </div>
      <div className="mt-6 text-center">
        <button
          className="px-4 py-2 bg-gray-600 hover:bg-gray-700 transition duration-300 rounded cursor-pointer"
          onClick={() => onNavigate('home')}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}