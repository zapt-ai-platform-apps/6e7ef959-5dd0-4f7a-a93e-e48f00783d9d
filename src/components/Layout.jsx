import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <a 
        href="https://www.zapt.ai" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="zapt-badge"
      >
        Made on ZAPT
      </a>
    </div>
  );
}

export default Layout;