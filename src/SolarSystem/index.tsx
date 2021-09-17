import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Planet from "./components/Planet";

const CanvasConfig = () => {
    const gl = useThree(state=>state.gl);
    gl.setSize(window.innerWidth,window.innerHeight)
    return null;
}

const SolarSystem = () => {
    return <Canvas camera={{position:[0,0,20]}}>
        <CanvasConfig/>
        <OrbitControls/>
        <Planet/>
    </Canvas>
}

export default SolarSystem;