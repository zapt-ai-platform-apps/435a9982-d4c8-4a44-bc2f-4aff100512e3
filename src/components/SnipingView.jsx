import React, { useRef, useEffect } from 'react';
import initSnipingCanvas from '../../utils/snipingCanvas';
import EndMissionButton from './EndMissionButton';

export default function SnipingView({ onNavigate }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    console.log('SnipingView mounted, initializing canvas.');
    const canvas = canvasRef.current;
    const cleanup = initSnipingCanvas(canvas);
    return cleanup;
  }, []);

  return (
    <div className="relative h-full">
      <canvas ref={canvasRef} className="w-full h-full" />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-16 h-16 border border-white rounded-full"></div>
      </div>
      <EndMissionButton onEnd={() => onNavigate('home')} />
    </div>
  );
}