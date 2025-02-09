import React from 'react';
import MissionBriefing from './components/MissionBriefing';
import SniperSimulator from './components/SniperSimulator';
import MadeOnZAPT from './components/MadeOnZAPT';

export default function App() {
  console.log("App component rendered: The Shadows: Elite Sniper");
  return (
    <div className="min-h-screen bg-darkbg text-light flex flex-col">
      <header className="p-4 text-center">
        <h1 className="text-4xl font-bold font-tactical">The Shadows: Elite Sniper</h1>
        <p className="mt-2">
          Welcome, Agent. Prepare to step into the shadows and execute your mission with precision.
        </p>
      </header>
      <main className="flex-grow p-4 h-full">
        <MissionBriefing />
        <SniperSimulator />
      </main>
      <footer className="p-4 text-center">
        <MadeOnZAPT />
      </footer>
    </div>
  );
}