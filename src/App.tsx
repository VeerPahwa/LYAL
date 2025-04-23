

import { Routes, Route, Link } from 'react-router-dom';
import HomeApp from './pages/Home'; 
import LGCSApp from './pages/LGCS'; 
import LALSApp from './pages/LALS'; 
import GQAMApp from './pages/GQAM'; 

function App() {
  return (
      <Routes>
        <Route path="/*" element={<HomeApp />} />
        <Route path="/LYAL/index" element={<HomeApp />} />
        <Route path="/LYAL/lgcs" element={<LGCSApp />} />
        <Route path="/LYAL/lals" element={<LALSApp />} />
        <Route path="/LYAL/gqam" element={<GQAMApp />} />
      </Routes>
  );
}

export default App;










