import { FC } from "react";
import { Props } from "./types";

const Planet:FC<Props> = () => {
    return <mesh>
        <sphereGeometry/>
        <meshBasicMaterial color="red"/>
    </mesh>
}

export default Planet;