import React, { useState } from 'react';

export default function CustomizationPanel({ onBack }) {
  const [weapon, setWeapon] = useState('Sniper Rifle');
  const [gear, setGear] = useState('Standard');
  const [upgrading, setUpgrading] = useState(false);

  const handleUpgrade = () => {
    if (upgrading) return;
    setUpgrading(true);
    console.log('Upgrading gear...');
    setTimeout(() => {
      console.log('Upgrade complete');
      setUpgrading(false);
    }, 1000);
  };

  return (
    <div className="flex flex-col items-center justify-center h-full space-y-4">
      <h2 className="text-2xl font-bold">Customize Your Gear</h2>
      <div className="flex flex-col space-y-2">
        <label>
          Weapon:
          <input 
            type="text" 
            className="box-border px-2 py-1 ml-2 text-black" 
            value={weapon} 
            onChange={(e) => setWeapon(e.target.value)} 
          />
        </label>
        <label>
          Gear:
          <input 
            type="text" 
            className="box-border px-2 py-1 ml-2 text-black" 
            value={gear} 
            onChange={(e) => setGear(e.target.value)} 
          />
        </label>
      </div>
      <button 
        className="px-4 py-2 bg-indigo-600 rounded cursor-pointer"
        onClick={handleUpgrade}
        disabled={upgrading}
      >
        {upgrading ? 'Upgrading...' : 'Upgrade'}
      </button>
      <button className="px-4 py-2 bg-red-600 rounded cursor-pointer" onClick={onBack}>
        Back to Menu
      </button>
    </div>
  );
}