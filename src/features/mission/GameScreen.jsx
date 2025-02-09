import React, { useRef, useEffect, useState } from 'react';

export default function GameScreen({ onBack }) {
  const canvasRef = useRef(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('GameScreen mounted');
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    // Simulate rendering mission environment
    setTimeout(() => {
      context.fillStyle = 'black';
      context.fillRect(0, 0, canvas.width, canvas.height);
      context.fillStyle = 'white';
      context.font = '20px Arial';
      context.fillText('Mission in Progress...', 50, 50);
      setLoading(false);
      console.log('GameScreen rendering completed');
    }, 1000);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-full">
      {loading && <p>Loading mission...</p>}
      <canvas ref={canvasRef} width={800} height={600} className="border mb-4" />
      <button className="px-4 py-2 bg-red-600 rounded cursor-pointer" onClick={onBack}>
        Back to Menu
      </button>
    </div>
  );
}