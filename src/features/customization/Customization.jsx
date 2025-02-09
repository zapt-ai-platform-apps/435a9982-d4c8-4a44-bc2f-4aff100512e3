import React, { useState } from 'react';

export default function Customization({ onNavigate }) {
  const [gear, setGear] = useState({
    scope: 'Standard',
    bulletType: 'Armor Piercing',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setGear({ ...gear, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setLoading(true);
    console.log('Saving gear customization:', gear);
    setTimeout(() => {
      setLoading(false);
      onNavigate('home');
    }, 1000);
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4 text-center">Gear Customization</h2>
      <div className="space-y-4 max-w-md mx-auto">
        <div>
          <label className="block mb-1">Scope Type</label>
          <input
            type="text"
            name="scope"
            value={gear.scope}
            onChange={handleChange}
            className="w-full p-2 border border-gray-700 rounded box-border text-black"
          />
        </div>
        <div>
          <label className="block mb-1">Bullet Type</label>
          <input
            type="text"
            name="bulletType"
            value={gear.bulletType}
            onChange={handleChange}
            className="w-full p-2 border border-gray-700 rounded box-border text-black"
          />
        </div>
        <button
          className="w-full px-4 py-2 bg-green-600 hover:bg-green-700 transition duration-300 rounded cursor-pointer"
          onClick={handleSave}
          disabled={loading}
        >
          {loading ? 'Saving...' : 'Save & Return'}
        </button>
        <button
          className="w-full px-4 py-2 bg-gray-600 hover:bg-gray-700 transition duration-300 rounded cursor-pointer"
          onClick={() => onNavigate('home')}
          disabled={loading}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}