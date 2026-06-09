'use client';

import { useEffect, useState } from 'react';

export function SplashScreen() {
  const [visible, setVisible] = useState(false);
  const [exiting, setExiting] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    setVisible(true);

    const exitTimer   = setTimeout(() => setExiting(true), 1500);
    const removeTimer = setTimeout(() => {
      setVisible(false);
      setRemoved(true);
    }, 2000);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (removed || !visible) return null;

  return (
    <div
      className={`splash-screen ${exiting ? 'splash-exit' : ''}`}
      aria-hidden="true"
    >
      <div className="splash-content">
        {/* Cubo 3D giratorio */}
        <div className="splash-cube-scene">
          <div className="splash-cube">
            <div className="splash-face splash-face-front"  />
            <div className="splash-face splash-face-back"   />
            <div className="splash-face splash-face-right"  />
            <div className="splash-face splash-face-left"   />
            <div className="splash-face splash-face-top"    />
            <div className="splash-face splash-face-bottom" />
          </div>
        </div>

        <h1 className="splash-title">PRAGMA</h1>
        <p className="splash-subtitle">Defensa Fiscal y Cumplimiento</p>
      </div>
    </div>
  );
}
