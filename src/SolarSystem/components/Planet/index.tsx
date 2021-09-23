import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { FC } from "react";
import { Mesh } from "three";
import { Props } from "./types";

const Planet:FC<Props> = ({radius,distanceFromSun,map,revolution}) => {
    const meshRef = useRef<Mesh>(null)
    const mapTexture = useTexture(map)
    let angle = 0; //angle in radians
    const increase = 6.28319/revolution
    useFrame(()=>{
        angle +=increase/100;
        if(angle >= 6.28319) angle = 0;
        if(meshRef.current){
            const {current:mesh} = meshRef;
            mesh.position.z = Math.cos(angle)*distanceFromSun
            mesh.position.x = Math.sin(angle)*distanceFromSun
            mesh.rotateY(0.1)
        }
    })
    return <mesh position={[0,0,distanceFromSun]} ref={meshRef}>
        <sphereGeometry args={[radius]}/>
        <meshBasicMaterial map={mapTexture}/>
    </mesh>
}

export default Planet;