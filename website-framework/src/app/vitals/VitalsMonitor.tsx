'use client';

import React, { useState, useEffect, useRef } from 'react';

// Define the TypeScript interfaces for our data
interface DockerContainer {
  name: string;
  status: string;
  ports: string;
}

interface VitalsData {
  cpu: string; cpuCores: string;
  ram: string; ramRaw: string;
  disk: string; diskRaw: string;
  dockerCount: string; uptime: string;
  spo2: string; paco2: string;
  netStatus: string; netRaw: string;
  containers: DockerContainer[];
}

const CRITICAL_STATE: VitalsData = {
  cpu: 'BRAIN DEAD', cpuCores: '-- Cores',
  ram: 'AMNESIA', ramRaw: '-- GB / -- GB',
  disk: 'THE VOID', diskRaw: '-- GB Free',
  dockerCount: 'GHOST TOWN', uptime: 'Uptime: ETERNITY',
  spo2: 'ASPHYXIATED', paco2: 'TOXIC',
  netStatus: 'COMA', netRaw: 'RX: 0 kbps | TX: 0 kbps',
  containers: []
};

export default function VitalsMonitor() {
  // Hardware Toggle States
  const [powerOn, setPowerOn] = useState(true);
  const [uplinkActive, setUplinkActive] = useState(true);
  
  // Internal Screen States
  const [isCritical, setIsCritical] = useState(true);
  const [isDockerOpen, setIsDockerOpen] = useState(false);
  const [vitals, setVitals] = useState<VitalsData>(CRITICAL_STATE);
  
  const lastNet = useRef({ sent: 0, recv: 0, time: 0 });

  useEffect(() => {
    let isMounted = true;

    const fetchVitals = async () => {
      // If the hardware Uplink button is toggled off, force the failure state
      if (!uplinkActive) {
        if (isMounted) {
          setIsCritical(true);
          setVitals(CRITICAL_STATE);
        }
        return;
      }

      try {
        // The real endpoint (only queried if uplink is active)
        const response = await fetch('https://api.adelfaruque.me/vitals');
        if (!response.ok) throw new Error("Server flatlined");
        const data = await response.json();

        if (!isMounted) return;

        // SUCCESS: Switch to Green Theme
        setIsCritical(false);

        const now = Date.now();
        let sentKbps = '0.0';
        let recvKbps = '0.0';

        if (lastNet.current.time !== 0) {
          const timeDiff = (now - lastNet.current.time) / 1000;
          sentKbps = ((data.net_sent - lastNet.current.sent) / 1024 / timeDiff).toFixed(1);
          recvKbps = ((data.net_recv - lastNet.current.recv) / 1024 / timeDiff).toFixed(1);
        }
        lastNet.current = { sent: data.net_sent, recv: data.net_recv, time: now };

        setVitals({
          cpu: `${data.cpu_percent}%`,
          cpuCores: `${data.cpu_cores} Cores Active`,
          ram: `${data.ram_percent}%`,
          ramRaw: `${data.ram_used} GB / ${data.ram_total} GB`,
          disk: `${data.disk_percent}%`,
          diskRaw: `${data.disk_free} GB Free`,
          dockerCount: data.containers.length.toString(),
          uptime: `Uptime: ${data.uptime}`,
          spo2: `${95 + Math.floor(Math.random() * 4)}%`,
          paco2: `${38 + Math.floor(Math.random() * 5)}`,
          netStatus: 'ACTIVE',
          netRaw: `RX (Down): ${recvKbps} kbps | TX (Up): ${sentKbps} kbps`,
          containers: data.containers
        });

      } catch (error) {
        if (!isMounted) return;
        // FAILURE: Switch to Red Theme
        setIsCritical(true);
        setVitals(CRITICAL_STATE);
      }
    };

    fetchVitals();
    const interval = setInterval(fetchVitals, 1000);
    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, [uplinkActive]); // Re-run effect if the uplink button is pressed

  // Dynamic theme variables based on connection state
  const themeColor = isCritical ? '#ff3b00' : '#0f0';
  const darkTheme = isCritical ? '#330500' : '#003300';
  const bgColor = isCritical ? '#050202' : '#050505';

  return (
    <div className="mx-auto w-full max-w-6xl font-mono">
      {/* The Hardware Case: 
        Dark zinc styling, thick borders, rounded corners to look like a physical CRT shell 
      */}
      <div className="rounded-3xl border-[16px] border-zinc-800 bg-zinc-900 p-4 shadow-2xl md:p-8">
        
        {/* The Screen Bezel */}
        <div className="relative overflow-hidden rounded-xl border-8 border-black bg-black shadow-[inset_0_0_50px_rgba(0,0,0,1)] transition-colors duration-500" 
             style={{ 
               minHeight: '750px',
               // If power is on, add a faint glow matching the current theme color
               boxShadow: powerOn ? `inset 0 0 100px ${darkTheme}` : 'none'
             }}>
          
          {/* Render nothing but black if the power is off */}
          {powerOn && (
            <div className="absolute inset-0 selection:bg-red-500 selection:text-black" 
                 style={{ backgroundColor: bgColor, color: themeColor, textShadow: `0 0 5px ${themeColor}` }}>
              
              {/* CRT Scanline Overlay */}
              <div className="pointer-events-none absolute inset-0 z-10" 
                   style={{
                     background: `linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(${isCritical ? '255, 59, 0' : '0, 255, 0'}, 0.02), rgba(0, 0, 255, 0.06))`,
                     backgroundSize: '100% 3px, 3px 100%'
                   }} />
              
              {/* Slowly Rolling Black CRT Line */}
              <div className="pointer-events-none absolute left-0 right-0 z-20 h-[10%] animate-[roll_7s_linear_infinite] bg-black/50 shadow-[0_0_40px_rgba(0,0,0,0.8)]" />

              {/* Main Content Grid */}
              <div className="relative z-0 flex h-full flex-col gap-4 p-6">
                <header className="flex items-end justify-between border-b-2 pb-2 transition-colors duration-300" style={{ borderColor: themeColor }}>
                  <h1 className="m-0 text-xl font-bold tracking-widest uppercase md:text-2xl">SYS.VITALS // ADEL-SERVER</h1>
                  <div className="px-2 py-0.5 text-xs font-bold text-black transition-colors duration-300 md:text-sm" style={{ backgroundColor: themeColor }}>
                    {isCritical ? 'CRITICAL: CONNECTION LOST' : 'STABLE // MONITORING'}
                  </div>
                </header>

                <div className="grid flex-2 grid-cols-1 gap-4 md:grid-cols-3">
                  <VitalBox label="CPU Load" value={vitals.cpu} sub={vitals.cpuCores} darkTheme={darkTheme} />
                  <VitalBox label="Memory (RAM)" value={vitals.ram} sub={vitals.ramRaw} darkTheme={darkTheme} />
                  <VitalBox label="Disk (SSD)" value={vitals.disk} sub={vitals.diskRaw} darkTheme={darkTheme} />
                  
                  {/* Interactive Infrastructure Box */}
                  <div className="relative flex flex-col justify-center border p-4 transition-colors duration-300 hover:bg-white/5" style={{ borderColor: darkTheme, backgroundColor: 'rgba(0,0,0,0.2)' }}>
                    <div className="mb-2 flex cursor-pointer justify-between text-sm uppercase opacity-80" onClick={() => setIsDockerOpen(!isDockerOpen)}>
                      Infrastructure <span>{isDockerOpen ? '▲' : '▼'}</span>
                    </div>
                    <div className="m-0 text-4xl font-bold md:text-5xl">{vitals.dockerCount}</div>
                    <div className="mt-1 text-sm opacity-80 md:text-base">Active Containers</div>
                    <div className="mt-2 text-sm opacity-80 md:text-base">{vitals.uptime}</div>
                  </div>

                  <VitalBox label="SpO2 (Sat)" value={vitals.spo2} sub="Peripheral Capillary O2" darkTheme={darkTheme} />
                  <VitalBox label="PaCO2" value={vitals.paco2} sub="Arterial Carbon Dioxide" darkTheme={darkTheme} />
                </div>

                {/* Expandable Docker Table */}
                {isDockerOpen && (
                  <div className="max-h-40 overflow-y-auto border p-4 text-xs md:text-sm" style={{ borderColor: darkTheme, backgroundColor: 'rgba(0,0,0,0.3)' }}>
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr><th className="p-1 border-b" style={{ borderColor: darkTheme }}>Container</th><th className="p-1 border-b" style={{ borderColor: darkTheme }}>Status</th><th className="p-1 border-b" style={{ borderColor: darkTheme }}>Ports</th></tr>
                      </thead>
                      <tbody>
                        {vitals.containers.length > 0 ? vitals.containers.map((c, i) => (
                          <tr key={i}>
                            <td className="p-1 border-b" style={{ borderColor: darkTheme }}>{c.name}</td>
                            <td className="p-1 border-b" style={{ borderColor: darkTheme }}>{c.status}</td>
                            <td className="p-1 border-b" style={{ borderColor: darkTheme }}>{c.ports}</td>
                          </tr>
                        )) : <tr><td colSpan={3} className="p-1">No active containers</td></tr>}
                      </tbody>
                    </table>
                  </div>
                )}

                {/* Network / Brainwaves */}
                <div className="relative flex flex-1 items-center overflow-hidden border pl-5 transition-colors duration-300 min-h-[100px]" style={{ borderColor: darkTheme, backgroundColor: 'rgba(0,0,0,0.2)' }}>
                  <div className="absolute top-2 text-xs uppercase opacity-80 md:text-sm">Brain Activity // Network I/O</div>
                  <div className="absolute top-8 text-2xl font-bold md:text-3xl">{vitals.netStatus}</div>
                  <div className="absolute bottom-2 text-xs opacity-80 md:text-base">{vitals.netRaw}</div>
                </div>

                {/* Cardiac Flatline */}
                <div className="relative flex flex-1 items-center overflow-hidden border border-red-600 pl-5 min-h-[100px]" style={{ backgroundColor: 'rgba(0,0,0,0.2)' }}>
                  <div className="absolute top-2 text-xs uppercase text-red-600 opacity-80 md:text-sm">Cardiac Rhythm (BPM: 0)</div>
                  <div className="absolute h-0.5 w-full bg-red-600 shadow-[0_0_10px_red]" />
                  <div className="absolute right-5 animate-pulse text-xl font-bold text-red-600 drop-shadow-[0_0_5px_red] md:text-2xl">ASYSTOLE // FLATLINE</div>
                </div>
              </div>

              {/* Global Keyframes embedded in component */}
              <style dangerouslySetInnerHTML={{__html: `
                @keyframes roll { 0% { top: -15%; } 100% { top: 110%; } }
              `}} />
            </div>
          )}
        </div>

        {/* Hardware Control Buttons on the Monitor Bezel */}
        <div className="mt-6 flex justify-end gap-4">
          <button 
            onClick={() => setUplinkActive(!uplinkActive)}
            className={`rounded px-6 py-2 text-sm font-bold uppercase tracking-wider transition-all duration-200 border-b-4 active:border-b-0 active:translate-y-[4px] ${
              uplinkActive 
                ? 'bg-zinc-700 text-zinc-300 border-zinc-950 hover:bg-zinc-600' 
                : 'bg-red-800 text-red-200 border-red-950 hover:bg-red-700'
            }`}
          >
            {uplinkActive ? 'Uplink: ON' : 'Uplink: CUT'}
          </button>
          
          <button 
            onClick={() => setPowerOn(!powerOn)}
            className={`rounded px-6 py-2 text-sm font-bold uppercase tracking-wider transition-all duration-200 border-b-4 active:border-b-0 active:translate-y-[4px] ${
              powerOn 
                ? 'bg-emerald-700 text-emerald-100 border-emerald-950 hover:bg-emerald-600' 
                : 'bg-zinc-800 text-zinc-500 border-zinc-950 hover:bg-zinc-700'
            }`}
          >
            PWR
          </button>
        </div>
      </div>
    </div>
  );
}

// Sub-component for individual metric boxes
function VitalBox({ label, value, sub, darkTheme }: { label: string, value: string, sub: string, darkTheme: string }) {
  return (
    <div className="relative flex flex-col justify-center border p-4 transition-colors duration-300" style={{ borderColor: darkTheme, backgroundColor: 'rgba(0,0,0,0.2)' }}>
      <div className="mb-2 text-xs uppercase opacity-80 md:text-sm">{label}</div>
      <div className="m-0 text-3xl font-bold md:text-4xl lg:text-5xl">{value}</div>
      <div className="mt-1 text-xs opacity-80 md:text-base">{sub}</div>
    </div>
  );
}