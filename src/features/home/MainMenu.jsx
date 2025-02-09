import React, { useState } from 'react';

export default function MainMenu({ onStartMission, onOpenCustomization, onOpenStoryline }) {
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const handleClick = (action) => {
    if (buttonDisabled) return;
    setButtonDisabled(true);
    console.log('Button clicked');
    action();
    setTimeout(() => {
      setButtonDisabled(false);
    }, 500);
  };

  return (
    <div className="flex flex-col items-center justify-center h-full space-y-4">
      <h1 className="text-4xl font-bold">The Shadows</h1>
      <p className="text-lg">Elite Sniper Simulation</p>
      <div className="flex flex-col space-y-2">
        <button 
          className="px-4 py-2 bg-blue-600 rounded cursor-pointer"
          onClick={() => handleClick(onStartMission)}
          disabled={buttonDisabled}
        >
          Start Mission
        </button>
        <button 
          className="px-4 py-2 bg-green-600 rounded cursor-pointer"
          onClick={() => handleClick(onOpenCustomization)}
          disabled={buttonDisabled}
        >
          Customize Gear
        </button>
        <button 
          className="px-4 py-2 bg-purple-600 rounded cursor-pointer"
          onClick={() => handleClick(onOpenStoryline)}
          disabled={buttonDisabled}
        >
          Storyline
        </button>
      </div>
    </div>
  );
}