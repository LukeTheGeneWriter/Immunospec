import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Phaseline from './Phaseline';

export default function SiteLayout() {
  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <Phaseline />
    </div>
  );
}
