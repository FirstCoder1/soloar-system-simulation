import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Planet from "./components/Planet";
import Orbit from "./components/Orbit";
import { planetList } from "../common/planets";
import { Color } from "three";
import { Fragment } from "react";
import {PlanetProperties} from './types'
const CanvasConfig = () => {
    const {gl,scene} = useThree(state=>state);
    scene.background = new Color("black");
    gl.setSize(window.innerWidth,window.innerHeight)
    return null;
}

const SolarSystem = () => {
    return <Canvas camera={{position:[0,60,60]}}>
        <CanvasConfig/>
        <OrbitControls/>
        {planetList.map((planet:PlanetProperties)=>{
            const {name,radius,distanceFromSun,map,bumpMap} = planet;
            return <Fragment key={name}>
                <Planet radius={radius} distanceFromSun={distanceFromSun} map={map} bumpMap={bumpMap}/>
                <Orbit radius={distanceFromSun}/>
                </Fragment>
        })}
    </Canvas>
}

export default SolarSystem;