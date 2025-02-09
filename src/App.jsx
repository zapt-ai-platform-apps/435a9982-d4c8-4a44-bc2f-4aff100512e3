import React, { useState } from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';

export default function App() {
  const [isStarting, setIsStarting] = useState(false);

  const handleStartMission = () => {
    if (isStarting) return;
    console.log("Start Mission button clicked. Initiating mission...");
    setIsStarting(true);
    setTimeout(() => {
      console.log("Mission briefing loaded.");
      setIsStarting(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      <Header />
      <MainContent isStarting={isStarting} handleStartMission={handleStartMission} />
    </div>
  );
}