import { Suspense } from "react";
import SolarSystem from "./SolarSystem";
import loading_icon from "./assets/loading_icon.jpg";
const App = () => {
  return (
    <div className="App">
      <Suspense fallback={<img src={loading_icon} alt="loading" />}>
        <pointLight />
        <SolarSystem />
      </Suspense>
    </div>
  );
};

export default App;
