import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HomeApp, LGCSApp, LALSApp, GQAMApp } from './App.tsx';
import './style.css';

const renderIfExists = (id: string, Component: React.FC) => {
  const el = document.getElementById(id);
  if (el) {
    const root = createRoot(el);
    root.render(<StrictMode><Component /></StrictMode>);
  }
};


renderIfExists('home-root', HomeApp);
renderIfExists('lgcs-root', LGCSApp);
renderIfExists('lals-root', LALSApp);
renderIfExists('gqam-root', GQAMApp);
