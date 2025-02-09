import React from 'react';
import Game from './Game';

export default function App() {
  return (
    <div className="min-h-screen text-white bg-gray-900">
      <Game />
      <div className="fixed bottom-2 right-2 text-xs opacity-75 cursor-default">
        Made on <a href="https://www.zapt.ai" target="_blank" rel="noreferrer" className="underline text-blue-400">ZAPT</a>
      </div>
    </div>
  );
}