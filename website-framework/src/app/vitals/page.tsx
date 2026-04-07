import React from 'react';
// Note: Adjust this import path if you saved the component somewhere else!
import VitalsMonitor from './VitalsMonitor';

export const metadata = {
  title: 'System Vitals | Adel Faruque',
  description: 'Live hardware and network telemetry from my self-hosted Ubuntu production server.',
};

export default function VitalsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      
      <div className="w-full max-w-7xl">
        {/* Page Header */}
        <div className="mb-10 text-center">
          <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
            Production Environment
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-purple-200/80">
            Live hardware diagnostics and network telemetry streaming directly from my self-hosted Ubuntu server.
          </p>
        </div>

        {/* The Interactive CRT Monitor */}
        <VitalsMonitor />
        
      </div>
      
    </main>
  );
}