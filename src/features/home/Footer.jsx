import React from 'react';

export default function Footer() {
  return (
    <>
      <footer className="py-4 text-center">
        <p>© {new Date().getFullYear()} The Shadows. All Rights Reserved.</p>
      </footer>
      <div className="fixed bottom-4 right-4">
        <a
          href="https://www.zapt.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer text-sm text-gray-400"
        >
          Made on ZAPT
        </a>
      </div>
    </>
  );
}