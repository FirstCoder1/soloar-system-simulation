import { FC } from "react";
import { DoubleSide } from "three";
import { Props } from "./types";

const Orbit:FC<Props> = ({radius}) =>{
    //rotate the ring 90 degrees in the x axis
    return <mesh rotation={[1.57,0,0]}>
        <ringGeometry args={[radius-0.01, radius, radius*15, radius*15]}/>
        <meshBasicMaterial color="white" side={DoubleSide}/>
    </mesh>
}

export default Orbit;