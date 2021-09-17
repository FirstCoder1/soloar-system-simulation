import { Suspense } from 'react';
import SolarSystem from './SolarSystem';

function App() {
  return (
    <div className="App">
      <Suspense fallback={null}>
      <SolarSystem/>
      </Suspense>
    </div>
  );
}

export default App;
