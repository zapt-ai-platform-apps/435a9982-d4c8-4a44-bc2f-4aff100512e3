import React from 'react';

export default function StoryLine({ onNavigate }) {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4 text-center">Mission Narrative</h2>
      <div className="max-w-2xl mx-auto space-y-4">
        <p>
          You are the elite sniper, tasked with a series of missions that test your precision, stealth, and resolve.
          Every decision you make could mean the difference between success and failure.
        </p>
        <p>
          In this mission, you must navigate hostile territory, avoid detection, and execute your target with flawless precision.
          Trust your instincts and rely on your custom gear to assist you.
        </p>
        <p>
          As challenges escalate, remember that every mission reveals more about the shadowy organization behind the chaos.
          Prepare for unexpected twists in your journey.
        </p>
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