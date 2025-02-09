import React from 'react';

export default function HomeMenu({ onNavigate }) {
  return (
    <div className="flex flex-col items-center justify-center h-full space-y-6">
      <h1 className="text-4xl font-bold">Sniper Mission</h1>
      <p className="text-lg">
        Step into the world of elite snipers and undertake dangerous missions.
      </p>
      <div className="flex flex-col space-y-4">
        <button
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 transition duration-300 rounded cursor-pointer"
          onClick={() => onNavigate('missionSelect')}
        >
          Select Mission
        </button>
        <button
          className="px-6 py-3 bg-green-600 hover:bg-green-700 transition duration-300 rounded cursor-pointer"
          onClick={() => onNavigate('customization')}
        >
          Customize Gear
        </button>
        <button
          className="px-6 py-3 bg-purple-600 hover:bg-purple-700 transition duration-300 rounded cursor-pointer"
          onClick={() => onNavigate('storyLine')}
        >
          View Story
        </button>
      </div>
    </div>
  );
}