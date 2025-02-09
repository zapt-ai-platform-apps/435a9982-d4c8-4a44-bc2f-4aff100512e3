import React from 'react';
import ContentBody from './ContentBody';
import Footer from './Footer';

export default function MainContent({ isStarting, handleStartMission }) {
  return (
    <>
      <ContentBody isStarting={isStarting} handleStartMission={handleStartMission} />
      <Footer />
    </>
  );
}