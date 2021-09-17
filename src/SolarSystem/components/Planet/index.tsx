import { useTexture } from "@react-three/drei";
import { FC } from "react";
import { Props } from "./types";

const Planet:FC<Props> = ({radius,distanceFromSun,map}) => {
    const mapTexture = useTexture(map)
    return <mesh position={[0,0,distanceFromSun]}>
        <sphereGeometry args={[radius]}/>
        <meshBasicMaterial map={mapTexture}/>
    </mesh>
}

export default Planet;