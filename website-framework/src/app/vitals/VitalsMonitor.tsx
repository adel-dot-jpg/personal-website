'use client';

import React, { useState, useEffect, useRef } from 'react';

interface ContainerInfo {
  name: string;
  image: string;
  status: string;
  state: string;
}

interface ApiResponse {
  timestamp: number;
  cpu_percent: number;
  mem_used_mb: number;
  mem_total_mb: number;
  mem_percent: number;
  disk_used_gb: number;
  disk_total_gb: number;
  disk_percent: number;
  network: {
    bytes_sent: number;
    bytes_recv: number;
    mbps_sent: number;
    mbps_recv: number;
  };
  containers: ContainerInfo[];
}

interface DisplayState {
  cpu: string;
  ram: string;
  ramRaw: string;
  disk: string;
  diskRaw: string;
  dockerCount: string;
  containerList: ContainerInfo[];
  spo2: string;
  paco2: string;
  netStatus: string;
  netRawMbps: string;
  bytesSent: number;
  bytesRecv: number;
}

const CRITICAL_DISPLAY: DisplayState = {
  cpu: 'BRAIN DEAD',
  ram: 'AMNESIA',
  ramRaw: '-- GB / -- GB',
  disk: 'THE VOID',
  diskRaw: '-- GB Free',
  dockerCount: 'GHOST TOWN',
  containerList: [],
  spo2: 'ASPHYX.',
  paco2: 'TOXIC',
  netStatus: 'COMA',
  netRawMbps: 'RX: 0 MB/s | TX: 0 MB/s',
  bytesSent: 0,
  bytesRecv: 0,
};

export default function VitalsMonitor() {
  const [powerOn, setPowerOn] = useState(true);
  const [uplinkActive, setUplinkActive] = useState(true);
  const [isCritical, setIsCritical] = useState(true);
  const [isDockerOpen, setIsDockerOpen] = useState(false);
  const [display, setDisplay] = useState<DisplayState>(CRITICAL_DISPLAY);
  const wsRef = useRef<WebSocket | null>(null);

  const uplinkRef = useRef(uplinkActive);
  useEffect(() => { uplinkRef.current = uplinkActive; }, [uplinkActive]);

  useEffect(() => {
    if (!uplinkActive) {
      wsRef.current?.close();
      wsRef.current = null;
      setIsCritical(true);
      setDisplay(CRITICAL_DISPLAY);
      return;
    }

    const connect = () => {
      const ws = new WebSocket('wss://vitals.adelfaruque.me/ws');
      wsRef.current = ws;

      ws.onmessage = (event) => {
        const data: ApiResponse = JSON.parse(event.data);
        const freeGb = data.disk_total_gb - data.disk_used_gb;

        setIsCritical(false);
        setDisplay({
          cpu: `${data.cpu_percent.toFixed(1)}%`,
          ram: `${data.mem_percent.toFixed(1)}%`,
          ramRaw: `${(data.mem_used_mb / 1024).toFixed(1)} GB / ${(data.mem_total_mb / 1024).toFixed(1)} GB`,
          disk: `${data.disk_percent.toFixed(1)}%`,
          diskRaw: `${freeGb} GB Free`,
          dockerCount: data.containers.length.toString(),
          containerList: data.containers,
          spo2: `${95 + Math.floor(Math.random() * 4)}%`,
          paco2: `${38 + Math.floor(Math.random() * 5)}`,
          netStatus: 'ACTIVE',
          netRawMbps: `RX: ${data.network.mbps_recv.toFixed(6)} MB/s | TX: ${data.network.mbps_sent.toFixed(6)} MB/s`,
          bytesSent: data.network.bytes_sent,
          bytesRecv: data.network.bytes_recv,
        });
      };

      ws.onerror = () => {
        setIsCritical(true);
        setDisplay(CRITICAL_DISPLAY);
      };

      ws.onclose = () => {
        setIsCritical(true);
        setDisplay(CRITICAL_DISPLAY);
        if (uplinkRef.current) setTimeout(connect, 3000); // <-- ref, not uplinkActive
      };
    };

    connect();

    return () => {
      wsRef.current?.close();
      wsRef.current = null;
    };
  }, [uplinkActive]);

  const themeColor = isCritical ? '#ff3b00' : '#0f0';
  const darkTheme = isCritical ? '#330500' : '#003300';
  const bgColor = isCritical ? '#050202' : '#050505';

  return (
    <div className="mx-auto w-full max-w-6xl" style={{ fontFamily: "Courier New" }}>
      <div className="rounded-3xl border-[16px] border-zinc-800 bg-zinc-900 p-4 shadow-2xl md:p-8">
        <div className="relative overflow-hidden rounded-xl border-8 border-black bg-black shadow-[inset_0_0_50px_rgba(0,0,0,1)] transition-colors duration-500"
          style={{
            boxShadow: powerOn ? `inset 0 0 100px ${darkTheme}` : 'none'
          }}>

            <div className={`relative selection:bg-red-500 transition-opacity duration-300 ease-in-out selection:text-black ${powerOn ? 'opacity-100': 'opacity-0'}`}
              style={{ color: themeColor }}>

              <div className="pointer-events-none absolute inset-0 z-10"
                style={{
                  backgroundImage: `linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(${isCritical ? '255, 59, 0' : '0, 255, 0'}, 0.02), rgba(0, 0, 255, 0.06))`,
                  backgroundSize: '100% 3px, 3px 100%'
                }} />

              <div className="pointer-events-none absolute left-0 right-0 z-20 h-[10%] animate-[roll_7s_linear_infinite] bg-black/50 shadow-[0_0_40px_rgba(0,0,0,0.8)]" />

              <div className="relative z-0 flex h-full flex-col gap-4 p-6">
                <header className="flex items-end justify-between border-b-2 pb-2 transition-colors duration-300" style={{ borderColor: themeColor }}>
                  <h1 className="m-0 text-xl font-bold tracking-widest uppercase md:text-2xl">SYS.VITALS // ADEL-SERVER</h1>
                  <div className="px-2 py-0.5 text-xs font-bold text-black transition-colors duration-300 md:text-sm" style={{ backgroundColor: themeColor }}>
                    {isCritical ? 'CRITICAL: CONNECTION LOST' : 'STABLE // MONITORING'}
                  </div>
                </header>

                <div className="grid flex-2 grid-cols-1 gap-4 md:grid-cols-3">
                  <VitalBox label="CPU Load" value={display.cpu} sub="Utilization" darkTheme={darkTheme} themeColor={themeColor} />
                  <VitalBox label="Memory (RAM)" value={display.ram} sub={display.ramRaw} darkTheme={darkTheme} themeColor={themeColor} />
                  <VitalBox label="Disk (SSD)" value={display.disk} sub={display.diskRaw} darkTheme={darkTheme} themeColor={themeColor} />

                  <div className="relative flex flex-col justify-center border p-4 transition-colors duration-300 hover:bg-white/5" style={{ borderColor: darkTheme, backgroundColor: 'rgba(0,0,0,0.2)' }}>
                    <div className="mb-2 flex cursor-pointer justify-between text-sm uppercase opacity-80" onClick={() => setIsDockerOpen(!isDockerOpen)}>
                      Infrastructure <span>{isDockerOpen ? '▲' : '▼'}</span>
                    </div>
                    <div className="m-0 text-4xl font-bold md:text-5xl">{display.dockerCount}</div>
                    <div className="mt-1 text-sm opacity-80 md:text-base">Active Containers</div>
                  </div>

                  <VitalBox label="SpO2 (Sat)" value={display.spo2} sub="Peripheral Capillary O2" darkTheme={darkTheme} themeColor={themeColor} />
                  <VitalBox label="PaCO2" value={display.paco2} sub="Arterial Carbon Dioxide" darkTheme={darkTheme} themeColor={themeColor} />
                </div>

                {isDockerOpen && (
                  <div className="md:max-h-23 px-2 overflow-y-auto text-xs md:text-sm border-1 cursor-pointer" style={{ borderColor: darkTheme, scrollbarWidth: 'thin', scrollbarColor: `${themeColor} ${darkTheme}` }}>
                    <table className="w-full text-left">
                      <thead className='b-1' style={{ backgroundColor: 'black', position: 'sticky', top: 0, zIndex: 1}}>
                        <tr>
                          <th className="p-1">Container</th>
                          <th className="p-1">Image</th>
                          <th className="p-1">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {display.containerList.length > 0
                          ? display.containerList.map((c, i) => (
                            <tr key={i} className='bg-black hover:bg-[#031a03]'>
                              <td className="p-1">{c.name}</td>
                              <td className="p-1">{c.image}</td>
                              <td className="p-1">{c.status}</td>
                            </tr>
                          ))
                          : <tr><td colSpan={3} className="p-1">No active containers</td></tr>
                        }
                      </tbody>
                    </table>
                  </div>
                )}

                <NetworkGraph
                  netStatus={display.netStatus}
                  netRawMbps={display.netRawMbps}
                  bytesSent={display.bytesSent}
                  bytesRecv={display.bytesRecv}
                  isCritical={isCritical}
                  darkTheme={darkTheme}
                  themeColor={themeColor}
                />

                <div className="relative flex flex-1 items-center overflow-hidden border border-red-600 pl-5 min-h-[100px]">
                  <div className="absolute top-2 text-xs uppercase text-red-900 md:text-lg" style={{ textShadow: '0 0 5px red' }}>Cardiac Rhythm (BPM: 0)</div>
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-0.5 w-[95%] bg-red-600 shadow-[0_0_10px_red]" />
                      <div className="absolute top-2 right-2 animate-pulse text-xl font-bold text-red-600 md:text-xl" style={{ textShadow: '0 0 10px red' }}>ASYSTOLE // FLATLINE</div>
                  </div>
                </div>

              <style dangerouslySetInnerHTML={{__html: `
                @keyframes roll { 0% { top: -15%; } 100% { top: 110%; } }
              `}} />
            </div>
        </div>

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

function NetworkGraph({ netStatus, netRawMbps, bytesSent, bytesRecv, isCritical, darkTheme, themeColor }: {
  netStatus: string;
  netRawMbps: string;
  bytesSent: number;
  bytesRecv: number;
  isCritical: boolean;
  darkTheme: string;
  themeColor: string;
}) {
  const HISTORY = 10;
  const sentHistory = useRef<number[]>(Array(HISTORY).fill(0));
  const recvHistory = useRef<number[]>(Array(HISTORY).fill(0));

  useEffect(() => {
    sentHistory.current = [...sentHistory.current.slice(1), bytesSent];
    recvHistory.current = [...recvHistory.current.slice(1), bytesRecv];
  }, [bytesSent, bytesRecv]);

  const allValues = [...sentHistory.current, ...recvHistory.current];
  const maxVal = Math.max(...allValues, 0.0001);

  const W = 500;
  const H = 80;
  const pad = 4;

  const toPoints = (history: number[]) =>
    history.map((v, i) => {
      const x = pad + (i / (HISTORY - 1)) * (W - pad * 2);
      const y = H - pad - (v / maxVal) * (H - pad * 2);
      return `${x},${y}`;
    }).join(' ');

  const sentPoints = toPoints(sentHistory.current);
  const recvPoints = toPoints(recvHistory.current);

  return (
    <div
      className="relative flex flex-col overflow-hidden border pl-5 pr-5 pt-2 pb-2 transition-colors duration-300 min-h-[160px]"
      style={{ borderColor: darkTheme, backgroundColor: 'rgba(0,0,0,0.2)' }}
    >
      <div className="flex justify-between items-center mb-1">
        <div className="text-xs uppercase opacity-80" style={{ textShadow: `0 0 5px ${themeColor}` }}>Network I/O</div>
        <div className="text-xs font-bold" style={{ textShadow: '0 0 10px green' }}>{netStatus}</div>
      </div>

      <svg
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="none"
        className="w-full"
        style={{ height: '90px' }}
      >
        {/* Grid lines */}
        {[0.25, 0.5, 0.75].map((t) => (
          <line
            key={t}
            x1={pad} y1={H - pad - t * (H - pad * 2)}
            x2={W - pad} y2={H - pad - t * (H - pad * 2)}
            stroke={darkTheme} strokeWidth="0.5"
          />
        ))}

        {/* RX line - blue */}
        <polyline
          points={recvPoints}
          fill="none"
          stroke="#3b8eea"
          strokeWidth="1.5"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        {/* RX fill */}
        <polyline
          points={`${pad},${H - pad} ${recvPoints} ${W - pad},${H - pad}`}
          fill="rgba(59,142,234,0.15)"
          stroke="none"
        />

        {/* TX line - red */}
        <polyline
          points={sentPoints}
          fill="none"
          stroke="#ff3b3b"
          strokeWidth="1.5"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        {/* TX fill */}
        <polyline
          points={`${pad},${H - pad} ${sentPoints} ${W - pad},${H - pad}`}
          fill="rgba(255,59,59,0.15)"
          stroke="none"
        />

        {/* Max label */}
        <text x={pad + 2} y={pad + 10} fill={themeColor} fontSize="8" opacity="0.6">
          {maxVal} Bytes
        </text>
      </svg>

      {/* Legend + live values */}
      <div className="flex justify-between text-xs mt-1 opacity-90">
        <span style={{ color: '#3b8eea', textShadow: '0 0 3px rgb(0,255,0)' }}>▬ {netRawMbps.split('|')[0]}</span>
        <span style={{ color: '#ff3b3b', textShadow: '0 0 3px rgb(255,0,0)'  }}>▬ {netRawMbps.split('|')[1]}</span>
      </div>
    </div>
  );
}

function VitalBox({ label, value, sub, darkTheme, themeColor }: { label: string; value: string; sub: string; darkTheme: string; themeColor: string; }) {
  return (
    <div className="relative flex flex-col justify-center border p-4 transition-colors duration-300" style={{ borderColor: darkTheme, backgroundColor: 'rgba(0,0,0,0.2)' }}>
      <div className="mb-2 text-xs uppercase opacity-80 md:text-sm">{label}</div>
      <div className="m-0 text-3xl font-bold md:text-4xl lg:text-5xl" style={{ textShadow: `0 0 5px ${themeColor}` }}>{value}</div>
      <div className="mt-1 text-xs opacity-80 md:text-base">{sub}</div>
    </div>
  );
}