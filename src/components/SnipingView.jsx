import React, { useRef, useEffect } from 'react';

export default function SnipingView({ onNavigate }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    console.log('SnipingView mounted, initializing canvas.');
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    // Set canvas dimensions to fill container
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    // Draw a simple landscape background
    context.fillStyle = '#2d2d2d';
    context.fillRect(0, 0, canvas.width, canvas.height);

    // Draw a target placeholder (a red circle)
    context.fillStyle = 'red';
    context.beginPath();
    context.arc(canvas.width * 0.7, canvas.height * 0.4, 20, 0, Math.PI * 2);
    context.fill();

    console.log('Canvas initialized with background and target.');
  }, []);

  return (
    <div className="relative h-full">
      <canvas ref={canvasRef} className="w-full h-full" />
      {/* Crosshair overlay */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-16 h-16 border-t border-b border-l border-r border-white rounded-full"></div>
      </div>
      <div className="absolute bottom-4 left-0 right-0 text-center">
        <button
          className="px-4 py-2 bg-gray-600 hover:bg-gray-700 transition duration-300 rounded cursor-pointer"
          onClick={() => {
            console.log('Ending mission, returning to Home.');
            onNavigate('home');
          }}
        >
          End Mission
        </button>
      </div>
    </div>
  );
}