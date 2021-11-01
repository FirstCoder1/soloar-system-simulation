import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Planet from "./components/Planet";
import Orbit from "./components/Orbit";
import { planetList } from "../common/planets";
import { Color } from "three";
import { Fragment } from "react";
import { PlanetProperties } from "./types";
import Sun from "./components/Sun";
const CanvasConfig = () => {
  const { gl, scene } = useThree((state) => state);
  scene.background = new Color("black");
  gl.setSize(window.innerWidth, window.innerHeight);
  return null;
};

const SolarSystem = () => {
  return (
    <Canvas camera={{ position: [0, 40, 20] }}>
      <CanvasConfig />
      <OrbitControls />
      <pointLight />
      <Sun />

    </Canvas>
  );
};

export default SolarSystem;