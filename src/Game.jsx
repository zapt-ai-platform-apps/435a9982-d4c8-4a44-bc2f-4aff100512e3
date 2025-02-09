import React, { useState } from 'react';
import MainMenu from './features/home/MainMenu';
import GameScreen from './features/mission/GameScreen';
import CustomizationPanel from './features/customization/CustomizationPanel';
import Storyline from './features/story/Storyline';

export default function Game() {
  const [view, setView] = useState('menu');

  const handleStartMission = () => {
    console.log('Starting mission...');
    setView('mission');
  };

  const handleOpenCustomization = () => {
    console.log('Opening customization panel...');
    setView('customization');
  };

  const handleOpenStoryline = () => {
    console.log('Opening storyline...');
    setView('story');
  };

  const handleBackToMenu = () => {
    console.log('Returning to main menu...');
    setView('menu');
  };

  return (
    <div className="h-full">
      {view === 'menu' && (
        <MainMenu 
          onStartMission={handleStartMission} 
          onOpenCustomization={handleOpenCustomization} 
          onOpenStoryline={handleOpenStoryline} 
        />
      )}
      {view === 'mission' && <GameScreen onBack={handleBackToMenu} />}
      {view === 'customization' && <CustomizationPanel onBack={handleBackToMenu} />}
      {view === 'story' && <Storyline onBack={handleBackToMenu} />}
    </div>
  );
}