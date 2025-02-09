import React, { useState } from 'react';
import HomeMenu from './components/HomeMenu';
import MissionSelect from './components/MissionSelect';
import SnipingView from './components/SnipingView';
import Customization from './components/Customization';
import StoryLine from './components/StoryLine';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('home');

  const navigateTo = (screen) => {
    console.log(`Navigating to ${screen} screen`);
    setCurrentScreen(screen);
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'home':
        return <HomeMenu onNavigate={navigateTo} />;
      case 'missionSelect':
        return <MissionSelect onNavigate={navigateTo} />;
      case 'snipingView':
        return <SnipingView onNavigate={navigateTo} />;
      case 'customization':
        return <Customization onNavigate={navigateTo} />;
      case 'storyLine':
        return <StoryLine onNavigate={navigateTo} />;
      default:
        return <HomeMenu onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      <div className="h-full">
        {renderScreen()}
      </div>
      <footer className="p-4 text-center">
        <a
          href="https://www.zapt.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer text-sm underline"
        >
          Made on ZAPT
        </a>
      </footer>
    </div>
  );
}